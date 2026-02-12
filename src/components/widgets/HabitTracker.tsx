import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Check, Flame } from 'lucide-react';
import { cn } from '../../utils/cn';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { initialHabits } from '../../utils/mockData';
import type { Habit } from '../../types/dashboard';

export const HabitTracker = () => {
  const [habits, setHabits] = useLocalStorage<Habit[]>('habits', initialHabits);

  const toggleHabit = (id: string) => {
    setHabits(habits.map(h => {
      if (h.id === id) {
        const today = new Date().toISOString().split('T')[0];
        const isCompleted = h.completedDates.includes(today);
        const newCompletedDates = isCompleted
          ? h.completedDates.filter(d => d !== today)
          : [...h.completedDates, today];

        return {
          ...h,
          completedDates: newCompletedDates,
          streak: isCompleted ? Math.max(0, h.streak - 1) : h.streak + 1
        };
      }
      return h;
    }));
  };

  const isTodayCompleted = (habit: Habit) => {
    const today = new Date().toISOString().split('T')[0];
    return habit.completedDates.includes(today);
  };

  return (
    <Card hover>
      <div className="flex flex-row items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Daily Habits</h3>
        <Badge variant="info">{habits.length} Total</Badge>
      </div>

      <div className="space-y-3 mt-2">
        {habits.map((habit) => {
          const completed = isTodayCompleted(habit);
          return (
            <div
              key={habit.id}
              className="flex items-center justify-between p-3 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer group"
              onClick={() => toggleHabit(habit.id)}
            >
              <div className="flex items-center gap-3">
                <div className={cn(
                  "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all",
                  completed
                    ? "bg-indigo-600 border-indigo-600 text-white"
                    : "border-slate-200 dark:border-slate-700 group-hover:border-indigo-400"
                )}>
                  {completed && <Check size={14} strokeWidth={3} />}
                </div>
                <span className={cn(
                  "font-medium transition-all",
                  completed ? "text-slate-400 line-through" : "text-slate-700 dark:text-slate-200"
                )}>
                  {habit.name}
                </span>
              </div>

              <div className="flex items-center gap-1 text-orange-500">
                <Flame size={16} fill="currentColor" />
                <span className="text-xs font-bold">{habit.streak}</span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 text-sm font-medium hover:border-indigo-400 hover:text-indigo-500 transition-all active:scale-[0.98]">
        + Add New Habit
      </button>
    </Card>
  );
};
