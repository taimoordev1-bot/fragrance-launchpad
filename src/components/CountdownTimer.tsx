import { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set launch date to 30 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center items-center fade-in-up stagger-2">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <div
          key={unit}
          className="glass-effect rounded-xl p-4 min-w-[80px] text-center floating-animation"
          style={{ animationDelay: `${index * 0.5}s` }}
        >
          <div className="text-3xl md:text-4xl font-bold luxury-text font-playfair">
            {String(value).padStart(2, '0')}
          </div>
          <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider font-inter">
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;