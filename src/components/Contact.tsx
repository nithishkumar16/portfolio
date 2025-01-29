import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // For now, we'll use a mailto link as a fallback
      const mailtoUrl = `mailto:nithish6@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Get In Touch</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full px-8 py-3 bg-indigo-600 text-white rounded-lg transition-colors flex items-center justify-center ${
                  status === 'submitting' ? 'opacity-75 cursor-not-allowed' : 'hover:bg-indigo-700'
                }`}
              >
                <Send className="w-5 h-5 mr-2" />
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              
              {status === 'success' && (
                <p className="text-green-600 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
              )}
            </form>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="mailto:nithish6@gmail.com" className="flex items-center text-gray-600 hover:text-indigo-600">
                <Mail className="w-5 h-5 mr-2" />
                nithish6@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}