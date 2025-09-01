import { motion } from 'framer-motion';

export const Hero = () => {
  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 200,
        damping: 20,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  const robotVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 10,
      },
    },
  };

  return (
    <div className="relative z-10 text-center flex flex-col items-center gap-2 self-start mt-10">
      <span className="text-green text-[1.5rem] leading-none">
        Smart filters. Trusted sources.
      </span>

      <motion.span
        className="text-[4rem] font-bold leading-none"
        variants={textVariants}
      >
        Let agents cut noise in
      </motion.span>

      <motion.span
        className="text-[4rem] font-bold leading-none flex items-center gap-2 justify-center"
        variants={textVariants}
      >
        <motion.img
          src="/images/robot-switcher.png"
          className="h-[3rem] w-auto"
          alt="robot-switcher"
          variants={robotVariants}
          whileHover="hover"
        />
        Auto Trading!
      </motion.span>

      <motion.button
        className="rounded-lg border-[1px] border-solid border-[#19ECB7] bg-[#114337] [box-shadow:0_1px_8.3px_0_rgba(44,_243,_176,_0.41)_inset] flex px-9 py-6 justify-center items-center gap-4 mt-6 leading-none"
        variants={buttonVariants}
        whileHover="hover"
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
