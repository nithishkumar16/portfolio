import React from 'react';
import { Code, Database, Layout, Terminal, Settings, Server } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: Layout,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3']
  },
  {
    category: 'Backend',
    icon: Server,
    items: ['Node.js', 'Express', 'Python', 'RESTful APIs']
  },
  {
    category: 'Database',
    icon: Database,
    items: ['MongoDB', 'PostgreSQL', 'Firebase', 'Redis']
  },
  {
    category: 'Tools',
    icon: Settings,
    items: ['Git', 'Docker', 'VS Code', 'Postman']
  },
  {
    category: 'Testing',
    icon: Terminal,
    items: ['Jest', 'React Testing Library', 'Cypress', 'Mocha']
  },
  {
    category: 'Languages',
    icon: Code,
    items: ['JavaScript', 'TypeScript', 'Python', 'Java']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div key={index} className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <Icon className="w-6 h-6 text-primary-600 mr-2" />
                  <h3 className="text-xl font-semibold">{skill.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}