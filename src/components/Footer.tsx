import React from "react";
import { Phone, MessageCircle, Globe, Heart } from "lucide-react";
import imageRodapeOnze from "../assets/logoOnzeBranca-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <img
                className="w-[8rem] h-[3rem]"
                src={imageRodapeOnze}
                alt="Logo Onzenet"
              />
            </div>
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Conectando famílias através da melhor tecnologia em internet fibra
              óptica. Uma empresa familiar que trata cada cliente como parte da
              nossa família.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <Heart size={18} className="text-red-500" />
              <span>Feito com amor pela família OnzeneT</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#plans"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Planos
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-orange-400 transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="https://onzenet.com.br/sac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-orange-400 transition-colors flex items-center space-x-1"
                >
                  <Globe size={16} />
                  <span>Portal SAC</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href="https://wa.me/5585992868076"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle size={18} />
                <span>(85) 9 9286-8076</span>
              </a>
              <a
                href="tel:85992802871"
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Phone size={18} />
                <span>(85) 9 9280-2871</span>
              </a>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-orange-400">
                Horário de Atendimento
              </h4>
              <div className="text-sm text-gray-400 space-y-1">
                <div>Seg - Sex: 8h às 18h</div>
                <div>Sábado: 8h às 14h</div>
                <div className="text-green-400 font-medium">WhatsApp: 24h</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 OnzeneT Telecom. Todos os direitos reservados. Devs
              <span className="text-[#F63D4B] font-semibold">
                {" "}
                Fábio Mendonça
              </span>
              <span className="text-[#F63D4B] font-semibold">
                {" "}
                / Paulo Roberto
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <span>Internet 100% Fibra Óptica</span>
              <span>•</span>
              <span>Instalação Grátis</span>
              <span>•</span>
              <span>Wi-Fi Incluso</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
