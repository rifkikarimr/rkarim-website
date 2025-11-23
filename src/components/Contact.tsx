import React, { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS env variables (VITE_EMAILJS_...)');
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
      setStatus('success');
      formRef.current.reset();
    } catch (err) {
      console.error('Failed to send message', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>
        <p className="text-center text-blue-100 mb-12 max-w-2xl mx-auto text-lg">
          Interested in collaborating or discussing cloud solutions? Feel free to reach out!
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:your.email@example.com"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all text-center group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Email</h3>
              <p className="text-blue-100 text-sm">rifkikarimr@gmail.com</p>
            </a>

            <a
              href="https://linkedin.com/in/rifkikarimr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all text-center group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">LinkedIn</h3>
              <p className="text-blue-100 text-sm">Connect with me</p>
            </a>

            <a
              href="https://github.com/rifkikarimr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all text-center group"
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Github className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">GitHub</h3>
              <p className="text-blue-100 text-sm">Check out my projects</p>
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Send className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Send a Message</h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="user_email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all resize-none"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2 disabled:opacity-60"
              >
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>

              {status === 'success' && (
                <p className="text-green-200 mt-2">Message sent — thank you! I will reply soon.</p>
              )}

              {status === 'error' && (
                <p className="text-red-200 mt-2">Something went wrong. Please try again later.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
