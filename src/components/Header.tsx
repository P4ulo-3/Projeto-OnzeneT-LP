import React, { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import imageLogoHeader from "../assets/logo-OnzeneT1.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col">
                <img
                  className="w-[8rem] h-[3rem]"
                  src={imageLogoHeader}
                  alt="Logo Onzenet"
                />
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Planos
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contato
            </button>
          </nav>

          {/* Contact Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://api.whatsapp.com/send/?phone=5585992036712&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <MessageCircle size={18} />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:85992868076"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
            >
              <Phone size={18} />
              <span>Ligar</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col space-y-3 mt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-700 text-left py-2"
              >
                Início
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 text-left py-2"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("plans")}
                className="text-gray-700 text-left py-2"
              >
                Planos
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-700 text-left py-2"
              >
                Contato
              </button>
              <div className="flex flex-col space-y-2 mt-4">
                <a
                  href="https://wa.me/5585992868076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                >
                  <MessageCircle size={18} />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:85992868076"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
                >
                  <Phone size={18} />
                  <span>Ligar</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
