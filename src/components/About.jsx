import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Smartphone,
  ExternalLink,
} from "lucide-react";

const About = ({ hasAnimated }) => {
  const features = [
    {
      icon: <Code className="w-8 h-8 mb-4 text-black" />,
      title: "Clean Code",
      description:
        "Writing maintainable,scalable code following best practices.",
    },
    {
      icon: <Palette className="w-8 h-8 mb-4 text-black" />,
      title: "UI/UX Design",
      description: "Creating intuitive interfaces with attention to detail.",
    },
    {
      icon: <Smartphone className="w-8 h-8 mb-4 text-black" />,
      title: "Responsive ",
      description:
        "Mobile-first approach enuring great experience on all devices. ",
    },
    {
      icon: <ExternalLink className="w-8 h-8 mb-4 text-black" />,
      title: "Performance",
      description: "Optimizing for fast load time and smooth interaction.",
    },
  ];

  return (
    <section id="about" className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-200 ${
            hasAnimated.about
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className=" text-lg text-gray-700 mb-6">
                {" "}
                Front-End Developer (Fresher) with strong skills in HTML5, CSS3,
                JavaScript (ES6+), React, and Tailwind CSS.
              </p>
              <p className=" text-lg text-gray-700 mb-6">
                {" "}
                Completed an apprenticeship at Goldmine Infotech, where I gained
                hands-on experience in building responsive web interfaces,
                implementing new features, debugging with Chrome DevTools, and
                ensuring cross- browser compatibility.
              </p>
              <p className=" text-lg text-gray-700 mb-6">
                {" "}
                Passionate about writing clean, maintainable code and
                continuously learning modern web technologies to deliver
                engaging user experiences.
              </p>
              <div className="flex space-x-4">
                <Github className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
                <Mail className="w-6 h-6 text-gray-600 hover:text-black cursor-pointer transition-colors" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6 ">
              {features.map((feature, index) => (
                <div
                  className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                  key={index}
                >
                  {feature.icon}
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
