import { useState, useEffect } from "react";

export const useScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    //clean smooth scroll

    document.documentElement.style.scrollBehavior = "auto";
  }, []);

  return showScrollTop;
};
