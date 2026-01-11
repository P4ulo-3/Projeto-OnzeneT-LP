import React, { useState } from 'react';
import { Check, Wifi, Zap, Shield, MessageCircle, Phone } from 'lucide-react';

interface Plan {
  id: string;
  name: string;
  speed: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  color: string;
}

const Plans = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans: Plan[] = [
    {
      id: "plan-350",
      name: "Plano Residencial",
      speed: "350MB",
      price: 70.0,
      features: [
        "Instalação Grátis",
        "Wi-Fi Plus Incluso",
        "Internet 100% Fibra",
        "Suporte 24h",
        "Velocidade Garantida",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "plan-450",
      name: "Plano Família",
      speed: "450MB",
      price: 80.0,
      features: [
        "Instalação Grátis",
        "Wi-Fi Plus Incluso",
        "Internet 100% Fibra",
        "Suporte 24h",
        "Velocidade Garantida",
        "Ideal para múltiplos dispositivos",
      ],
      popular: true,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "plan-550",
      name: "Plano Premium",
      speed: "550MB",
      price: 90.0,
      features: [
        "Instalação Grátis",
        "Wi-Fi Plus Incluso",
        "Internet 100% Fibra",
        "Suporte 24h",
        "Velocidade Garantida",
        "Máxima performance",
        "Ideal para trabalho home office",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: "plan-450+fixo",
      name: "Plano Premium",
      speed: "450MB + Fixo",
      price: 89.9,
      features: [
        "Instalação Grátis",
        "Ligações Ilimitadas Para Todo o Brasil",
        "Wi-Fi Plus Incluso",
        "Internet 100% Fibra",
        "Suporte 24h",
        "Velocidade Garantida",
        "Máxima performance",
        "Ideal para trabalho home office",
      ],
      color: "from-black to-red-500",
    },
    {
      id: "plan-350+Max",
      name: "Plano Premium",
      speed: "350MB + HBOmax",
      price: 89.9,
      features: [
        "Instalação Grátis",
        "Wi-Fi Plus Incluso",
        "Internet 100% Fibra",
        "Suporte 24h",
        "Velocidade Garantida",
        "Máxima performance",
        "Ideal para trabalho home office",
      ],
      color: "bg-[#040228]",
    },
    {
      id: "plan-450+Max",
      name: "Plano Premium",
      speed: "450MB + HBOmax",
      price: 99.9,
      features: [
        "Instalação Grátis",
        "Wi-Fi Plus Incluso",
        "Internet 100% Fibra",
        "Suporte 24h",
        "Velocidade Garantida",
        "Máxima performance",
        "Ideal para trabalho home office",
      ],
      color: "bg-[#040228]",
    },
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
    const plan = plans.find(p => p.id === planId);
    if (plan) {
      const message = `Olá! Tenho interesse no ${plan.name} de ${plan.speed} por R$ ${plan.price.toFixed(2).replace('.', ',')}/mês. Gostaria de mais informações!`;
      window.open(`https://wa.me/5585992036712?text=${encodeURIComponent(message)}`, '_blank');
    }
  };

  const handleCallPlan = (planId: string) => {
    window.open('tel:85992036712', '_self');
  };

  return (
    <section id="plans" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Nossos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Planos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Escolha o plano ideal para você e sua família. Todos com instalação
            grátis e Wi-Fi Plus incluso!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.id} className="relative group">
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}

              <div
                className={`h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                  plan.popular ? "border-orange-200" : "border-gray-100"
                }`}
              >
                {/* Header */}
                <div
                  className={`bg-gradient-to-r ${plan.color} text-white p-8 rounded-t-2xl text-center`}
                >
                  <div className="mb-4">
                    <Zap className="mx-auto mb-2" size={40} />
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                  </div>
                  <div className="mb-4">
                    <span className="text-5xl font-bold">
                      {plan.speed.includes("max") ? (
                        <>
                           {plan.speed.replace("max", "")} 
                          <span className="font-medium text-[4rem] bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">
                            max
                          </span>
                        </>
                      ) : (
                        plan.speed
                      )}
                    </span>
                  </div>
                  <div className="text-lg opacity-90">Download/Upload</div>
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      R$ {plan.price.toFixed(2).replace(".", ",")}
                      <span className="text-lg text-gray-500 font-normal">
                        /mês
                      </span>
                    </div>
                    <p className="text-gray-500">Valores promocionais</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div
                          className={`w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mr-3 flex-shrink-0`}
                        >
                          <Check size={12} className="text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleSelectPlan(plan.id)}
                      className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center space-x-2`}
                    >
                      <MessageCircle size={18} />
                      <span>Contratar via WhatsApp</span>
                    </button>

                    <button
                      onClick={() => handleCallPlan(plan.id)}
                      className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all flex items-center justify-center space-x-2"
                    >
                      <Phone size={18} />
                      <span>Ligar Agora</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Por que escolher a OnzeneT?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Wifi className="text-white" size={28} />
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  100% Fibra Óptica
                </h4>
                <p className="text-gray-600">
                  Tecnologia de ponta para máxima velocidade e estabilidade
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-white" size={28} />
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  Instalação Gratuita
                </h4>
                <p className="text-gray-600">
                  Sem taxa de adesão, instalação e Wi-Fi incluso
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="text-white" size={28} />
                </div>
                <h4 className="font-semibold text-lg mb-2">Suporte 24h</h4>
                <p className="text-gray-600">
                  Atendimento especializado sempre que precisar
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;