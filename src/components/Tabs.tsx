import { useState } from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onTabChange?: (tabId: string) => void;
  className?: string;
}

export const Tabs = ({
  tabs,
  defaultTab,
  onTabChange,
  className = '',
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const activeTabIndex = tabs.findIndex(tab => tab.id === activeTab);

  const getIndicatorWidth = () => {
    if (activeTabIndex === 0) return '2px';
    const percentage = (activeTabIndex / tabs.length) * 100;
    return `${percentage}%`;
  };

  return (
    <div className={`relative flex items-center ${className}`}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id)}
          className={`px-4 py-2 text-[1.25rem] font-medium transition-colors duration-200 ${
            activeTab === tab.id
              ? 'text-white'
              : 'text-white/60 hover:text-white/80'
          }`}
        >
          {tab.label}
        </button>
      ))}

      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-green"
        initial={false}
        animate={{ width: getIndicatorWidth() }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      />
    </div>
  );
};
