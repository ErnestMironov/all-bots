import { motion } from 'framer-motion';

export const CircularVideoPlayer = () => {
  return (
    <div className="absolute w-[25.4375rem] h-[16.875rem] -bottom-20 left-1/2 -translate-x-1/2">
      <motion.div
        className="flex justify-center items-center"
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
          className="absolute w-[42rem] max-w-[100vw]"
        />
      </motion.div>
    </div>
  );
};
