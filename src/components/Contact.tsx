import React, { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    plan: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
Olá! Vim através do site da OnzeneT Telecom.

Nome: ${formData.name}
Telefone: ${formData.phone}
Email: ${formData.email}
Plano de Interesse: ${formData.plan || "Não especificado"}

Mensagem: ${formData.message}
    `;
    window.open(
      `https://wa.me/5585982184028?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Entre em{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Contato
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Estamos prontos para atender você! Escolha a forma mais conveniente
            para falar conosco.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Fale Conosco
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                Nossa equipe está sempre disponível para tirar suas dúvidas e
                ajudar você a escolher o melhor plano para suas necessidades.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <a
                href="https://wa.me/5585982184028"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="bg-green-500 p-4 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">WhatsApp</h4>
                  <p className="text-green-600 font-medium">(85) 9 82184028</p>
                  <p className="text-gray-500 text-sm">
                    Atendimento via WhatsApp
                  </p>
                </div>
              </a>

              <a
                href="tel:85992802871"
                className="flex items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group"
              >
                <div className="bg-blue-500 p-4 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Telefone</h4>
                  <p className="text-blue-600 font-medium">(85) 9 9280-2871</p>
                  <p className="text-gray-500 text-sm">Ligação direta</p>
                </div>
              </a>

              <div className="flex items-center p-6 bg-white rounded-lg group">
                <a href="https://onzenet.com.br/sac" target="blank">
                  <div className="bg-purple-500 p-4 rounded-full mr-4 group-hover:scale-110 transition-transform cursor-pointer">
                    <Mail className="text-white" size={24} />
                  </div>
                </a>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Site/SAC</h4>
                  <a
                    href="https://onzenet.com.br/sac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 font-medium hover:underline"
                  >
                    onzenet.com.br/sac
                  </a>
                  <p className="text-gray-500 text-sm">Portal de atendimento</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-white rounded-lg shadow-md group">
                <div className="bg-orange-500 p-4 rounded-full mr-4 group-hover:scale-110 transition-transform">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">
                    Horário de Atendimento
                  </h4>
                  <p className="text-gray-700 font-medium">
                    Segunda a Sexta: 8h às 18h
                  </p>
                  <p className="text-gray-700 font-medium">Sábado: 8h às 14h</p>
                  <p className="text-gray-500 text-sm">
                    WhatsApp disponível 24h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">
              Solicite um Contato
            </h3>
            <p className="text-gray-600 mb-8">
              Preencha o formulário e entraremos em contato com você o mais
              breve possível.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="(85) 9 9999-9999"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="plan"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Plano de Interesse
                </label>
                <select
                  id="plan"
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Selecione um plano</option>
                  <option value="250MB - R$ 70,00">350MB - R$ 70,00</option>
                  <option value="350MB - R$ 80,00">450MB - R$ 80,00</option>
                  <option value="450MB - R$ 90,00">550MB - R$ 90,00</option>
                  <option value="450MB + Fixo - R$ 90,00">
                    450MB + Fixo - R$ 89,90
                  </option>
                  <option value="450MB + Max - R$ 90,00">
                    450MB + Max - R$ 99,90
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  placeholder="Conte-nos como podemos ajudar você..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Send size={20} />
                <span>Enviar via WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
