
import React from 'react';
import Sidebar from './components/Sidebar';
import TopHeader from './components/TopHeader';
import StatCard from './components/StatCard';
import ChartsSection from './components/ChartsSection';
import RecentActivity from './components/RecentActivity';

const App: React.FC = () => {
  return (
    <div className="flex h-screen overflow-hidden font-display">
      <Sidebar />
      
      <main className="flex-1 flex flex-col overflow-y-auto bg-background-light dark:bg-background-dark">
        <TopHeader />
        
        <div className="p-8 flex flex-col gap-8 animate-in fade-in duration-700">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard 
              title="Total Net Profit" 
              value="+$12,450.00" 
              change="+12.5%" 
              trend="up" 
              subtitle="from last month" 
            />
            <StatCard 
              title="Win Rate" 
              value="64%" 
              tag="64%"
              progress={64}
              progressTarget="60%"
            />
            <StatCard 
              title="Profit Factor" 
              value="2.15" 
              change="+0.1" 
              trend="up" 
              subtitle="stability index" 
            />
            <StatCard 
              title="Avg Risk Reward" 
              value="1:2.5" 
              subtitle="Last 142 trades analyzed" 
              trend="neutral"
            />
          </div>

          <ChartsSection />
          
          <RecentActivity />
        </div>
      </main>
    </div>
  );
};

export default App;
