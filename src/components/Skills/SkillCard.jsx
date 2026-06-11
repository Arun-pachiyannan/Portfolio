import { motion } from "framer-motion";

function SkillCard({ icon: Icon, name, level }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.05,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        bg-white/5
        backdrop-blur-lg
        border border-white/10
        rounded-3xl
        p-6
        hover:border-red-500
        transition-all
        duration-300
      "
    >
      {/* ICON FIX HERE */}
      <div className="text-5xl text-red-500">
        <Icon />
      </div>

      <h3 className="text-xl font-bold text-white mt-4">
        {name}
      </h3>

      <div className="mt-5 h-2 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="h-full bg-red-500 rounded-full"
        />
      </div>

      <p className="text-gray-400 mt-3">
        {level}% Proficiency
      </p>
    </motion.div>
  );
}

export default SkillCard;