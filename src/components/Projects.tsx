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
    description:
      'Designed and implemented automated multi-cloud infrastructure deployment across AWS, GCP, Azure, and Alibaba Cloud using Terraform and CI/CD pipelines.',
    technologies: [
      'Terraform',
      'AWS',
      'GCP',
      'Azure',
      'Alibaba Cloud',
      'GitHub Actions',
      'Docker',
      'Kubernetes',
      'Jenkins',
    ],
    outcome:
      'Reduced deployment time by 75% and eliminated manual configuration errors.',
    link: 'https://www.canva.com/design/DAGsmJCMLpI/cO1uyVgkz85f-gqXSMVZ3g/view?utm_content=DAGsmJCMLpI&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hdda365365e',
  },
  {
    id: '2',
    name: 'Observability Platform Implementation',
    description:
      'Built a comprehensive monitoring and alerting platform for distributed microservices using Prometheus, Grafana, and ELK Stack. Integrated with Kong API Gateway for request-level insights.',
    technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'Kubernetes', 'Kong'],
    outcome:
      'Improved system reliability to 99.9% uptime and reduced MTTR by 60% through proactive observability.',
    link: 'https://rkarimmm.my.canva.site/',
  },
  {
    id: '3',
    name: 'Secure SFTP & Encryption Pipeline',
    description:
      'Developed a secure end-to-end encrypted file transfer pipeline for sensitive enterprise data processing and SAP integration.',
    technologies: ['SFTP', 'AES Encryption', 'SAP', 'Python', 'AWS S3', 'Lambda'],
    outcome:
      'Processed 1TB+ of daily encrypted data transfers with zero security incidents.',
    link: 'https://github.com/rifkikarimr/tf-file-sftp.git',
  },
  {
    id: '4',
    name: 'Career Conversation AI — HuggingFace Space',
    description:
      'Career Conversation is an AI-powered chatbot hosted on HuggingFace Spaces that provides an interactive way for users to explore my professional background.',
    technologies: ['Pushover', 'HuggingFace Spaces', 'Python', 'LLMs', 'OpenAPI SDK'],
    outcome:
      'Published as a public interactive AI tool to help individuals explore career guidance scenarios.',
    link: 'https://huggingface.co/spaces/rifkikarimr/career_conversation',
  },
  {
    id: '5',
    name: 'MLOps Pipeline — Hotel Reservation Prediction',
    description:
      'Implemented a complete MLOps automation pipeline for training, validating, and deploying a machine learning model.',
    technologies: [
      'MLflow',
      'DVC',
      'FastAPI',
      'Docker',
      'GitHub Actions',
      'Machine Learning',
      'Python',
    ],
    outcome:
      'Delivered a fully automated and reproducible ML workflow.',
    link: 'https://github.com/rifkikarimr/mlops-hotelreservation-usecase',
  },
  {
    id: '6',
    name: 'DevSecOps Pipeline — Java Vulnerability Demonstration',
    description:
      'Built an end-to-end DevSecOps pipeline for an intentionally vulnerable Java application to demonstrate Snyk’s Reachable Vulnerabilities capabilities.',
    technologies: [
      'Java',
      'Snyk',
      'DevSecOps',
      'CI/CD',
      'Security Testing',
      'GitHub Actions',
    ],
    outcome:
      'Provided a hands-on environment to showcase secure SDLC principles.',
    link: 'https://github.com/rifkikarimr/java-n2n-devsecops-pipeline/tree/main',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300 scroll-mt-24">
      <div className="container mx-auto px-6">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">
          Featured Projects
        </h2>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="
                bg-gradient-to-br 
                from-white to-blue-50 
                dark:from-gray-800 dark:to-gray-700
                rounded-xl shadow-lg hover:shadow-2xl 
                transition-all p-6 border-t-4 
                border-blue-600 dark:border-blue-500 
                flex flex-col
              "
            >
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {project.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                  Technologies Used:
                </h4>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        bg-blue-100 dark:bg-blue-800 
                        text-blue-700 dark:text-blue-200 
                        px-3 py-1 rounded-full 
                        text-xs font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outcome */}
              <div className="bg-green-50 dark:bg-green-900 border-l-4 border-green-500 p-4 rounded mb-4">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-green-600 dark:text-green-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-green-800 dark:text-green-200 mb-1">
                      Outcome:
                    </h4>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>

              {/* Button */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center justify-center space-x-2 
                    bg-blue-600 dark:bg-blue-500 
                    text-white px-4 py-2 rounded-lg 
                    hover:bg-blue-700 dark:hover:bg-blue-600 
                    transition-colors font-medium text-sm
                  "
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
