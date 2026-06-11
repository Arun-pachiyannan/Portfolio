import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(
  ScrollTrigger
);

function useScrollReveal(
  selector
) {
  useEffect(() => {
    gsap.utils
      .toArray(selector)
      .forEach((item) => {
        gsap.from(item, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",

          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          },
        });
      });
  }, [selector]);
}

export default useScrollReveal;