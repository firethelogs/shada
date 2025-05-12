import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { NewsletterProps } from '../types';

const Newsletter: React.FC<NewsletterProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="max-w-md mx-auto text-center animate-fadeIn animation-delay-600">
      {!isSubmitted ? (
        <>
          <h3 className="text-lg font-medium text-neutral-900 mb-3">
            Be the first to know when we launch
          </h3>
          <p className="text-neutral-600 mb-6">
            Sign up for our newsletter and receive exclusive early-access offers
          </p>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors duration-200 flex items-center gap-2"
            >
              <span>Notify Me</span>
              <Send size={16} />
            </button>
          </form>
        </>
      ) : (
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-green-800">
            Thank you for subscribing! We'll keep you updated.
          </p>
        </div>
      )}
    </div>
  );
};

export default Newsletter