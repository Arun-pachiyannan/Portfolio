import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skills"; // moved from local to data file

function Skills() {
  return (
    <section id="skills" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white"
        >
          Skills
        </motion.h2>

        <p className="text-gray-400 mt-6 max-w-2xl">
          Technologies and tools I use to create modern, scalable web and mobile applications.
        </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;