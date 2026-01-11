import React from 'react';
import { Wifi, Zap, Shield, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center min-h-[85vh]">
          {/* Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 mt-10">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Internet
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                {" "}100% Fibra
              </span>
              <br />
              que conecta você
            </h1>
            <p className="text-xl mb-8 text-blue-100 leading-relaxed">
              Conheça os nossos planos e tenha a melhor experiência de internet! 
              Velocidade real, instalação grátis e Wi-Fi Plus incluso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={scrollToPlans}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Ver Planos
              </button>
              <a 
                href="https://wa.me/5585992036712" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-2 border-white hover:bg-white hover:text-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all flex items-center justify-center space-x-2"
              >
                <Phone size={20} />
                <span>Fale Conosco</span>
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-blue-100">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Zap className="text-orange-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Velocidade Real</div>
                  <div className="text-sm">100% Fibra Óptica</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Wifi className="text-orange-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Wi-Fi Grátis</div>
                  <div className="text-sm">Equipamento incluso</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-blue-100">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Shield className="text-orange-400" size={24} />
                </div>
                <div>
                  <div className="font-semibold">Instalação Grátis</div>
                  <div className="text-sm">Sem taxa de adesão</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:w-1/2 lg:pl-12">
            <div className="relative">
              <div className="w-96 h-96 mx-auto relative">
                {/* Animated circles */}
                <div className="absolute inset-0 border-4 border-orange-400/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-8 border-4 border-white/30 rounded-full animate-ping"></div>
                <div className="absolute inset-16 border-4 border-orange-400/50 rounded-full animate-pulse"></div>
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Wifi size={80} className="text-orange-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold">100%</div>
                    <div className="text-lg text-blue-200">Fibra Óptica</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;