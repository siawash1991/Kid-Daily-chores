import React from 'react';
import { CactusState } from '../types';

interface CactusProps {
  state: CactusState;
}

const Cactus: React.FC<CactusProps> = ({ state }) => {
  // Animation classes
  const bounceClass = state === CactusState.HAPPY ? 'animate-bounce' : '';
  const pulseClass = state === CactusState.NEUTRAL ? 'animate-pulse' : '';

  // Colors
  const bodyColor = state === CactusState.SAD ? '#8ba88e' : '#4ade80';
  const potColor = '#eab308';

  return (
    <div className={`w-48 h-48 relative transition-all duration-500 transform ${bounceClass} ${pulseClass}`}>
      <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-xl">
        {/* Pot */}
        <path d="M60 140 L50 190 H150 L140 140 Z" fill={potColor} stroke="#b45309" strokeWidth="4" />
        <path d="M45 140 H155 L150 120 H50 L45 140 Z" fill="#facc15" stroke="#b45309" strokeWidth="4" />

        {/* Cactus Body (Main) */}
        <path d="M80 130 V70 C80 50 120 50 120 70 V130" stroke="#166534" strokeWidth="4" fill={bodyColor} className="transition-colors duration-500" />
        
        {/* Left Arm */}
        <path d="M80 100 H60 C50 100 50 80 60 80" stroke="#166534" strokeWidth="4" fill={bodyColor} strokeLinecap="round" 
          transform={state === CactusState.SAD ? "rotate(20 80 100)" : "rotate(-10 80 100)"} 
          className="transition-transform duration-500 origin-right"
        />

        {/* Right Arm */}
        <path d="M120 110 H140 C150 110 150 90 140 90" stroke="#166534" strokeWidth="4" fill={bodyColor} strokeLinecap="round" 
           transform={state === CactusState.SAD ? "rotate(-20 120 110)" : "rotate(10 120 110)"}
           className="transition-transform duration-500 origin-left"
        />

        {/* Face Expressions */}
        {state === CactusState.SAD && (
          <g id="face-sad">
            <circle cx="90" cy="90" r="3" fill="#1e293b" />
            <circle cx="110" cy="90" r="3" fill="#1e293b" />
            <path d="M90 105 Q100 95 110 105" stroke="#1e293b" strokeWidth="3" fill="none" />
            {/* Tear */}
            <path d="M85 95 Q85 100 87 102 Q89 100 89 95" fill="#3b82f6" opacity="0.8" />
          </g>
        )}

        {state === CactusState.NEUTRAL && (
          <g id="face-neutral">
            <circle cx="90" cy="90" r="4" fill="#1e293b" />
            <circle cx="110" cy="90" r="4" fill="#1e293b" />
            <path d="M90 105 H110" stroke="#1e293b" strokeWidth="3" strokeLinecap="round" />
          </g>
        )}

        {state === CactusState.HAPPY && (
          <g id="face-happy">
            <path d="M85 90 Q90 85 95 90" stroke="#1e293b" strokeWidth="3" fill="none" />
            <path d="M105 90 Q110 85 115 90" stroke="#1e293b" strokeWidth="3" fill="none" />
            <path d="M90 100 Q100 115 110 100" stroke="#1e293b" strokeWidth="3" fill="none" />
            <circle cx="85" cy="105" r="4" fill="#f472b6" opacity="0.6" />
            <circle cx="115" cy="105" r="4" fill="#f472b6" opacity="0.6" />
            
            {/* Flower */}
            <g transform="translate(100, 50)">
              <circle r="10" fill="#ec4899" />
              <circle r="5" fill="#fef08a" />
              <path d="M0 -15 L3 -5 H-3 Z" fill="#ec4899" transform="rotate(0)" />
              <path d="M0 -15 L3 -5 H-3 Z" fill="#ec4899" transform="rotate(45)" />
              <path d="M0 -15 L3 -5 H-3 Z" fill="#ec4899" transform="rotate(90)" />
              <path d="M0 -15 L3 -5 H-3 Z" fill="#ec4899" transform="rotate(135)" />
              <path d="M0 -15 L3 -5 H-3 Z" fill="#ec4899" transform="rotate(180)" />
              <path d="M0 -15 L3 -5 H-3 Z" fill="#ec4899" transform="rotate(225)" />
              <path d="M0 -15 L3 -5 H-3 Z" fill="#ec4899" transform="rotate(270)" />
              <path d="M0 -15 L3 -5 H-3 Z" fill="#ec4899" transform="rotate(315)" />
            </g>
          </g>
        )}
      </svg>
    </div>
  );
};

export default Cactus;