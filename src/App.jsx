import { useEffect, useState } from "react";

// Hooks
import useLenis from "./hooks/useLenis";

// Components
import Loader from "./components/Loader/Loader";
import CustomCursor from "./components/Cursor/CustomCursor";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";

// Pages
import Home from "./pages/Home";

// Layout
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  useLenis();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // 🔥 LOADER SCREEN
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      {/* Global Effects */}
      <CustomCursor />
      <ParticleBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="w-full">
        <Home />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;