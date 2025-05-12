import React from 'react';

const Logo: React.FC = () => (
  <div className="w-10 h-10">
    <svg viewBox="0 0 1200 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer rounded rectangle */}
      <path
        d="M200 300C200 200 300 100 400 100H800C900 100 1000 200 1000 300V900C1000 1000 900 1100 800 1100H400C300 1100 200 1000 200 900V300Z"
        stroke="currentColor"
        strokeWidth="50"
        fill="none"
      />
      {/* Inner rounded rectangle */}
      <path
        d="M300 300C300 250 350 200 400 200H800C850 200 900 250 900 300V900C900 950 850 1000 800 1000H400C350 1000 300 950 300 900V300Z"
        stroke="currentColor"
        strokeWidth="50"
        fill="none"
      />
      {/* Elegant S curve */}
      <path
        d="M500 400C600 400 700 450 700 550C700 650 500 650 500 750C500 850 600 900 700 800"
        stroke="currentColor"
        strokeWidth="100"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  </div>
);

export default Logo;