import React from 'react';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  onComplete: (points: number) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onComplete }) => {
  const getCardStyle = () => {
    switch (task.type) {
      case 'knowledge':
        return 'border-purple-300 bg-purple-100/40 hover:bg-purple-100/60';
      case 'brain':
        return 'border-indigo-300 bg-indigo-100/40 hover:bg-indigo-100/60';
      case 'nature':
        return 'border-green-300 bg-green-100/40 hover:bg-green-100/60';
      default:
        return 'border-white/50 bg-white/40 hover:bg-white/60';
    }
  };

  return (
    <button
      onClick={() => onComplete(task.points)}
      className={`
        relative overflow-hidden group
        flex flex-col items-center justify-center p-4 
        rounded-2xl border-2 backdrop-blur-sm shadow-sm
        transition-all duration-150 active:scale-95
        ${getCardStyle()}
      `}
    >
      <div className="text-4xl mb-2 filter drop-shadow-md transform group-hover:scale-110 transition-transform">
        {task.icon}
      </div>
      
      <h3 className="text-lg font-bold text-gray-800 text-center leading-tight mb-1">
        {task.title}
      </h3>
      
      <div className="absolute top-2 left-2 bg-white/80 rounded-full w-6 h-6 flex items-center justify-center shadow-sm">
        <span className="text-xs font-bold text-gray-600">+{task.points}</span>
      </div>
      
      {/* Ripple effect on click (via CSS active state) */}
    </button>
  );
};

export default TaskCard;