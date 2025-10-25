import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { contactLinks } from "../data/contact";

const Contact = ({ hasAnimated }) => {
  const contactLinksWithIcon = contactLinks.map((link) => ({
    ...link,
    icon:
      link.label === "Email Me" ? (
        <Mail className="w-5 h-5 mr-2" />
      ) : link.label === "GitHub" ? (
        <Github className="w-5 h-5" />
      ) : (
        <Linkedin className="w-5 h-5" />
      ),
  }));

  return (
    <section id="contacts" className="py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 delay-500 ${
            hasAnimated.contact
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold mb-8 ">Let's Work Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto ">
            I'm always interested in new opportunities and exciting
            projects.Feel Free to reach out if you'd like to collaborate or just
            say hello!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8">
            <a
              href={contactLinksWithIcon[0].href}
              className={`flex items-center justify-center w-full sm:w-auto ${contactLinksWithIcon[0].className}`}
            >
              {contactLinksWithIcon[0].icon}
              {contactLinksWithIcon[0].label}
            </a>
            <div className="flex sm:w-auto gap-4 sm:gap-8">
              <a
                href={contactLinksWithIcon[1].href}
                className={`flex justify-center
                  gap-2 items-center flex-1 sm:flex-none ${contactLinksWithIcon[1].className}`}
              >
                {contactLinksWithIcon[1].icon}
                {contactLinksWithIcon[1].label}
              </a>
              <a
                href={contactLinksWithIcon[2].href}
                className={`flex items-center gap-2 justify-center flex-1 sm:flex-none ${contactLinksWithIcon[2].className}`}
              >
                {contactLinksWithIcon[2].icon}
                {contactLinksWithIcon[2].label}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
