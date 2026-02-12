import { LayoutDashboard, Target, BarChart3, Settings, LogOut, Zap, Heart } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';

export type TabId = 'overview' | 'habits' | 'analytics' | 'focus' | 'mood' | 'settings';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  activeTab: TabId;
  setActiveTab: (tab: TabId) => void;
}

const navItems: { icon: any; label: string; id: TabId }[] = [
  { icon: LayoutDashboard, label: 'Overview', id: 'overview' },
  { icon: Target, label: 'Habits', id: 'habits' },
  { icon: BarChart3, label: 'Analytics', id: 'analytics' },
  { icon: Zap, label: 'Focus', id: 'focus' },
  { icon: Heart, label: 'Mood', id: 'mood' },
  { icon: Settings, label: 'Settings', id: 'settings' },
];

export const Sidebar = ({ isOpen, setIsOpen, activeTab, setActiveTab }: SidebarProps) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 h-full w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 z-50 transition-transform duration-300 ease-in-out lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full p-4">
          <div className="flex items-center gap-3 px-2 mb-10">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
              <Zap size={24} />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Life Dash
            </h1>
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all duration-200 group",
                  activeTab === item.id
                    ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                )}
              >
                <item.icon size={20} className={cn(
                  "transition-transform group-hover:scale-110",
                  activeTab === item.id ? "text-indigo-600 dark:text-indigo-400" : "text-slate-400 dark:text-slate-500"
                )} />
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800">
            <Button variant="ghost" className="w-full justify-start gap-3 px-4">
              <LogOut size={20} />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
};
