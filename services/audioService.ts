// Simple synth to avoid external file dependencies
export const playSound = (type: 'coin' | 'win' | 'click') => {
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
  if (!AudioContext) return;

  const ctx = new AudioContext();
  const osc = ctx.createOscillator();
  const gainNode = ctx.createGain();

  osc.connect(gainNode);
  gainNode.connect(ctx.destination);

  const now = ctx.currentTime;

  if (type === 'coin') {
    // High pitched "ding"
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, now);
    osc.frequency.exponentialRampToValueAtTime(1200, now + 0.1);
    gainNode.gain.setValueAtTime(0.3, now);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
    osc.start(now);
    osc.stop(now + 0.3);
  } else if (type === 'click') {
    // Soft click
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(200, now);
    gainNode.gain.setValueAtTime(0.1, now);
    gainNode.gain.linearRampToValueAtTime(0.01, now + 0.05);
    osc.start(now);
    osc.stop(now + 0.05);
  } else if (type === 'win') {
    // Victory Arpeggio
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C Major
    let time = now;
    
    notes.forEach((freq, i) => {
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.connect(g);
      g.connect(ctx.destination);
      
      o.type = 'square';
      o.frequency.value = freq;
      
      g.gain.setValueAtTime(0.1, time);
      g.gain.exponentialRampToValueAtTime(0.01, time + 0.4);
      
      o.start(time);
      o.stop(time + 0.4);
      time += 0.1;
    });
  }
};