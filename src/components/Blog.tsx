import { BookOpen, ExternalLink, Calendar } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  link: string;
  readTime: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Mastering Multi-Cloud Architecture: Best Practices & Pitfalls',
    excerpt: 'Explore strategies for designing and managing multi-cloud environments to optimize performance, cost, and reliability.',
    date: '2025-07',
    link: 'https://medium.com/@rifkikarimr/mastering-multi-cloud-architecture-best-practices-pitfalls-aa569e018234',
    readTime: '9 min read',
  },
  {
    id: '2',
    title: 'How DevOps Can Help Your Business Stay Ahead of the Competition',
    excerpt: 'Learn how adopting DevOps practices can accelerate your software delivery, improve collaboration, and drive innovation.',
    date: '2023-02',
    link: 'https://medium.com/@rifkikarimr/how-devops-can-help-your-business-stay-ahead-of-the-competition-2ee759834395',
    readTime: '2 min read',
  },
  {
    id: '3',
    title: 'Continuous Integration and Continuous Deployment: Best Practices for DevOps',
    excerpt: 'Implementing CI/CD pipelines effectively can streamline your development process and enhance software quality. Discover the best practices to get started.',
    date: '2023-04',
    link: 'https://medium.com/@rifkikarimr/continuous-integration-and-continuous-deployment-best-practices-for-devops-b99eac071a5c',
    readTime: '4 min read',
  },
  {
    id: '4',
    title: 'How to Build Scalable and Maintainable Front-End Architecture',
    excerpt: 'Building a robust front-end architecture is crucial for delivering high-quality user experiences. This article explores key principles and patterns for scalability and maintainability.',
    date: '2023-06',
    link: 'https://medium.com/@rifkikarimr/how-to-build-scalable-and-maintainable-front-end-architecture-27ee0b28b56c',
    readTime: '4 min read',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Blog Articles
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Sharing insights and experiences on cloud architecture, DevOps, and infrastructure automation
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 border-l-4 border-blue-600 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span className="font-medium">{post.readTime}</span>
              </div>

              <div className="mt-4 flex items-center space-x-2 text-blue-600 font-medium">
                <span>Read on Medium</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <span>View All Articles on Medium</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
