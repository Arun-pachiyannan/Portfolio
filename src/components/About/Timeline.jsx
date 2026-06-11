import { motion } from "framer-motion";

const timelineData = [
  {
    year: "2023",
    title: "Started Web Development",
    desc: "Learned HTML, CSS and JavaScript fundamentals.",
  },
  {
    year: "2024",
    title: "MERN Stack Journey",
    desc: "Built full-stack projects using React and Node.js.",
  },
  {
    year: "2025",
    title: "React Native",
    desc: "Started building mobile applications.",
  },
  {
    year: "2026",
    title: "Professional Developer",
    desc: "Creating scalable web and mobile applications.",
  },
];

function Timeline() {
  return (
    <div className="relative mt-16">

      <div
        className="
        absolute
        left-4
        top-0
        w-1
        h-full
        bg-red-500
        "
      />

      {timelineData.map((item, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
          }}
          className="
          relative
          pl-12
          mb-10
          "
        >
          <div
            className="
            absolute
            left-0
            top-2
            w-8
            h-8
            rounded-full
            bg-red-500
            "
          />

          <span className="text-red-500 font-bold">
            {item.year}
          </span>

          <h3 className="text-2xl font-bold text-white">
            {item.title}
          </h3>

          <p className="text-gray-400 mt-2">
            {item.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default Timeline;