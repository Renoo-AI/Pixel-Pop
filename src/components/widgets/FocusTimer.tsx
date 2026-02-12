import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import { Play, Pause, RotateCcw, Zap } from 'lucide-react';

export const FocusTimer = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval: number | undefined;

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(25 * 60);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Card className="flex flex-col items-center justify-center text-center">
      <CardHeader className="w-full flex flex-row items-center justify-between mb-6">
        <CardTitle className="flex items-center gap-2">
          <Zap className="text-amber-500" size={20} />
          Focus Session
        </CardTitle>
        <span className="text-xs font-medium text-slate-400">Deep Work</span>
      </CardHeader>

      <div className="relative w-48 h-48 flex items-center justify-center mb-6">
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="96"
            cy="96"
            r="88"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            className="text-slate-100 dark:text-slate-800"
          />
          <circle
            cx="96"
            cy="96"
            r="88"
            fill="transparent"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={552.92}
            strokeDashoffset={552.92 * (1 - timeLeft / (25 * 60))}
            strokeLinecap="round"
            className="text-indigo-600 transition-all duration-300"
          />
        </svg>
        <div className="text-4xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </div>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" size="sm" onClick={resetTimer}>
          <RotateCcw size={18} />
        </Button>
        <Button
          variant={isActive ? "secondary" : "primary"}
          className="w-32"
          onClick={toggleTimer}
        >
          {isActive ? <Pause size={18} /> : <Play size={18} />}
          {isActive ? "Pause" : "Start"}
        </Button>
      </div>
    </Card>
  );
};
