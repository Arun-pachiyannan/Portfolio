import { motion } from "framer-motion";

function TestimonialCard({
  name,
  role,
  image,
  review,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="
      min-w-[350px]
      bg-white/5
      backdrop-blur-lg
      border
      border-white/10
      rounded-3xl
      p-6
      "
    >
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="
          w-16
          h-16
          rounded-full
          object-cover
          "
        />

        <div>
          <h3 className="text-white font-bold">
            {name}
          </h3>

          <p className="text-red-500">
            {role}
          </p>
        </div>
      </div>

      <p
        className="
        text-gray-400
        mt-6
        leading-relaxed
        "
      >
        "{review}"
      </p>
    </motion.div>
  );
}

export default TestimonialCard;