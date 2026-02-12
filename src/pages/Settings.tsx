import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { User, Bell, Shield, Palette, Smartphone } from 'lucide-react';

export const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section>
        <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">Settings</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1">Manage your account and dashboard preferences.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <aside className="space-y-1">
          {[
            { icon: User, label: 'Profile' },
            { icon: Palette, label: 'Appearance', active: true },
            { icon: Bell, label: 'Notifications' },
            { icon: Smartphone, label: 'Devices' },
            { icon: Shield, label: 'Privacy' },
          ].map((item) => (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                item.active
                  ? 'bg-white dark:bg-slate-900 shadow-sm text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </aside>

        <div className="md:col-span-2 space-y-6">
          <Card>
            <h3 className="text-lg font-semibold mb-6">Profile Information</h3>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-500 uppercase tracking-wider text-[10px]">Full Name</label>
                  <input type="text" defaultValue="Felix Miller" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-500 uppercase tracking-wider text-[10px]">Email Address</label>
                  <input type="email" defaultValue="felix@example.com" className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <label className="text-sm font-medium text-slate-500 uppercase tracking-wider text-[10px]">Bio</label>
                <textarea rows={3} defaultValue="Software engineer by day, productivity geek by night. Building the future one pixel at a time." className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none" />
              </div>
              <div className="flex justify-end pt-4">
                <Button shadow-none="true">Save Changes</Button>
              </div>
            </div>
          </Card>

          <Card shadow-none="true">
            <h3 className="text-lg font-semibold mb-4">Danger Zone</h3>
            <p className="text-sm text-slate-500 mb-6">Permanently delete your account and all associated data. This action cannot be undone.</p>
            <Button variant="ghost" className="text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 hover:text-rose-600">
              Delete Account
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};
