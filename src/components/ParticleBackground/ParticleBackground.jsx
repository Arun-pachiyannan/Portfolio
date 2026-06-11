import Particles from "react-tsparticles";

function ParticleBackground() {
  return (
    <Particles
      id="particles"
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },

        fpsLimit: 60,

        particles: {
          number: {
            value: 50,
          },

          color: {
            value: "#ff1a1a",
          },

          links: {
            enable: true,
            color: "#ff1a1a",
            distance: 150,
          },

          move: {
            enable: true,
            speed: 1,
          },

          opacity: {
            value: 0.4,
          },

          size: {
            value: 2,
          },
        },
      }}
      className="
      fixed
      inset-0
      -z-10
      "
    />
  );
}

export default ParticleBackground;