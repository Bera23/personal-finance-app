import { NAV_TABS } from '../constants/navigation'

// Icons for each navigation tab
const icons = {
  [NAV_TABS.TRANSACTIONS]: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>
  ),
  [NAV_TABS.STATS]: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  [NAV_TABS.ACCOUNTS]: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
  ),
  [NAV_TABS.SETTINGS]: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
}

// Bottom navigation bar with elevated center add button
export default function BottomNav({ activeTab, onTabChange, onAddClick }) {
  const tabs = [
    { id: NAV_TABS.TRANSACTIONS, label: 'Trans.' },
    { id: NAV_TABS.STATS, label: 'Stats' },
    { id: NAV_TABS.ACCOUNTS, label: 'Accounts' },
    { id: NAV_TABS.SETTINGS, label: 'Settings' },
  ]

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="flex items-end justify-around px-2 pb-2 pt-1">

        {/* First two tabs */}
        {tabs.slice(0, 2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-colors ${
              activeTab === tab.id
                ? 'text-blue-500'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            {icons[tab.id]}
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}

        {/* Elevated center add button */}
        <div className="flex flex-col items-center -mt-6">
          <button
            onClick={onAddClick}
            className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="w-7 h-7">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <span className="text-xs font-medium text-gray-400 dark:text-gray-500 mt-1">Add</span>
        </div>

        {/* Last two tabs */}
        {tabs.slice(2).map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-1 px-3 py-1 rounded-xl transition-colors ${
              activeTab === tab.id
                ? 'text-blue-500'
                : 'text-gray-400 dark:text-gray-500'
            }`}
          >
            {icons[tab.id]}
            <span className="text-xs font-medium">{tab.label}</span>
          </button>
        ))}

      </div>
    </div>
  )
}