import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import HeroBackground from "./HeroBackground";
import ScrollIndicator from "./ScrollIndicator";

import { staggerContainer } from "../../animations/heroAnimation";
import { fadeUp } from "../../animations/fadeUp";

function Hero() {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);

  // Play video muted on page load
  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = true;
    video.volume = 1;

    video.play().catch((err) => {
      console.log("Autoplay blocked:", err);
    });
  }, []);

  // Enable audio after first click
  useEffect(() => {
    const enableAudio = async () => {
      const video = videoRef.current;

      if (!video) return;

      try {
        video.muted = false;
        video.volume = 1;

        await video.play();

        console.log("Audio enabled");
      } catch (err) {
        console.log("Audio playback failed:", err);
      }

      window.removeEventListener("click", enableAudio);
    };

    window.addEventListener("click", enableAudio);

    return () => {
      window.removeEventListener("click", enableAudio);
    };
  }, []);

  const handleVideoEnd = () => {
    setVideoEnded(true);
  };

  return (
    <section
      id="home"
      className="
        relative
        h-screen
        w-full
        flex
        items-center
        overflow-hidden
        bg-black
      "
    >
      {!videoEnded ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          
          playsInline
          preload="metadata"
          onEnded={handleVideoEnd}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src="/images/profile.png"
          alt="Arun"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      )}

      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <HeroBackground />

      <div className="w-full h-full flex items-center px-10 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="text-red-500 text-lg">
            👋 Hello There
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-5xl md:text-7xl font-black text-white leading-tight"
          >
            Hi, I'm Arun
          </motion.h1>

          <motion.div variants={fadeUp}>
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "React Developer",
                2000,
                "React Native Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-red-500 text-2xl md:text-3xl font-bold"
            />
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-gray-400 max-w-xl"
          >
            I create modern web applications, mobile apps, and scalable digital
            experiences using React, React Native, Node.js, Express.js, and
            MongoDB.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex gap-4 mt-8 flex-wrap"
          >
            <button
              className="
                border border-red-500
                hover:bg-red-500
                hover:text-white
                px-8 py-4
                rounded-full
                text-white
                font-semibold
                transition
              "
            >
              Contact Me
            </button>
          </motion.div>
        </motion.div>
      </div>

      <ScrollIndicator />
    </section>
  );
}

export default Hero;