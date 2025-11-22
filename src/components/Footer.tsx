import { Cloud, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2 mb-4">
            <Cloud className="w-6 h-6 text-blue-400" />
            <span className="text-lg font-semibold">Cloud Portfolio</span>
          </div>

          <p className="text-gray-400 text-sm mb-4 flex items-center space-x-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using React, TypeScript & Tailwind CSS</span>
          </p>

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
