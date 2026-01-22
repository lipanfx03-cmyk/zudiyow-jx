
import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col bg-white dark:bg-card-dark border-r border-slate-200 dark:border-slate-800 h-screen sticky top-0">
      <div className="flex flex-col h-full p-4 justify-between">
        <div className="flex flex-col gap-8">
          <div className="flex gap-3 items-center px-2">
            <div className="bg-primary rounded-lg size-10 flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-2xl">monitoring</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-slate-900 dark:text-white text-base font-bold leading-none">FX Journal Pro</h1>
              <p className="text-slate-500 dark:text-[#9dabb9] text-xs mt-1">Institutional Grade</p>
            </div>
          </div>
          
          <nav className="flex flex-col gap-1">
            <NavItem icon="dashboard" label="Dashboard" active />
            <NavItem icon="format_list_bulleted" label="Trade Log" />
            <NavItem icon="analytics" label="Analytics" />
            <NavItem icon="sync" label="Account Sync" />
            <NavItem icon="settings" label="Settings" />
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div 
                className="size-8 rounded-full bg-cover bg-center border border-slate-200 dark:border-slate-700" 
                style={{backgroundImage: 'url("https://picsum.photos/seed/alex/100/100")'}}
              ></div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold truncate text-slate-900 dark:text-white">Alex Thompson</p>
                <p className="text-[10px] text-slate-500">Pro Account</p>
              </div>
            </div>
          </div>
          
          <button className="w-full flex items-center justify-center gap-2 rounded-lg h-11 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all active:scale-[0.98]">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            <span>Add New Trade</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

const NavItem: React.FC<{ icon: string; label: string; active?: boolean }> = ({ icon, label, active }) => (
  <a 
    href="#" 
    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${
      active 
        ? 'bg-primary/10 text-primary' 
        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
    }`}
  >
    <span className={`material-symbols-outlined ${active ? '' : 'group-hover:text-slate-900 dark:group-hover:text-slate-200'}`}>{icon}</span>
    <p className={`text-sm font-${active ? 'semibold' : 'medium'}`}>{label}</p>
  </a>
);

export default Sidebar;
