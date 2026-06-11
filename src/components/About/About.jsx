import { motion } from "framer-motion";
import StatsCard from "./StatsCard";
import Timeline from "./Timeline";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const stats = [
  { number: 20, suffix: "+", title: "Projects Completed" },
  { number: 2, suffix: "+", title: "Years Learning" },
  { number: 10, suffix: "+", title: "Technologies" },
  { number: 100, suffix: "%", title: "Dedication" },
];

function About() {
  return (
    <section id="about" className="py-32 bg-black px-6">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black text-white"
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-3xl mt-8 text-lg"
        >
          I am a passionate Full Stack Developer specializing in React,
          React Native, Node.js, Express.js, and MongoDB. I enjoy building
          beautiful, scalable, and user-friendly digital experiences.
        </motion.p>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <StatsCard
                number={item.number}
                suffix={item.suffix}
                title={item.title}
              />
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20">
          <Timeline />
        </div>

      </div>
    </section>
  );
}

export default About;