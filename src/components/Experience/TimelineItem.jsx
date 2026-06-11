import { motion } from "framer-motion";

function TimelineItem({
  year,
  company,
  role,
  description,
}) {
  return (
    <motion.div
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
      }}
      className="relative pl-12 pb-12"
    >
      {/* Circle */}

      <div
        className="
        absolute
        left-0
        top-2
        w-6
        h-6
        rounded-full
        bg-red-500
        border-4
        border-black
        "
      />

      {/* Content */}

      <div
        className="
        bg-white/5
        backdrop-blur-lg
        border border-white/10
        rounded-3xl
        p-6
        "
      >
        <span className="text-red-500 font-bold">
          {year}
        </span>

        <h3
          className="
          text-2xl
          font-bold
          text-white
          mt-2
          "
        >
          {role}
        </h3>

        <h4 className="text-red-400 mt-1">
          {company}
        </h4>

        <p
          className="
          text-gray-400
          mt-4
          "
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default TimelineItem;