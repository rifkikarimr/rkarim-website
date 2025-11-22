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
    title: 'Multi-Cloud Strategy: Best Practices for Enterprise',
    excerpt: 'Explore the key considerations and best practices when implementing a multi-cloud strategy across AWS, GCP, and Azure platforms.',
    date: '2024-03',
    link: 'https://medium.com/@yourusername',
    readTime: '8 min read',
  },
  {
    id: '2',
    title: 'Building Resilient Infrastructure with Terraform',
    excerpt: 'Learn how to create scalable and maintainable infrastructure as code using Terraform across multiple cloud providers.',
    date: '2024-02',
    link: 'https://medium.com/@yourusername',
    readTime: '10 min read',
  },
  {
    id: '3',
    title: 'Observability in Microservices Architecture',
    excerpt: 'Deep dive into implementing comprehensive monitoring and logging using Prometheus, Grafana, and ELK stack.',
    date: '2024-01',
    link: 'https://medium.com/@yourusername',
    readTime: '12 min read',
  },
  {
    id: '4',
    title: 'DevOps Best Practices for Cloud-Native Applications',
    excerpt: 'Discover essential DevOps practices and tools for building and deploying cloud-native applications at scale.',
    date: '2023-12',
    link: 'https://medium.com/@yourusername',
    readTime: '7 min read',
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
