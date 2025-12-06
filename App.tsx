import React, { useState, useEffect } from 'react';
import Cactus from './components/Cactus';
import WaterTank from './components/WaterTank';
import TaskCard from './components/TaskCard';
import WinnerModal from './components/WinnerModal';
import { Task, CactusState } from './types';
import { TASKS, MAX_SCORE } from './constants';
import { playSound } from './services/audioService';

const App: React.FC = () => {
  // State initialization with lazy loading from localStorage
  const [score, setScore] = useState<number>(() => {
    const saved = localStorage.getItem('mahoor_score');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [isWinner, setIsWinner] = useState(false);

  // Persistence effect
  useEffect(() => {
    localStorage.setItem('mahoor_score', score.toString());
  }, [score]);

  // Determine Cactus State
  const getCactusState = (currentScore: number): CactusState => {
    if (currentScore >= MAX_SCORE) return CactusState.HAPPY;
    if (currentScore >= MAX_SCORE / 3) return CactusState.NEUTRAL;
    return CactusState.SAD;
  };

  // Handle Winning
  useEffect(() => {
    if (score >= MAX_SCORE && !isWinner) {
      setIsWinner(true);
      playSound('win');
      
      if (window.confetti) {
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function() {
          const timeLeft = animationEnd - Date.now();

          if (timeLeft <= 0) {
            return clearInterval(interval);
          }

          const particleCount = 50 * (timeLeft / duration);
          window.confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          window.confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
      }
    }
  }, [score, isWinner]);

  const handleTaskComplete = (points: number) => {
    if (score >= MAX_SCORE) return;
    
    playSound('coin');
    setScore(prev => Math.min(prev + points, MAX_SCORE));
  };

  const resetGame = () => {
    playSound('click');
    setScore(0);
    setIsWinner(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-purple-100 to-blue-200 text-gray-800 pb-8">
      
      {/* Winner Overlay */}
      {isWinner && <WinnerModal onReset={resetGame} />}

      {/* Header / Hero Section */}
      <div className="relative pt-6 pb-12 px-6 rounded-b-[3rem] bg-white/20 shadow-xl backdrop-blur-md mb-8">
        <div className="max-w-md mx-auto flex justify-between items-end">
          
          {/* Left: Water Tank */}
          <div className="flex flex-col items-center gap-2">
            <WaterTank score={score} />
            <span className="font-display text-blue-600 text-xl">{score}/{MAX_SCORE}</span>
          </div>

          {/* Center: Cactus */}
          <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4">
             <Cactus state={getCactusState(score)} />
          </div>
          
          {/* Right: Title & Stats (Hidden on very small screens, shown nicely otherwise) */}
          <div className="hidden sm:flex flex-col items-end mb-4">
             <h1 className="text-4xl font-display text-purple-800 drop-shadow-sm mb-1">دنیای ماهور</h1>
             <p className="text-sm text-gray-600">کمک کن کاکتوس بزرگ بشه!</p>
          </div>
        </div>
        
        {/* Mobile Title (visible only on small screens) */}
        <div className="sm:hidden text-center mt-6">
            <h1 className="text-3xl font-display text-purple-800 drop-shadow-sm">دنیای جادویی ماهور</h1>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="max-w-2xl mx-auto px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-display text-gray-700 flex items-center gap-2">
            <span>📋</span> لیست کارها
          </h2>
          
          {/* Reset button (small, subtle) */}
          {score > 0 && !isWinner && (
            <button 
              onClick={() => {
                if(confirm('آیا مطمئنی میخوای از اول شروع کنی؟')) resetGame();
              }}
              className="text-xs text-red-500 hover:bg-red-50 px-3 py-1 rounded-full transition"
            >
              شروع مجدد
            </button>
          )}
        </div>

        {/* Task Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {TASKS.map((task: Task) => (
            <TaskCard 
              key={task.id} 
              task={task} 
              onComplete={handleTaskComplete} 
            />
          ))}
        </div>
      </main>

      {/* Sticky footer decoration or info */}
      <footer className="mt-12 text-center text-gray-400 text-sm pb-safe">
        <p>ساخته شده با ❤️ برای ماهور</p>
      </footer>
    </div>
  );
};

export default App;