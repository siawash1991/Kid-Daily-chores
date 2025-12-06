import React from 'react';
import { MAX_SCORE } from '../constants';

interface WaterTankProps {
  score: number;
}

const WaterTank: React.FC<WaterTankProps> = ({ score }) => {
  const percentage = Math.min((score / MAX_SCORE) * 100, 100);

  return (
    <div className="relative h-48 w-16 bg-white/30 backdrop-blur-sm rounded-full border-4 border-white/50 overflow-hidden shadow-inner">
      {/* Glass Reflection */}
      <div className="absolute top-2 left-2 w-3 h-40 bg-white/20 rounded-full z-10 pointer-events-none"></div>
      
      {/* Water Level */}
      <div 
        className="absolute bottom-0 left-0 w-full bg-blue-500 transition-all duration-700 ease-out flex items-start justify-center"
        style={{ height: `${percentage}%` }}
      >
        {/* Surface Tension Line */}
        <div className="w-full h-2 bg-blue-400 opacity-50"></div>
        
        {/* Bubbles */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* Measurement Lines */}
      <div className="absolute top-[25%] right-0 w-3 h-0.5 bg-white/60"></div>
      <div className="absolute top-[50%] right-0 w-5 h-0.5 bg-white/60"></div>
      <div className="absolute top-[75%] right-0 w-3 h-0.5 bg-white/60"></div>
    </div>
  );
};

export default WaterTank;