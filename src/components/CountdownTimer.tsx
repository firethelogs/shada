import React, { useState, useEffect } from 'react';
import { CountdownTimerProps } from '../types';

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const TimerUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-4">
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-lg bg-white bg-opacity-90 shadow-sm mb-2">
        <span className="text-2xl md:text-3xl font-medium text-neutral-900">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs uppercase tracking-wide text-neutral-600 font-light">
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex justify-center items-center my-12 animate-fadeIn animation-delay-400">
      <TimerUnit value={timeLeft.days} label="Days" />
      <TimerUnit value={timeLeft.hours} label="Hours" />
      <TimerUnit value={timeLeft.minutes} label="Minutes" />
      <TimerUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};

export default CountdownTimer;