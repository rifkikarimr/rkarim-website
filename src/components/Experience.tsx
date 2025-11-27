import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface Job {
  id: string;
  company: string;
  position: string;
  period: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

const experiences: Job[] = [
  {
    id: '1',
    company: 'Samudera Indonesia',
    position: 'Cloud & Big Data Specialist',
    period: 'August 2025 - Present',
    duration: 'Current',
    location: 'Indonesia',
    responsibilities: [
      'Driving enterprise-wide cloud infrastructure and big data initiatives within the Technology & Research Department.',
      'Providing architecture direction, and strategic alignment across IT Infrastructure, IT Operations, Network, and Security.',
      'Ensuring cloud and on-premise platforms meet corporate reliability, security, and scalability standards.',
      'Supporting big data platform readiness from an infrastructure, operational, and network security perspective.',
      'Leveraging DevOps expertise to enhance deployment efficiency, observability, and operational resilience for critical workloads.',
    ],
  },
  {
    id: '2',
    company: 'Agung Sedayu Group',
    position: 'Cloud DevOps Engineer',
    period: 'October 2024 - August 2025',
    duration: '11 months',
    location: 'Jakarta, Indonesia',
    responsibilities: [
      'Managed multi-cloud environments across GCP, AWS, and Azure to ensure high availability and performance.',
      'Acted as a DevOps and SRE specialist by maintaining resource stability, resolving infrastructure issues, and streamlining alert-based incident responses.',
      'Implemented and enhanced API Management using Kong, observability stacks (Prometheus, Grafana, ELK), and Terraform-based infrastructure automation.',
      'Contributed to the SAP modernization initiative, enabling secure encrypted file workflows and automated SFTP processes.',
      'Performed monthly cloud infrastructure and security posture reviews, identifying optimization opportunities and implementing strategic improvements.',
    ],
  },
  {
    id: '3',
    company: 'Smartnet Magna Global',
    position: 'Cloud Architect',
    period: 'May 2023 - October 2024',
    duration: '1 year 6 months',
    location: 'Jakarta Selatan, Jakarta, Indonesia',
    responsibilities: [
      'Designed cloud architectures and enterprise solutions for clients across finance, agriculture, and real estate sectors.',
      'Delivered comprehensive solution proposals covering system design, implementation planning, cost modeling, and technology fit.',
      'Provided best-practice recommendations to optimize performance, reliability, security, and cost efficiency across client cloud environments.',
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((job, index) => (
            <div
              key={job.id}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-l-4 border-blue-600 dark:border-blue-400"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {job.position}
                  </h3>
                  <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-lg font-semibold">{job.company}</span>
                  </div>
                </div>

                {index === 0 && (
                  <span className="bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0 self-start">
                    Current Position
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{job.period}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium">({job.duration})</span>
                </div>

                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{job.location}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {responsibility}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}