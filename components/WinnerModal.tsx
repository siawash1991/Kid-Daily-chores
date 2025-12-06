import React from 'react';

interface WinnerModalProps {
  onReset: () => void;
}

const WinnerModal: React.FC<WinnerModalProps> = ({ onReset }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div className="bg-white/90 rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl border-4 border-yellow-400 transform scale-100 animate-pop-in">
        
        <div className="text-6xl mb-4 animate-bounce">🎉</div>
        
        <h2 className="text-3xl font-display text-purple-700 mb-4">
          آفرین ماهور!
        </h2>
        
        <p className="text-xl text-gray-700 mb-8">
          کاکتوس زنده شد و گل داد!
          <br/>
          تو قهرمان طبیعتی!
        </p>
        
        <button
          onClick={onReset}
          className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold text-xl py-4 rounded-xl shadow-lg hover:shadow-xl transform transition hover:-translate-y-1 active:scale-95"
        >
          شروع دوباره بازی 🔄
        </button>
      </div>
    </div>
  );
};

export default WinnerModal;