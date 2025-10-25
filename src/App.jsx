import React from "react";
import Navigation from "./components/Navigation";
import { userIntersectionObserver } from "./hooks/userIntersectionObserver";
import { useScrollToTop } from "./hooks/userScrollToTop";
import Hero from "./components/Hero";
import { Divide } from "lucide-react";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  const hasAnimated = userIntersectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <Hero hasAnimated={hasAnimated} />
      <About hasAnimated={hasAnimated} />
      <Projects hasAnimated={hasAnimated} />
      <Skills hasAnimated={hasAnimated} />
      <Contact hasAnimated={hasAnimated} />
      <Footer />
      <ScrollToTop showScrollTop={showScrollTop} />
    </div>
  );
};
export default App;
