import React, { useState, useEffect } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

import { heroData } from "../data/hero";

const Hero = ({ hasAnimated }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [typingSpeed, setTypingSpeed] = useState(150);

  const { roles } = heroData;

  useEffect(() => {
    const currentRole = roles[currentTextIndex];
    let timeout;

    if (!isDeleting) {
      if (currentText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        // Pause at the end of the word
        timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(100); // Set deleting speed
        }, 2000); // Pause for 2 seconds
      }
    }
    // Deleting logic
    else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, typingSpeed);
      } else {
        // Finished deleting, move to the next word
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        setTypingSpeed(150); // Reset to typing speed
      }
    }

    // The single cleanup function
    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, roles, typingSpeed]);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100 pt-20">
      {/*Background Elements*/}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400 opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 opacity-5 blur-3xl animate-pulse delay-500"></div>
      </div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:50px_50px]">
        <div className="relative z-10 max-w-6xl mx-auto px-6  text-center h-full flex flex-col justify-center ">
          <div
            className={`transition-all duration-1000 ${
              hasAnimated.hero
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
            id="hero"
          >
            {/*Greetings*/}
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-black text-white rounded-full text-sm font-medium animate -fade-in">
                {heroData.greeting}
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-black via-gray-800 to-gray-600 bg-clip-text text-transparent animate-fade-in-up">
              {heroData.name}
            </h1>

            {/* TypeWriter */}

            <div className="h-12 md:h-16 mb-6 flex items-center justify-center">
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-700">
                I'm a {""}
                <span className="relative">
                  <span className="text-blue-600 font-bold">
                    {currentText}
                    <span className="animate-pulse"></span>
                  </span>
                  <span className=""></span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
