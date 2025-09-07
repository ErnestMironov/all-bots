import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Tabs } from './Tabs';

export const CircularVideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const tabs = [
    { id: 'filter', label: 'Filter' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'auto', label: 'Auto' },
  ];

  const tabTimeSegments = {
    filter: 0,
    strategy: 20,
    auto: 24,
  };

  const handleTabChange = (tabId: string) => {
    console.log('Active tab:', tabId);

    if (
      videoRef.current &&
      tabTimeSegments[tabId as keyof typeof tabTimeSegments] !== undefined
    ) {
      const targetTime = tabTimeSegments[tabId as keyof typeof tabTimeSegments];
      videoRef.current.currentTime = targetTime;
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
          delay: 1,
        }}
      >
        <motion.video
          ref={videoRef}
          src="/videos/video.mp4"
          style={{
            clipPath: 'circle(50% at 50% 50%)',
          }}
          className="absolute size-[19.125rem] object-cover object-center"
          autoPlay
          muted
          loop
        />
        <motion.img
          src="/images/video-mask.svg"
          alt="video-mask"
          className="absolute w-[42rem] max-w-[100vw] -top-[21rem]"
        />

        <motion.div className="absolute top-[9rem] left-1/2 -translate-x-1/2">
          <Tabs
            tabs={tabs}
            defaultTab="filter"
            onTabChange={handleTabChange}
            className="backdrop-blur-sm rounded-lg px-2 py-1"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};
