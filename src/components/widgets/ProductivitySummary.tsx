import { Card, CardHeader, CardTitle } from '../ui/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { day: 'Mon', score: 85 },
  { day: 'Tue', score: 92 },
  { day: 'Wed', score: 78 },
  { day: 'Thu', score: 95 },
  { day: 'Fri', score: 88 },
  { day: 'Sat', score: 65 },
  { day: 'Sun', score: 72 },
];

export const ProductivitySummary = () => {
  return (
    <Card className="col-span-1 md:col-span-2" hover>
      <CardHeader>
        <CardTitle>Weekly Productivity</CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400">Your average score based on completed tasks and focus sessions</p>
      </CardHeader>

      <div className="h-64 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94a3b8' }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94a3b8' }}
              domain={[0, 100]}
            />
            <Tooltip
              cursor={{ fill: 'rgba(99, 102, 241, 0.05)' }}
              contentStyle={{
                borderRadius: '12px',
                border: 'none',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                backgroundColor: '#fff'
              }}
            />
            <Bar
              dataKey="score"
              radius={[6, 6, 0, 0]}
              barSize={32}
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.score > 80 ? '#6366f1' : '#94a3b8'}
                  fillOpacity={entry.score > 80 ? 1 : 0.6}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex justify-between items-center mt-6 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
        <div>
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Weekly Average</p>
          <p className="text-2xl font-bold text-slate-800 dark:text-slate-100">83%</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Trend</p>
          <p className="text-sm font-bold text-emerald-500 flex items-center gap-1 justify-end">
            +12% vs last week
          </p>
        </div>
      </div>
    </Card>
  );
};
