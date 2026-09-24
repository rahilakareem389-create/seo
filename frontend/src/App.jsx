import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>

      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RankBoost. All rights reserved.
      </footer>
    </>
  );
}

export default App;