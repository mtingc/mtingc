import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { cv, heroImage } from "@/constants";

const Hero = () => {
  const animation = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.5,
      },
    },
  };

  const animationAqua = {
    initial: {
      color: "#FFFFFF",
    },
    animate: {
      color: "#489FB5",
      transition: {
        duration: 1,
        delay: 1,
      },
    },
  };

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-neutral-900 lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-44 lg:pr-0">
            <motion.div
              initial="initial"
              animate="animate"
              variants={animation}
              className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl"
            >
              <h1 className="text-4xl font-bold tracking-wider text-slate-200 sm:text-6xl">
                Hi, I&apos;m{" "}
                <motion.span
                  initial="initial"
                  animate="animate"
                  variants={animationAqua}
                >
                  Martín.gc
                </motion.span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-200">
                With a solid 5-year experience, I have proven to be a passionate
                and proactive professional. My self-taught skills have allowed
                me to learn autonomously both the English language and the most
                relevant web technologies, such as JavaScript, TypeScript,
                Node.js, Angular, React, among others.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href={cv}
                  target="_blank"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold tracking-widest text-aqua shadow-sm hover:bg-aqua hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all duration-300"
                >
                  View CV
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image
          className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
          src={heroImage.src}
          alt={heroImage.alt}
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default Hero;
