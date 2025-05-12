import React from 'react';
import { HeroProps } from '../types';

const Hero: React.FC<HeroProps> = ({ title, subtitle }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-6 md:px-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-neutral-900 tracking-tight mb-6 animate-fadeIn">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed mb-10 animate-fadeIn animation-delay-200">
        {subtitle}
      </p>
    </div>
  );
};

export default Hero;