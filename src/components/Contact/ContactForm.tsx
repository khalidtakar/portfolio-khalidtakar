import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
  requestCV: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    requestCV: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/mzzrnbpo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: formData.requestCV ? 'CV Request' : 'Contact Form Submission'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', requestCV: false });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`w-full px-4 py-2 rounded-lg border ${
            errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
          } focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white`}
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
      </div>

      <a href={`${import.meta.env.BASE_URL}cv/Khalid CV Graduate.pdf`} className="block w-full py-3 px-6 rounded-lg text-white font-medium bg-green-600 hover:bg-green-700 text-center transition-colors" download>
        Download CV
      </a>
      <a href="https://www.linkedin.com/in/khalid-takar-272097213" target="_blank" rel="noopener noreferrer" className="block w-full py-3 px-6 rounded-lg text-white font-medium bg-violet-700 hover:bg-violet-800 text-center transition-colors mt-2 flex items-center justify-center gap-2">
        <img src={`${import.meta.env.BASE_URL}icons-correct/linkedin.svg`} alt="LinkedIn" width={24} height={24} />
        Visit my LinkedIn
      </a>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-full py-3 px-6 rounded-lg text-white font-medium flex items-center justify-center space-x-2 ${
          isSubmitting ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        } transition-colors`}
      >
        <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        {!isSubmitting && <Send className="w-4 h-4" />}
      </motion.button>

      {submitStatus === 'success' && (
        <p className="text-green-500 text-center">Message sent successfully!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-500 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
};