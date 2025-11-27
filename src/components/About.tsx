import { Building, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900 transition-colors"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">

          {/* Intro Section */}
          <div className="bg-gradient-to-r from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg mb-8 transition-colors">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I am a DevSecOps Engineer with a strong foundation in Cloud Engineering
              and IT Infrastructure. Over the years, I’ve worked across cloud platforms,
              automation pipelines, security hardening, and distributed systems—
              ensuring that organizations can build reliably and scale with confidence.
            </p>

            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Recently, I have expanded my expertise into AI Engineering and MLOps:
              designing end-to-end ML pipelines, fine-tuning LLMs, building RAG-based
              applications, and developing practical AI tools. This combination of
              DevSecOps and modern AI workflows allows me to deliver secure,
              production-ready systems—from infrastructure to intelligent applications.
            </p>
          </div>

          {/* Role & Education */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Role Card */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-100 dark:border-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Current Role
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
                Cloud & Big Data Specialist
              </p>
              <p className="text-gray-600 dark:text-gray-400">Samudera Indonesia</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                August 2025 – Present
              </p>
            </div>

            {/* Education Card */}
            <div className="bg-white dark:bg-gray-800 border-2 border-blue-100 dark:border-gray-700 p-6 rounded-xl hover:shadow-lg transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
                Bachelor of Engineering
              </p>
              <p className="text-gray-600 dark:text-gray-400">Computer Engineering</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                University of Brawijaya (2019 – 2023)
              </p>
            </div>

          </div>

          {/* Top Skills */}
          <div className="mt-8 bg-blue-600 dark:bg-blue-700 p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">Top Skills</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'DevSecOps Engineering',
                'Site Reliability Engineering',
                'Cloud Infrastructure',
                'IT Infrastructure Management',
                'IT Operations Management',
                'MLOps Engineering',
                'LLM Engineering',
                'Applied AI Engineering',
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
