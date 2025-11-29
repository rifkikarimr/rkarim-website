import { Award, Code, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-28 pb-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center"
        >

          {/* Avatar + Badge */}
          <div className="mb-8 relative">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-36 h-36 rounded-full overflow-hidden shadow-xl border-4 border-blue-600 dark:border-blue-400"
            >
              <img
                src="/images/profile_picture.jpeg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Badge on photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="absolute -bottom-2 -right-2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-lg"
            >
              <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </motion.div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-3">
            Rifki Karim R
          </h1>

          {/* Role / Title */}
          <p className="text-2xl md:text-3xl font-bold text-blue-700 dark:text-blue-300 mb-6">
            Cloud & DevSecOps
          </p>

          {/* Summary */}
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed mb-10">
            Experienced in architecting multi-cloud infrastructure, DevSecOps pipelines,
            and secure distributed systems. Skilled at transforming complex cloud strategies
            into scalable, reliable solutions across AWS, GCP, and Azure.
          </p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center mb-10"
          >
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-6 py-3 rounded-lg shadow-md">
              <Code className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                Multi-Cloud Expert
              </span>
            </div>

            <div className="flex items-center space-x-2 bg-white dark:bg-gray-700 px-6 py-3 rounded-lg shadow-md">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-300" />
              <span className="font-semibold text-gray-700 dark:text-gray-200">
                GCP Certified
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
            >
              View Projects <ArrowRight className="w-5 h-5 ml-2" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
