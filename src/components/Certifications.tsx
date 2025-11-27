import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  id: string;
  name: string;
  provider: string;
  link: string;
  icon: string;
  issued?: string; // Optional metadata
}

const certifications: Certification[] = [
  {
    id: '1',
    name: 'Associate Cloud Engineer',
    provider: 'Google Cloud Platform',
    link: 'https://www.credly.com/badges/2435921a-3cb9-4acf-99b9-a2d91a438cc3/public_url',
    icon: '☁️',
    issued: '2023',
  },
  {
    id: '2',
    name: 'Professional Cloud Architect',
    provider: 'Google Cloud Platform',
    link: 'https://www.credly.com/badges/fb19a208-ba34-48b5-a53f-9a6575481698/public_url',
    icon: '🏗️',
    issued: '2024',
  },
  {
    id: '3',
    name: 'Professional Cloud DevOps Engineer',
    provider: 'Google Cloud Platform',
    link: 'https://www.credly.com/badges/7e048787-c444-48df-8f1c-d54c67d6a86e/public_url',
    icon: '⚙️',
    issued: '2024',
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="
        py-20 
        bg-gradient-to-br from-blue-50 to-white 
        dark:from-gray-900 dark:to-gray-800
        transition-colors
      "
    >
      <div className="container mx-auto px-6">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Certifications
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Industry-recognized certifications that demonstrate proven expertise in cloud architecture, DevSecOps,
          and secure infrastructure engineering.
        </p>

        {/* Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white dark:bg-gray-800
                rounded-xl shadow-lg hover:shadow-2xl 
                transition-all p-6 
                border-2 border-blue-100 
                dark:border-gray-700 
                hover:border-blue-600 
                dark:hover:border-blue-400
                group cursor-pointer
              "
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="
                    bg-blue-100 dark:bg-blue-900 
                    p-3 rounded-lg text-3xl
                  "
                >
                  {cert.icon}
                </div>

                <ExternalLink
                  className="
                    w-5 h-5 
                    text-gray-400 dark:text-gray-500 
                    group-hover:text-blue-600 
                    dark:group-hover:text-blue-400 
                    transition-colors
                  "
                />
              </div>

              {/* Title */}
              <h3
                className="
                  text-lg font-bold 
                  text-gray-900 dark:text-white 
                  mb-2 
                  group-hover:text-blue-600 dark:group-hover:text-blue-400 
                  transition-colors
                "
              >
                {cert.name}
              </h3>

              {/* Provider */}
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 mb-1">
                <Award className="w-4 h-4" />
                <span className="text-sm">{cert.provider}</span>
              </div>

              {/* Issued */}
              {cert.issued && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Issued: {cert.issued}
                </p>
              )}

              {/* Link CTA */}
              <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 text-sm font-medium">
                <span>View Certificate</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div
            className="
              inline-block 
              bg-blue-600 dark:bg-blue-500 
              text-white px-6 py-3 
              rounded-lg shadow-lg
            "
          >
            <p className="text-lg font-semibold">
              All certifications are verifiable via Credly & CertMetrics
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
