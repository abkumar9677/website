import React, { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isFocused, setIsFocused] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Name & Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onFocus={() => setIsFocused({ ...isFocused, name: true })}
            onBlur={() => setIsFocused({ ...isFocused, name: false })}
            className="w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all"
            placeholder="Your Name"
          />
          {isFocused.name && (
            <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"></div>
          )}
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onFocus={() => setIsFocused({ ...isFocused, email: true })}
            onBlur={() => setIsFocused({ ...isFocused, email: false })}
            className="w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all"
            placeholder="Your Email"
          />
          {isFocused.email && (
            <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"></div>
          )}
        </div>
      </div>

      {/* Subject */}
      <div className="relative">
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          onFocus={() => setIsFocused({ ...isFocused, subject: true })}
          onBlur={() => setIsFocused({ ...isFocused, subject: false })}
          className="w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all"
          placeholder="Subject"
        />
        {isFocused.subject && (
          <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"></div>
        )}
      </div>

      {/* Message */}
      <div className="relative">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setIsFocused({ ...isFocused, message: true })}
          onBlur={() => setIsFocused({ ...isFocused, message: false })}
          rows="6"
          className="w-full px-6 py-4 bg-gray-800 bg-opacity-50 backdrop-blur-md border-2 border-gray-700 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition-all resize-none"
          placeholder="Your Message"
        ></textarea>
        {isFocused.message && (
          <div className="absolute inset-0 bg-orange-500 opacity-10 rounded-xl pointer-events-none"></div>
        )}
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`w-full px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all hover:scale-105 flex items-center justify-center gap-3 ${
          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send className="w-5 h-5" />
          </>
        )}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500 bg-opacity-20 border border-green-500 rounded-xl text-green-400 flex items-center gap-3">
          <Sparkles className="w-5 h-5" />
          <span>Message sent successfully! I'll get back to you soon.</span>
        </div>
      )}
    </div>
  );
};

export default ContactForm;