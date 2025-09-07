import { motion } from 'framer-motion';
import { CircularVideoPlayer } from './CircularVideoPlayer';

export const Wings = () => {
  const leftWingImages = [
    {
      src: '/images/wings/left/1.png',
      width: 'w-[7.17719rem]',
      right: '2rem',
      top: '11rem',
    },
    {
      src: '/images/wings/left/2.png',
      width: 'w-[11.00031rem]',
      right: '3.5rem',
      top: '9rem',
    },
    {
      src: '/images/wings/left/3.png',
      width: 'w-[8.34675rem]',
      right: '6rem',
      top: '7rem',
    },
    {
      src: '/images/wings/left/4.png',
      width: 'w-[9.6165rem]',
      right: '3rem',
      top: '6rem',
    },
    {
      src: '/images/wings/left/5.png',
      width: 'w-[8.21394rem]',
      right: '0',
      top: '4rem',
    },
  ];

  const rightWingImages = [
    {
      src: '/images/wings/right/1.png',
      width: 'w-[8.66788rem]',
      left: '-1.1rem',
      top: '2.6rem',
    },
    {
      src: '/images/wings/right/2.png',
      width: 'w-[9.3835rem]',
      left: '1.5rem',
      top: '0.8rem',
    },
    {
      src: '/images/wings/right/3.png',
      width: 'w-[9.91569rem]',
      left: '2.3rem',
      top: '1.2rem',
    },
    {
      src: '/images/wings/right/4.png',
      width: 'w-[8.28706rem]',
      left: '1.5rem',
      top: '3rem',
    },
    {
      src: '/images/wings/right/5.png',
      width: 'w-[8.67763rem]',
      left: '-1.2rem',
      top: '2.7rem',
    },
  ];

  return (
    <div className="absolute top-[15.5rem] w-[58.92431rem] flex justify-center">
      <div className="flex justify-center gap-20 flex-1">
        <motion.img
          src="/images/arc.svg"
          alt="arc"
          className="h-[35.40763rem] w-auto absolute -bottom-[5rem] left-4"
          initial={{ x: 300, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
            duration: 1,
            delay: 0.1,
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
            delay: 0.1,
          }}
        />
        <div className="absolute bottom-0 left-0 h-[43rem] w-auto flex flex-col justify-center items-end">
          {leftWingImages.map((image, index) => {
            const lastIndex = leftWingImages.length - 1;
            const distanceFromBottom = lastIndex - index;
            const initialY = distanceFromBottom * 100;
            const initialRotate = distanceFromBottom * -5;

            return (
              <motion.img
                key={image.src}
                src={image.src}
                alt="left-wing-content"
                className={`${image.width} relative`}
                style={{ right: image.right, top: image.top }}
                initial={{
                  opacity: 0,
                  y: initialY,
                  rotate: initialRotate,
                  x: 70,
                }}
                animate={{ opacity: 1, y: 0, rotate: 0, x: 0 }}
                transition={{
                  type: 'spring' as const,
                  stiffness: 120,
                  damping: 15,
                  duration: 0.8,
                  delay: 0.1,
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative flex justify-center flex-1">
        <motion.img
          src="/images/right-wing.svg"
          alt="right-wing"
          className="h-[23.59963rem] relative top-4 right-[1.9rem]"
          initial={{ opacity: 0, y: 200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
            duration: 1,
            delay: 0.1,
          }}
        />

        <motion.div
          className="h-[35.40763rem] w-auto absolute -bottom-[3.5rem] right-[2rem]"
          initial={{ x: -300, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{
            type: 'spring' as const,
            stiffness: 100,
            damping: 15,
            duration: 1,
            delay: 0.1,
          }}
        >
          <img
            src="/images/arc.svg"
            alt="arc"
            className="h-full w-auto -scale-x-100 rotate-[-4deg]"
          />
        </motion.div>

        <div className="absolute bottom-0 right-0 h-[33.82581rem] w-auto flex flex-col justify-between">
          {rightWingImages.map((image, index) => {
            const lastIndex = rightWingImages.length - 1;
            const distanceFromBottom = lastIndex - index;
            const initialY = distanceFromBottom * 100;
            const initialRotate = distanceFromBottom * 10;

            return (
              <motion.img
                key={image.src}
                src={image.src}
                alt="right-wing-content"
                className={`${image.width} relative`}
                style={{ left: image.left, top: image.top }}
                initial={{
                  opacity: 0,
                  y: initialY,
                  rotate: initialRotate,
                  x: -70,
                }}
                animate={{ opacity: 1, y: 0, rotate: 0, x: 0 }}
                transition={{
                  type: 'spring' as const,
                  stiffness: 120,
                  damping: 15,
                  duration: 0.8,
                  delay: 0.1,
                }}
              />
            );
          })}
        </div>
      </div>
      <CircularVideoPlayer />
    </div>
  );
};
