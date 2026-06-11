import { CountUp } from "use-count-up";
import { motion } from "framer-motion";

function StatsCard({ number, suffix, title }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
      }}
      className="
      bg-white/5
      backdrop-blur-lg
      border border-white/10
      rounded-3xl
      p-6
      text-center
      "
    >
      <h3 className="text-4xl font-bold text-red-500">
        <CountUp
          end={number}
          duration={3}
        />
        {suffix}
      </h3>

      <p className="text-gray-400 mt-2">
        {title}
      </p>
    </motion.div>
  );
}

export default StatsCard;