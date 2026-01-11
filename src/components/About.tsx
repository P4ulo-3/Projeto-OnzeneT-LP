import React from 'react';
import { Heart, Users, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">História</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div>
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Heart className="text-red-500 mr-3" size={28} />
                <h3 className="text-2xl font-bold text-gray-900">O Sonho de Uma Família</h3>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                A OnzeneT Telecom nasceu do sonho de um dos sócios em conectar as pessoas 
                através da tecnologia. O nome "Onze" tem um significado muito especial: 
                representa os 11 irmãos de uma família unida, onde sua mãe teve 11 filhos.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Essa união familiar é a base de tudo o que fazemos. Acreditamos que a 
                internet é mais que tecnologia - é a ferramenta que conecta famílias, 
                amigos e sonhos. Por isso, tratamos cada cliente como parte da nossa família.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Users className="text-blue-500 mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Família</h4>
                <p className="text-gray-600">Cada cliente é parte da nossa grande família OnzeneT</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Award className="text-orange-500 mb-3" size={32} />
                <h4 className="font-bold text-lg mb-2">Qualidade</h4>
                <p className="text-gray-600">Internet 100% fibra óptica com velocidade real</p>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
                  <Target className="text-orange-400 animate-ping" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                <p className="text-blue-100 text-lg">
                  Conectar pessoas e realizar sonhos através da melhor 
                  experiência em internet fibra óptica.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-orange-400">11</div>
                  <div className="text-sm text-blue-200">Irmãos Unidos</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">100%</div>
                  <div className="text-sm text-blue-200">Fibra Óptica</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-400">1</div>
                  <div className="text-sm text-blue-200">Família</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;