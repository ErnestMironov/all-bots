import { motion } from 'framer-motion';

export const Wings = () => {
  return (
    <div className="absolute bottom-0 w-[58.92431rem] flex justify-center">
      <div className="flex justify-center gap-20 flex-1">
        <motion.img
          src="/images/arc.svg"
          alt="arc"
          className="h-[35.40763rem] w-auto absolute bottom-0 left-0"
          initial={{ x: 800, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
            duration: 1,
          }}
        />
        <motion.img
          src="/images/left-wings.svg"
          alt="left-wings"
          className="h-[26.2765rem]"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
            duration: 1,
          }}
        />
        <motion.img
          src="/images/left-wing-content.png"
          alt="left-wing-content"
          className="absolute bottom-0 left-0 h-[35.40763rem] w-auto"
          initial={{ opacity: 0, scale: 0.6, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: 'spring' as const,
            stiffness: 100,
            damping: 12,
            duration: 1,
          }}
        />
      </div>

      <div className="relative flex justify-center flex-1">
        <motion.img
          src="/images/right-wing.svg"
          alt="right-wing"
          className="h-[23.59963rem]"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
            duration: 1,
          }}
        />

        <motion.div
          className="h-[35.40763rem] w-auto absolute bottom-0 right-0"
          initial={{ x: -800, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
            duration: 1,
          }}
        >
          <img
            src="/images/arc.svg"
            alt="arc"
            className="h-full w-auto -scale-x-100"
          />
        </motion.div>

        <motion.img
          className="absolute bottom-0 right-0 h-[33.82581rem] w-auto"
          src="/images/right-wing-content.png"
          alt="right-wing-content"
          initial={{ opacity: 0, scale: 0.6, y: 80 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            type: 'spring' as const,
            stiffness: 100,
            damping: 12,
            duration: 1,
          }}
        />
      </div>
    </div>
  );
};
