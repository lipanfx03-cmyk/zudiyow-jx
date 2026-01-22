
import React from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { MOCK_CHART_DATA, SESSION_BREAKDOWN } from '../constants';

const ChartsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
      {/* Equity Curve */}
      <div className="xl:col-span-2 flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Equity Curve</h3>
            <p className="text-sm text-slate-500">Account growth over time</p>
          </div>
          <div className="flex gap-2">
            {['1W', '1M', '1Y', 'ALL'].map((range) => (
              <button 
                key={range}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors ${
                  range === '1M' ? 'bg-primary text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>
        
        <div className="h-[300px] w-full mt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_CHART_DATA}>
              <defs>
                <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#137fec" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.1}/>
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{fontSize: 10, fontWeight: 700, fill: '#94a3b8'}}
                dy={10}
              />
              <YAxis hide domain={['dataMin - 1000', 'dataMax + 1000']} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: 'none', 
                  borderRadius: '8px', 
                  fontSize: '12px',
                  color: '#fff',
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'
                }}
                itemStyle={{ color: '#137fec', fontWeight: 700 }}
              />
              <Area 
                type="monotone" 
                dataKey="balance" 
                stroke="#137fec" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorBalance)" 
                animationDuration={2000}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Session Breakdown */}
      <div className="flex flex-col gap-6 rounded-xl p-6 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 shadow-sm">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Session Breakdown</h3>
          <p className="text-sm text-slate-500">Performance by market time</p>
        </div>
        
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
          <div className="relative size-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={SESSION_BREAKDOWN}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  animationBegin={500}
                >
                  {SESSION_BREAKDOWN.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <p className="text-3xl font-bold text-slate-900 dark:text-white">142</p>
              <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Trades</p>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3">
            {SESSION_BREAKDOWN.map((session) => (
              <div key={session.name} className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="size-2.5 rounded-full" style={{ backgroundColor: session.color }}></div>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{session.name}</span>
                </div>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{session.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;
