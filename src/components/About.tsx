import { Building, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-lg mb-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a Cloud professional with extensive experience in technical implementation
              and cloud design across multiple platforms. My expertise lies in converting
              strategic cloud plans into workable, production-ready solutions that drive
              business value.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience managing multi-cloud environments (GCP, AWS, Azure),
              I specialize in DevOps practices, Site Reliability Engineering, infrastructure
              automation, and implementing comprehensive observability solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <Building className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Current Role</h3>
              </div>
              <p className="text-gray-700 font-semibold mb-1">Cloud & Big Data Specialist</p>
              <p className="text-gray-600">Samudera Indonesia</p>
              <p className="text-sm text-gray-500 mt-2">August 2025 - Present</p>
            </div>

            <div className="bg-white border-2 border-blue-100 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-3 mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-700 font-semibold mb-1">Bachelor of Engineering</p>
              <p className="text-gray-600">Computer Engineering</p>
              <p className="text-sm text-gray-500 mt-2">University of Brawijaya (2019 - 2023)</p>
            </div>
          </div>

          <div className="mt-8 bg-blue-600 p-6 rounded-xl text-white">
            <h3 className="text-xl font-bold mb-4">Top Skills</h3>
            <div className="flex flex-wrap gap-3">
              {['IT Infrastructure Management', 'IT Infrastructure Operations', 'Site Reliability Engineering', 'DevOps Engineering', 'Cloud Engineering'].map((skill) => (
                <span key={skill} className="bg-white text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
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
