
import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  progress?: number;
  progressTarget?: string;
  tag?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  change, 
  trend, 
  progress, 
  progressTarget,
  tag 
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-xl p-6 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-start">
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{title}</p>
        {trend === 'up' && <span className="material-symbols-outlined text-success">trending_up</span>}
        {trend === 'down' && <span className="material-symbols-outlined text-danger">trending_down</span>}
        {tag && <p className="text-white text-xs font-bold bg-primary px-2 py-0.5 rounded">{tag}</p>}
      </div>
      
      <p className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight">{value}</p>
      
      {progress !== undefined && (
        <div className="flex flex-col gap-2 mt-2">
          <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
            <div className="h-full bg-primary" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between text-[10px] text-slate-400 font-medium">
            <span>Target: {progressTarget}</span>
            <span>Current: {progress}%</span>
          </div>
        </div>
      )}

      {(change || subtitle) && (
        <div className="flex items-center gap-1 mt-1">
          {change && (
            <span className={`${trend === 'up' ? 'text-success' : trend === 'down' ? 'text-danger' : 'text-slate-400'} text-sm font-bold`}>
              {change}
            </span>
          )}
          {subtitle && <span className="text-slate-400 text-xs">{subtitle}</span>}
        </div>
      )}
    </div>
  );
};

export default StatCard;
