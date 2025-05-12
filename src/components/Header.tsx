import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full absolute top-0 left-0 z-10 p-6 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="text-pink-600">
            <Logo />
          </div>
          <span className="text-xl md:text-2xl font-serif font-medium tracking-wider text-neutral-900">
            SHADA<span className="font-light">WEAR</span>
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;