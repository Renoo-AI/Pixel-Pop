import { Card } from '../components/ui/Card';
import { ProductivitySummary } from '../components/widgets/ProductivitySummary';
import { EnergyChart } from '../components/widgets/EnergyChart';
import { BarChart3, TrendingUp, Calendar } from 'lucide-react';

export const Analytics = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3">
          <BarChart3 className="text-indigo-600" size={32} />
          Deep Analytics
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Detailed breakdown of your performance and habits.</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <ProductivitySummary />
          <EnergyChart />
        </div>

        <div className="space-y-8">
          <Card>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="text-emerald-500" size={20} />
              Growth Insights
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-800">
                <p className="text-sm text-emerald-800 dark:text-emerald-300 font-medium">Focus Consistency</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">You've maintained a 4h average for 5 days straight. Keep it up!</p>
              </div>
              <div className="p-4 bg-amber-50 dark:bg-amber-900/20 rounded-xl border border-amber-100 dark:border-amber-800">
                <p className="text-sm text-amber-800 dark:text-amber-300 font-medium">Energy Slump Detected</p>
                <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">Your energy consistently drops at 14:00. Consider a short walk or break.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Calendar className="text-indigo-500" size={20} />
              Monthly Goal
            </h3>
            <div className="flex flex-col items-center justify-center py-6">
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="64" cy="64" r="58" fill="transparent" stroke="currentColor" strokeWidth="8" className="text-slate-100 dark:text-slate-800" />
                  <circle cx="64" cy="64" r="58" fill="transparent" stroke="#6366f1" strokeWidth="8" strokeDasharray={364.42} strokeDashoffset={364.42 * 0.35} strokeLinecap="round" />
                </svg>
                <span className="text-2xl font-bold">65%</span>
              </div>
              <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-400">12/20 Habits Mastered</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
