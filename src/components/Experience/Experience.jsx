import { motion } from "framer-motion";
import TimelineItem from "./TimelineItem";
import { experience } from "../../data/experience"; // moved outside

function Experience() {
  return (
    <section id="experience" className="py-32 bg-black px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white"
        >
          Experience
        </motion.h2>

        <p className="text-gray-400 mt-6 max-w-2xl">
          My journey as a developer, continuously learning and building modern applications.
        </p>

        <div className="relative mt-20">
          <div className="absolute left-3 top-0 w-1 h-full bg-red-500" />

          {experience.map((item) => (
            <TimelineItem key={item.year} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Experience;