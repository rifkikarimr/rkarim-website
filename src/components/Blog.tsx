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
    excerpt:
      'Strategies for designing and managing multi-cloud environments to improve reliability, cost efficiency, and operational excellence.',
    date: '2025-07',
    link: 'https://medium.com/@rifkikarimr/mastering-multi-cloud-architecture-best-practices-pitfalls-aa569e018234',
    readTime: '9 min read'
  },
  {
    id: '2',
    title: 'How DevOps Can Help Your Business Stay Ahead of the Competition',
    excerpt:
      'A clear look at how DevOps principles accelerate delivery, improve collaboration, and strengthen technical capabilities.',
    date: '2023-02',
    link: 'https://medium.com/@rifkikarimr/how-devops-can-help-your-business-stay-ahead-of-the-competition-2ee759834395',
    readTime: '2 min read'
  },
  {
    id: '3',
    title: 'Continuous Integration and Continuous Deployment: Best Practices for DevOps',
    excerpt:
      'How well-structured CI/CD pipelines streamline workflows and enhance software quality in modern engineering teams.',
    date: '2023-04',
    link: 'https://medium.com/@rifkikarimr/continuous-integration-and-continuous-deployment-best-practices-for-devops-b99eac071a5c',
    readTime: '4 min read'
  },
  {
    id: '4',
    title: 'How to Build Scalable and Maintainable Front-End Architecture',
    excerpt:
      'Key design principles and patterns for front-end systems that remain stable, scalable, and easy to maintain.',
    date: '2023-06',
    link: 'https://medium.com/@rifkikarimr/how-to-build-scalable-and-maintainable-front-end-architecture-27ee0b28b56c',
    readTime: '4 min read'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Blog Articles
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Sharing perspectives on cloud architecture, DevOps, system reliability,
          and modern automation practices.
        </p>

        {/* Blog Posts */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-gradient-to-br from-white to-blue-50 
                dark:from-gray-800 dark:to-gray-700
                rounded-xl shadow-lg hover:shadow-2xl transition-all p-6 
                border-l-4 border-blue-600 dark:border-blue-400
                group cursor-pointer
              "
            >
              <div className="flex items-start justify-between mb-4">
                <div className="bg-blue-600 dark:bg-blue-500 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-gray-400 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <span className="font-medium">{post.readTime}</span>
              </div>

              <div className="mt-4 flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-medium">
                <span>Read on Medium</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://medium.com/@rifkikarimr"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center space-x-2 
              bg-blue-600 dark:bg-blue-500 
              text-white px-8 py-3 rounded-lg shadow-lg 
              hover:bg-blue-700 dark:hover:bg-blue-400 
              transition-colors font-semibold
            "
          >
            <span>View All Articles on Medium</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}