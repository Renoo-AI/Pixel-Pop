import { useState } from 'react';
import { Card, CardHeader, CardTitle } from '../ui/Card';
import { Button } from '../ui/Button';
import type { Mood, MoodEntry } from '../../types/dashboard';
import { cn } from '../../utils/cn';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { generateMockMoods } from '../../utils/mockData';

const moodOptions: { label: Mood; emoji: string; color: string }[] = [
  { label: 'Great', emoji: '🤩', color: 'bg-emerald-500' },
  { label: 'Good', emoji: '😊', color: 'bg-sky-500' },
  { label: 'Okay', emoji: '😐', color: 'bg-amber-500' },
  { label: 'Poor', emoji: '😕', color: 'bg-orange-500' },
  { label: 'Bad', emoji: '😫', color: 'bg-rose-500' },
];

export const MoodSelector = () => {
  const [moodHistory, setMoodHistory] = useLocalStorage<MoodEntry[]>('moods', generateMockMoods());
  const [selectedMood, setSelectedMood] = useState<Mood | null>(null);
  const [note, setNote] = useState('');

  const handleSave = () => {
    if (!selectedMood) return;

    const newEntry: MoodEntry = {
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
      mood: selectedMood,
      note: note.trim() || undefined
    };

    setMoodHistory([newEntry, ...moodHistory]);
    setSelectedMood(null);
    setNote('');

    // Feedback
    alert("Mood saved! Total entries: " + (moodHistory.length + 1));
  };

  return (
    <Card hover>
      <CardHeader>
        <CardTitle>How are you feeling?</CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400">Track your emotional well-being</p>
      </CardHeader>

      <div className="grid grid-cols-5 gap-2 mt-4">
        {moodOptions.map((mood) => (
          <button
            key={mood.label}
            onClick={() => setSelectedMood(mood.label)}
            className={cn(
              "flex flex-col items-center gap-2 p-3 rounded-2xl transition-all duration-200 border-2",
              selectedMood === mood.label
                ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20"
                : "border-transparent hover:bg-slate-50 dark:hover:bg-slate-800"
            )}
          >
            <span className="text-3xl" role="img" aria-label={mood.label}>
              {mood.emoji}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {mood.label}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-6">
        <textarea
          placeholder="Add a quick note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none h-20 text-slate-700 dark:text-slate-200"
        />
        <Button
          className="w-full mt-4"
          disabled={!selectedMood}
          onClick={handleSave}
        >
          Save Mood
        </Button>
      </div>

      {moodHistory.length > 0 && (
        <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Recent entries</p>
          <div className="space-y-3">
            {moodHistory.slice(0, 2).map(entry => (
              <div key={entry.id} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span>{moodOptions.find(m => m.label === entry.mood)?.emoji}</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">{entry.mood}</span>
                </div>
                <span className="text-xs text-slate-400">{new Date(entry.date).toLocaleDateString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
};
