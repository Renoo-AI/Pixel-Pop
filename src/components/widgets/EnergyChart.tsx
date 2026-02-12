import { Card, CardHeader, CardTitle } from '../ui/Card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { time: '08:00', level: 4 },
  { time: '10:00', level: 8 },
  { time: '12:00', level: 7 },
  { time: '14:00', level: 5 },
  { time: '16:00', level: 9 },
  { time: '18:00', level: 6 },
  { time: '20:00', level: 3 },
];

export const EnergyChart = () => {
  return (
    <Card className="col-span-1 md:col-span-2" hover>
      <CardHeader>
        <CardTitle>Energy Levels</CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400">Your energy fluctuations throughout the day</p>
      </CardHeader>

      <div className="h-64 w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#94a3b8' }}
            />
            <YAxis
              hide
              domain={[0, 10]}
            />
            <Tooltip
              contentStyle={{
                borderRadius: '12px',
                border: 'none',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                backgroundColor: '#fff'
              }}
            />
            <Area
              type="monotone"
              dataKey="level"
              stroke="#6366f1"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorEnergy)"
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
