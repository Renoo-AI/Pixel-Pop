import type { MoodEntry, FocusSession, EnergyLevel, Habit } from '../types/dashboard';
import { Clock, CheckCircle2, TrendingUp, Users } from 'lucide-react';

export const generateMockMoods = (): MoodEntry[] => {
  const moods: MoodEntry[] = [];
  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    moods.push({
      id: Math.random().toString(36).substr(2, 9),
      date: date.toISOString(),
      mood: ['Great', 'Good', 'Okay'][Math.floor(Math.random() * 3)] as any,
      note: i === 0 ? "Feeling productive today!" : undefined
    });
  }
  return moods;
};

export const generateMockFocusSessions = (): FocusSession[] => [
  { id: '1', date: new Date().toISOString(), durationMinutes: 45, label: 'Coding' },
  { id: '2', date: new Date().toISOString(), durationMinutes: 25, label: 'Email' },
  { id: '3', date: new Date().toISOString(), durationMinutes: 60, label: 'Deep Work' },
];

export const generateMockEnergyLevels = (): EnergyLevel[] => {
  const levels: EnergyLevel[] = [];
  const hours = ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00'];
  hours.forEach(time => {
    levels.push({
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0],
      level: Math.floor(Math.random() * 5) + 5,
      time
    });
  });
  return levels;
};

export const initialHabits: Habit[] = [
  { id: '1', name: 'Morning Meditation', completedDates: [], streak: 12, icon: 'Wind' },
  { id: '2', name: 'Read 20 Pages', completedDates: [], streak: 5, icon: 'Book' },
  { id: '3', name: 'Workout', completedDates: [], streak: 3, icon: 'Dumbbell' },
  { id: '4', name: 'No Sugar', completedDates: [], streak: 0, icon: 'CandyOff' },
];

export const dashboardStats = [
  { label: 'Avg Focus Time', value: '4.2h', icon: Clock, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-900/20' },
  { label: 'Habits Completed', value: '85%', icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-900/20' },
  { label: 'Daily Streak', value: '12', icon: TrendingUp, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-900/20' },
  { label: 'Community Rank', value: 'Top 5%', icon: Users, color: 'text-indigo-500', bg: 'bg-indigo-50 dark:bg-indigo-900/20' },
];
