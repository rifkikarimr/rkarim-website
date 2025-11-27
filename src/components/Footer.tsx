import { Cloud, Heart, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 py-10 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-4">

          {/* Brand / Identity */}
          <div className="flex items-center space-x-2">
            <Cloud className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Rifki Karim — Cloud & Big Data Specialist
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mb-2">
            <a
              href="https://linkedin.com/in/rifkikarimr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="https://github.com/rifkikarimr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://huggingface.co/rifkikarimr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition font-semibold text-sm flex items-center"
            >
              🤗 <span className="ml-1">HuggingFace</span>
            </a>
          </div>

          {/* Build Info */}
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center space-x-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </p>

          {/* Copyright */}
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            © {new Date().getFullYear()} porto.krmdev.site — All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
