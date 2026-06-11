import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data/testimonials"; // moved outside

function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl md:text-7xl font-black text-white">
          Testimonials
        </h2>

        <p className="text-gray-400 mt-6 max-w-xl">
          What clients and colleagues say about working with me.
        </p>

        <div className="flex gap-6 mt-16 animate-[scroll_25s_linear_infinite]">
          {[...testimonials, ...testimonials].map((item, index) => (
            <TestimonialCard
              key={index}
              {...item}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;