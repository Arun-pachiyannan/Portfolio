import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Services from "../components/Services/Services";
import Projects from "../components/Projects/Projects";
import Experience from "../components/Experience/Experience";
import Testimonials from "../components/Testimonials/Testimonials";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section id="home" className="w-full">
        <Hero />
      </section>

      {/* About Section */}
      <section id="about" className="w-full">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="w-full">
        <Skills />
      </section>

      {/* Services Section */}
      <section id="services" className="w-full">
        <Services />
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full">
        <Projects />
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full">
        <Experience />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="w-full">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full">
        <Contact />
      </section>
    </div>
  );
};

export default Home;