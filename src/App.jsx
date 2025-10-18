import React from "react";
import Navigation from "./components/Navigation";
import { userIntersectionObserver } from "./hooks/userIntersectionObserver";
import { useScrollToTop } from "./hooks/userScrollToTop";
import Hero from "./components/Hero";
import { Divide } from "lucide-react";

const App = () => {
  const hasAnimated = userIntersectionObserver();
  const showScrollTop = useScrollToTop();

  return (
    <div className="min-h-screen bg-white text-black">
      <Navigation />
      <Hero hasAnimated={hasAnimated} />
    </div>
  );
};
export default App;
