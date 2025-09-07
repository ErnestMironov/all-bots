import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <div className="relative z-10 text-center flex flex-col items-center gap-2 self-start mt-10">
      <span className="text-green text-[1.5rem] leading-none">
        Smart filters. Trusted sources.
      </span>

      <motion.span
        className="text-[4rem] font-bold leading-none"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 15,
          duration: 0.6,
        }}
      >
        Let agents cut noise in
      </motion.span>

      <motion.span
        className="text-[4rem] font-bold leading-none flex items-center gap-2 justify-center"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 15,
          duration: 0.6,
          delay: 0.1,
        }}
      >
        <motion.img
          src="/images/robot-switcher.png"
          className="h-[3rem] w-auto"
          alt="robot-switcher"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{
            type: 'spring',
            stiffness: 150,
            damping: 20,
            duration: 0.8,
            delay: 0.2,
          }}
        />
        Auto Trading!
      </motion.span>

      <motion.button
        className="rounded-lg border-[1px] border-solid border-[#19ECB7] bg-[#114337] [box-shadow:0_1px_8.3px_0_rgba(44,_243,_176,_0.41)_inset] flex px-9 py-6 justify-center items-center gap-4 mt-6 leading-none"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          type: 'spring',
          stiffness: 80,
          damping: 25,
          duration: 2,
          delay: 0.8,
        }}
      >
        Create AutoBot
        <motion.img
          src="/images/robot.svg"
          className="w-[1.5rem]"
          alt="robot"
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.button>
    </div>
  );
};
