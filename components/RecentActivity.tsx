
import React from 'react';
import { MOCK_TRADES } from '../constants';

const RecentActivity: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 rounded-xl p-6 bg-white dark:bg-card-dark border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Activity</h3>
        <button className="text-primary text-sm font-bold hover:underline">View All Trades</button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-400 text-xs font-bold border-b border-slate-100 dark:border-slate-800 uppercase tracking-wider">
              <th className="pb-3 pt-0 px-2">Asset</th>
              <th className="pb-3 pt-0 px-2">Type</th>
              <th className="pb-3 pt-0 px-2">Entry</th>
              <th className="pb-3 pt-0 px-2">Exit</th>
              <th className="pb-3 pt-0 px-2">RRR</th>
              <th className="pb-3 pt-0 px-2 text-right">Net P/L</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {MOCK_TRADES.map((trade) => (
              <tr 
                key={trade.id} 
                className="border-b border-slate-50 dark:border-slate-800/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors cursor-pointer group"
              >
                <td className="py-4 px-2">
                  <div className="flex items-center gap-3">
                    <div className="size-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-bold text-[10px] text-slate-900 dark:text-slate-200 group-hover:bg-primary/20 transition-colors">
                      {trade.assetLabel}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 dark:text-white">{trade.asset}</p>
                      <p className="text-[10px] text-slate-500">{trade.timestamp}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-2">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-tight ${
                    trade.type === 'BUY/LONG' 
                      ? 'bg-success/10 text-success' 
                      : 'bg-danger/10 text-danger'
                  }`}>
                    {trade.type}
                  </span>
                </td>
                <td className="py-4 px-2 font-medium text-slate-700 dark:text-slate-300">{trade.entry.toFixed(5)}</td>
                <td className="py-4 px-2 font-medium text-slate-700 dark:text-slate-300">{trade.exit.toFixed(5)}</td>
                <td className="py-4 px-2 font-medium text-slate-700 dark:text-slate-300">{trade.rrr}</td>
                <td className={`py-4 px-2 text-right font-bold ${
                  trade.netPL >= 0 ? 'text-success' : 'text-danger'
                }`}>
                  {trade.netPL >= 0 ? `+$${trade.netPL.toFixed(2)}` : `-$${Math.abs(trade.netPL).toFixed(2)}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
