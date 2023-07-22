import { motion, Variants } from "framer-motion";
import { skills } from "@/constants";

const Skills = () => {
  const discoverVariants: Variants = {
    offscreen: {
      color: "#FFFFFF",
      y: 20,
    },
    onscreen: {
      color: "#489FB5",
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  const profesionalVariants: Variants = {
    offscreen: {
      y: -20,
    },
    onscreen: {
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <motion.p
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={discoverVariants}
          className="text-base font-semibold leading-7 text-aqua"
        >
          Discover my Expertise
        </motion.p>
        <motion.h2
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true }}
          variants={profesionalVariants}
          className="mt-2 text-4xl font-bold tracking-tight text-neutral-200 sm:text-6xl"
        >
          Professional Skills
        </motion.h2>
        <div className="mt-10 text-center">
          {skills.map(({ name, strength }, index) => (
            <motion.span
              key={index}
              className={`text-lg leading-8 tracking-widest uppercase ${
                strength ? "text-neutral-200" : "text-neutral-500"
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.25 }}
            >
              {index !== 0 && <span className="text-slate-500">|</span>} {name}{" "}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
