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
      'Leading cloud infrastructure and big data initiatives',
      'Architecting scalable solutions for enterprise workloads',
      'Implementing data processing pipelines and analytics platforms',
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
      'Managed and operated multi-cloud environments across GCP, AWS, and Azure',
      'Acted as a DevOps and SRE specialist, ensuring the stability of resources, debugging errors, and responding promptly to alerts for efficient issue resolution',
      'Contributed to the implement and developing of Kong API Management, Observability Tools (Prometheus, Grafana, ELK Stack), and infrastructure automation using Terraform',
      'Participated in the SAP project, supporting the automation of file encryption and secure transfers via SFTP to enhance operational security and efficiency',
      'Conducted monthly reviews of cloud infrastructure and security levels across all platforms to identify improvement areas and implement strategic enhancements',
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
      'Proposed solutions for Google Cloud Platform, Google Workspace, or Enterprise Architecture with proven world & industry regulatory requirements, methodologies, standards & best practices to a wide-range of Clients in various industries: Financial & Banking, Agribusiness, and Real Estate',
      'Provided solution proposals to stakeholders and customers on solution development processes, components, costs, and budgets',
      'Proposed suggestions and best practices to optimize customer\'s cloud presence, performance, security, and cost',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Professional Experience
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((job, index) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-8 border-l-4 border-blue-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {job.position}
                  </h3>
                  <div className="flex items-center space-x-2 text-blue-600 mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span className="text-lg font-semibold">{job.company}</span>
                  </div>
                </div>
                {index === 0 && (
                  <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-semibold mt-2 md:mt-0 self-start">
                    Current Position
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-gray-600">
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
                    <span className="text-blue-600 mt-1">•</span>
                    <span className="text-gray-700 leading-relaxed">{responsibility}</span>
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
