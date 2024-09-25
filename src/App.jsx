import Hero from "@/components/sections/Hero/Hero";
import Header from "@/components/layout/Header";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
