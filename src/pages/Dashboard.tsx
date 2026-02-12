import { FocusTimer } from '../components/widgets/FocusTimer';
import { MoodSelector } from '../components/widgets/MoodSelector';
import { EnergyChart } from '../components/widgets/EnergyChart';
import { HabitTracker } from '../components/widgets/HabitTracker';
import { ProductivitySummary } from '../components/widgets/ProductivitySummary';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { dashboardStats } from '../utils/mockData';

export const Dashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Welcome Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Welcome back, Felix!</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Here's what's happening with your productivity today.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <img
                key={i}
                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i + 10}`}
                className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-900 bg-slate-100"
                alt="user"
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-slate-400 ml-2">+12 friends active</span>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat, i) => (
          <Card key={i} className="p-5 flex items-center gap-4" hover>
            <div className={`w-12 h-12 rounded-2xl ${stat.bg} flex items-center justify-center ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FocusTimer />
            <MoodSelector />
          </div>
          <EnergyChart />
          <ProductivitySummary />
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <HabitTracker />

          <Card className="bg-indigo-600 border-none text-white overflow-hidden relative" animate={false}>
            <div className="relative z-10">
              <Badge variant="neutral" className="bg-white/20 text-white border-none mb-4">Pro Tip</Badge>
              <h4 className="text-xl font-bold mb-2">Boost your Focus</h4>
              <p className="text-indigo-100 text-sm mb-6 leading-relaxed">Users who track their mood daily are 40% more likely to reach their goals. Consistency is key!</p>
              <button className="w-full py-3 bg-white text-indigo-600 rounded-xl font-bold hover:bg-indigo-50 transition-all active:scale-95 shadow-lg">
                Read Masterclass
              </button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-indigo-400/20 rounded-full blur-3xl"></div>
          </Card>

          <Card hover>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Upcoming Milestones</h3>
              <button className="text-xs font-bold text-indigo-500 hover:underline">View All</button>
            </div>
            <div className="space-y-6">
              {[
                { label: '30 Day Meditation', progress: 80, color: 'bg-indigo-500', icon: '🧘' },
                { label: 'Read 5 Books', progress: 45, color: 'bg-emerald-500', icon: '📚' },
                { label: '100 Focus Hours', progress: 92, color: 'bg-amber-500', icon: '⚡' },
              ].map((m, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{m.icon}</span>
                      <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{m.label}</span>
                    </div>
                    <span className="text-xs font-bold text-slate-400">{m.progress}%</span>
                  </div>
                  <div className="h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${m.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${m.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
