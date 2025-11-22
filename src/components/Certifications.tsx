import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  provider: string;
  link: string;
  icon: string;
}

const certifications: Certification[] = [
  {
    id: '1',
    name: 'Associate Cloud Engineer',
    provider: 'Google Cloud Platform',
    link: 'https://www.credly.com/badges',
    icon: '☁️',
  },
  {
    id: '2',
    name: 'Professional Cloud Architect',
    provider: 'Google Cloud Platform',
    link: 'https://www.credly.com/badges',
    icon: '🏗️',
  },
  {
    id: '3',
    name: 'Professional Cloud DevOps Engineer',
    provider: 'Google Cloud Platform',
    link: 'https://www.credly.com/badges',
    icon: '⚙️',
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Certifications
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Professional certifications validating expertise in cloud architecture and engineering
        </p>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border-2 border-blue-100 hover:border-blue-600 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-lg text-3xl">
                  {cert.icon}
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {cert.name}
              </h3>

              <div className="flex items-center space-x-2 text-gray-600 mb-4">
                <Award className="w-4 h-4" />
                <span className="text-sm">{cert.provider}</span>
              </div>

              <div className="flex items-center space-x-2 text-blue-600 text-sm font-medium">
                <span>View Certificate</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg">
            <p className="text-lg font-semibold">
              All certifications can be verified on CertMetrics and Credly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
