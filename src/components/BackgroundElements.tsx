import { motion } from 'framer-motion';

export const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 flex justify-center w-screen overflow-hidden items-end">
      <img
        src="/images/norther-lights.svg"
        className="size-full absolute bottom-0 object-cover"
        alt="north-shining"
      />
      <motion.img
        src="/images/circle.svg"
        className="size-[88.0625rem] max-w-none relative top-[10rem]"
        alt="circle"
        animate={{ rotate: -360 }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};
