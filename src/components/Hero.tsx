import { Cloud, Award, Code } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 relative">
            <div className="w-32 h-32 bg-blue-600 rounded-full flex items-center justify-center shadow-xl">
              <Cloud className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Rifki Karim R
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-3xl">
            Cloud | DevOps | SRE
          </p>

          <p className="text-lg text-gray-700 mb-8 max-w-2xl leading-relaxed">
            Wealth of knowledge in technical implementation and cloud design.
            Demonstrated capacity to convert cloud plans into workable solutions
            across AWS, GCP, and Azure.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md">
              <Code className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-700">Multi-Cloud Expert</span>
            </div>
            <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-gray-700">GCP Certified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
