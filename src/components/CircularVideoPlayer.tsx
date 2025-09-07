import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { Tabs } from './Tabs';

export const CircularVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSource, setVideoSource] = useState('/videos/filter.mp4');
  const [loop, setLoop] = useState(false);
  const [activeTab, setActiveTab] = useState('filter');

  const tabs = [
    { id: 'filter', label: 'Filter' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'auto', label: 'Auto' },
  ];

  const handleTabChange = (tabId: string) => {
    console.log('Active tab:', tabId);
    setActiveTab(tabId);

    const videoMap = {
      filter: '/videos/filter.mp4',
      strategy: '/videos/strategy.mp4',
      auto: '/videos/chart-video.mp4',
    };

    const videoSrc = videoMap[tabId as keyof typeof videoMap];
    if (videoSrc) {
      setVideoSource(videoSrc);
      setLoop(tabId === 'auto');

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
        }
      }, 100);
    }
  };

  const handleVideoEnded = () => {
    const currentTabIndex = tabs.findIndex(tab => tab.id === activeTab);
    const nextTabIndex = currentTabIndex + 1;

    if (nextTabIndex < tabs.length) {
      const nextTab = tabs[nextTabIndex];
      handleTabChange(nextTab.id);
    }
  };

  return (
    <div className="absolute w-[25.4375rem] h-[16.875rem] -bottom-20 left-1/2 -translate-x-1/2">
      <motion.div
        className="flex justify-center items-center relative"
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: 'spring' as const,
          stiffness: 100,
          damping: 15,
          duration: 1,
          delay: 0.1,
        }}
      >
        <motion.video
          ref={videoRef}
          src={videoSource}
          key={videoSource}
          style={{
            clipPath: 'circle(50% at 50% 50%)',
          }}
          className="absolute size-[19.125rem] object-cover object-center"
          autoPlay
          muted
          loop={loop}
          onEnded={handleVideoEnded}
        />
        <motion.img
          src="/images/video-mask.svg"
          alt="video-mask"
          className="absolute w-[42rem] max-w-[100vw] -top-[21rem]"
        />

        <motion.div className="absolute top-[9rem] left-1/2 -translate-x-1/2">
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onTabChange={handleTabChange}
            className="backdrop-blur-sm rounded-lg px-2 py-1"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
