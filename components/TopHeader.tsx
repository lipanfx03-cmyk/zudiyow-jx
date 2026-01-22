
import React from 'react';

const TopHeader: React.FC = () => {
  return (
    <header className="flex items-center justify-between sticky top-0 z-10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-8 py-4">
      <div className="flex items-center gap-6">
        <h2 className="text-slate-900 dark:text-white text-xl font-bold tracking-tight">Performance Overview</h2>
        <div className="h-6 w-px bg-slate-200 dark:bg-slate-800"></div>
        <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
          <span className="material-symbols-outlined text-slate-500 text-lg">calendar_today</span>
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">Last 30 Days</span>
          <span className="material-symbols-outlined text-slate-400 text-sm">expand_more</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">search</span>
          <input 
            className="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm w-64 focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-700 dark:text-slate-200" 
            placeholder="Search trades..." 
            type="text"
          />
        </div>
        
        <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 relative hover:text-primary transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2.5 size-2 bg-danger rounded-full border-2 border-white dark:border-background-dark"></span>
        </button>
        
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg text-sm font-bold hover:opacity-90 transition-opacity">
          <span className="material-symbols-outlined text-lg">sync_alt</span>
          <span>Sync Broker</span>
        </button>
      </div>
    </header>
  );
};

export default TopHeader;
