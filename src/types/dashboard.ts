export type Mood = 'Great' | 'Good' | 'Okay' | 'Poor' | 'Bad';

export interface MoodEntry {
  id: string;
  date: string; // ISO string
  mood: Mood;
  note?: string;
}

export interface FocusSession {
  id: string;
  date: string;
  durationMinutes: number;
  label: string;
}

export interface EnergyLevel {
  id: string;
  date: string;
  level: number; // 1-10
  time: string; // e.g. "08:00"
}

export interface Habit {
  id: string;
  name: string;
  completedDates: string[]; // Array of ISO date strings (YYYY-MM-DD)
  streak: number;
  icon: string;
}

export interface ProductivityData {
  date: string;
  score: number;
}

export interface DashboardState {
  moods: MoodEntry[];
  focusSessions: FocusSession[];
  energyLevels: EnergyLevel[];
  habits: Habit[];
}
