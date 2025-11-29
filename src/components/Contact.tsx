import React, { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    if (!formRef.current) return false;

    const form = formRef.current;
    const name = form.user_name.value.trim();
    const email = form.user_email.value.trim();
    const message = form.message.value.trim();

    let valid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!name) {
      newErrors.name = "Name is required.";
      valid = false;
    }

    if (!email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format.";
      valid = false;
    }

    if (!message) {
      newErrors.message = "Message cannot be empty.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    // VALIDATION FIRST
    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Missing EmailJS env variables');
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);

      setStatus('success');
      formRef.current.reset();

      // Clear errors after success
      setErrors({ name: "", email: "", message: "" });
    } catch (err) {
      console.error('Failed to send message', err);
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="
        py-20 
        bg-gradient-to-br from-blue-600 to-blue-800 text-white 
        dark:from-gray-900 dark:to-black dark:text-gray-100
      "
    >
      <div className="container mx-auto px6">
        <h2 className="text-4xl font-bold text-center mb-4">Get In Touch</h2>

        <p className="text-center text-blue-100 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          Interested in collaborating or discussing cloud & platform engineering?
        </p>

        <div className="max-w-4xl mx-auto">

          {/* --- SOCIAL GRID --- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            
            {/* Email */}
            <a
              href="mailto:rifkikarimr@gmail.com"
              className="
                bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center group 
                hover:bg-white/20 transition-all 
                dark:bg-gray-800/40 dark:hover:bg-gray-700/50
              "
            >
              <div className="
                bg-white/20 dark:bg-gray-600/40 
                w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 
                group-hover:scale-110 transition-transform
              ">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">Email</h3>
              <p className="text-blue-100 dark:text-gray-300 text-sm">rifkikarimr@gmail.com</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/rifkikarimr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white/10 dark:bg-gray-800/40 
                backdrop-blur-sm rounded-xl p-6 text-center group 
                hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all
              "
            >
              <div className="
                bg-white/20 dark:bg-gray-600/40 
                w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform
              ">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">LinkedIn</h3>
              <p className="text-blue-100 dark:text-gray-300 text-sm">Connect with me</p>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rifkikarimr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white/10 dark:bg-gray-800/40 
                backdrop-blur-sm rounded-xl p-6 text-center group 
                hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all
              "
            >
              <div className="
                bg-white/20 dark:bg-gray-600/40 
                w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform
              ">
                <Github className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-lg">GitHub</h3>
              <p className="text-blue-100 dark:text-gray-300 text-sm">See my work</p>
            </a>

            {/* HuggingFace */}
            <a
              href="https://huggingface.co/rifkikarimr"
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center group 
                hover:bg-white/20 transition-all 
                dark:bg-gray-800/40 dark:hover:bg-gray-700/50
              "
            >
              <div className="
                bg-white/20 dark:bg-gray-600/40 
                w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform
              ">
                <img
                  src="https://huggingface.co/front/assets/huggingface_logo.svg"
                  alt="Hugging Face"
                  className="w-9 h-9"
                />
              </div>
              <h3 className="font-semibold mb-2 text-lg">HuggingFace</h3>
              <p className="text-blue-100 dark:text-gray-300 text-sm">AI & ML Spaces</p>
            </a>
          </div>

          {/* --- CONTACT FORM --- */}
          <div className="
            bg-white/10 backdrop-blur-sm rounded-xl p-8 
            dark:bg-gray-800/50 dark:border dark:border-gray-700
          ">
            <div className="flex items-center space-x-3 mb-6">
              <Send className="w-6 h-6" />
              <h3 className="text-2xl font-bold">Send a Message</h3>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">

              {/* NAME */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  className="
                    w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                    focus:ring-2 focus:border-white 
                    dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-400
                  "
                />
                {errors.name && <p className="text-red-300 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  className="
                    w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 
                    focus:ring-2 focus:border-white 
                    dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-400
                  "
                />
                {errors.email && <p className="text-red-300 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  className="
                    w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 resize-none
                    focus:ring-2 focus:border-white 
                    dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-400
                  "
                ></textarea>
                {errors.message && <p className="text-red-300 text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="
                  w-full bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold 
                  hover:bg-blue-50 transition-colors disabled:opacity-60 
                  flex items-center justify-center space-x-2
                  dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600
                "
              >
                <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                <Send className="w-5 h-5" />
              </button>

              {status === 'success' && (
                <p className="text-green-200 dark:text-green-400 mt-2">
                  Message sent — thank you! I'll reply soon.
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-200 dark:text-red-400 mt-2">
                  Please fill all fields correctly.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
