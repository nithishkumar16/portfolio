import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Video AI Summarizer Agent',
    description: 'AI-driven video summarization platform using Python and Google Gemini AI, reducing manual analysis time by 50% and improving accuracy by 30%.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
    tech: ['Python', 'Streamlit', 'Google Gemini AI', 'DuckDuckGo'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'Clothing Ecommerce',
    description: 'Full-stack MERN e-commerce platform with JWT authentication, advanced product search, and filtering features, reducing bounce rates by 15%.',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
    tech: ['React.js', 'Node.js', 'MongoDB', 'JWT', 'Elasticsearch'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'FitFlex',
    description: 'Cloud-based fitness management application with microservices architecture using AWS services, improving scalability for 100+ users.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
    tech: ['React.js', 'AWS Lambda', 'DynamoDB', 'AWS Cognito', 'AWS RDS'],
    github: 'https://github.com',
    live: 'https://example.com'
  },
  {
    title: 'SmartLens AI 2.0',
    description: 'Cloud-based AI application analyzing social media images using Google Cloud services, processing 10,000+ images for brand insights.',
    image: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&q=80&w=800',
    tech: ['React.js', 'Google Cloud', 'Vision API', 'Firestore', 'Pinterest API'],
    github: 'https://github.com',
    live: 'https://example.com'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}