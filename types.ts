export interface Task {
  id: string;
  title: string;
  points: number;
  icon: string;
  type: 'standard' | 'knowledge' | 'brain' | 'nature';
}

export enum CactusState {
  SAD = 'sad',
  NEUTRAL = 'neutral',
  HAPPY = 'happy'
}

// Declaration for the global confetti library loaded via CDN
declare global {
  interface Window {
    confetti: any;
  }
}