import { Rocket, TrendingUp, ExternalLink } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  outcome: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Maintain Cloud Infrastructure',
    description: 'Designed and implemented automated infrastructure deployment across AWS, GCP, and Azure using Terraform and CI/CD pipelines.',
    technologies: ['Terraform', 'AWS', 'GCP', 'Azure', 'Alibaba Cloud', 'GitHub Actions', 'Docker', 'Kubernetes', 'Jenkins'],
    outcome: 'Reduced deployment time by 75% and eliminated manual configuration errors.',
    link: 'https://www.canva.com/design/DAGsmJCMLpI/cO1uyVgkz85f-gqXSMVZ3g/view?utm_content=DAGsmJCMLpI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdda365365e',
  },
  {
    id: '2',
    name: 'Observability Platform Implementation',
    description: 'Built comprehensive monitoring and alerting system using Prometheus, Grafana, and ELK stack for distributed microservices.',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Kubernetes', 'Kong API Gateway'],
    outcome: 'Improved system reliability to 99.9% uptime and reduced MTTR by 60% through proactive monitoring.',
    link: 'https://rkarimmm.my.canva.site/'
  },
  {
    id: '3',
    name: 'Secure SFTP & Encryption Pipeline',
    description: 'Developed secure file transfer system with end-to-end encryption for sensitive data processing and SAP integration.',
    technologies: ['SFTP', 'AES Encryption', 'SAP', 'Python', 'AWS S3', 'Lambda'],
    outcome: 'Processed 1TB+ daily data transfers with zero security incidents.',
    link: 'https://github.com/rifkikarimr/tf-file-sftp.git',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Featured Projects
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border-t-4 border-blue-600 flex flex-col"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded mb-4">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-green-800 mb-1">Outcome:</h4>
                    <p className="text-sm text-green-700">{project.outcome}</p>
                  </div>
                </div>
              </div>

              {project.link && project.link !== '#' && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
