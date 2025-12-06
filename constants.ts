import { Task } from './types';

export const MAX_SCORE = 100;

export const TASKS: Task[] = [
  { id: 'bed', title: 'مرتب کردن تخت', points: 1, icon: '🛏️', type: 'standard' },
  { id: 'dress', title: 'پوشیدن لباس', points: 1, icon: '👕', type: 'standard' },
  { id: 'tidy', title: 'جمع کردن اتاق', points: 2, icon: '🧸', type: 'standard' },
  { id: 'table', title: 'چیدن میز', points: 2, icon: '🍽️', type: 'standard' },
  { id: 'teeth', title: 'مسواک زدن', points: 1, icon: '🦷', type: 'standard' },
  { id: 'read', title: 'کتاب خواندن', points: 3, icon: '📚', type: 'knowledge' },
  { id: 'homework', title: 'درس و تمرین', points: 3, icon: '✏️', type: 'brain' },
  { id: 'plants', title: 'آبیاری گل‌ها', points: 3, icon: '🌵', type: 'nature' },
];