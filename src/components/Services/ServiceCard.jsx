import { motion } from "framer-motion";

function ServiceCard({
  icon,
  title,
  description,
}) {
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
      relative
      bg-red-600
      text-white
      p-8
      rounded-[30px]
      shadow-xl
      overflow-hidden
      "
    >
      <div className="text-5xl mb-5">
        {icon}
      </div>

      <h3
        className="
        text-3xl
        font-bold
        mb-4
        "
      >
        {title}
      </h3>

      <p className="text-red-100">
        {description}
      </p>

      <div
        className="
        absolute
        -top-10
        -right-10
        w-32
        h-32
        bg-white/10
        rounded-full
        "
      />
    </motion.div>
  );
}

export default ServiceCard;