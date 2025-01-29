import React from 'react';
import { Code2, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed w-full bg-black/5 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-indigo-600" />
            <span className="font-bold text-xl">Nithish Portfolio</span>
          </div>
          <nav className="flex space-x-8">
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/nithishkumar16" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-indigo-600 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/nithishkumarvenkatesan" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-indigo-600 transition-colors" />
            </a>
            <a href="mailto:your.email@example.com">
              <Mail className="w-5 h-5 hover:text-indigo-600 transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}