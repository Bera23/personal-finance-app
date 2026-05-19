import { useState } from 'react'
import { useAuth } from './context/AuthContext'
import { useTheme } from './context/ThemeContext'
import Login from './pages/Login'
import Transactions from './pages/Transactions'
import Stats from './pages/Stats'
import Accounts from './pages/Accounts'
import Settings from './pages/Settings'
import TopBar from './components/TopBar'
import BottomNav from './components/BottomNav'
import { NAV_TABS } from './constants/navigation'

function App() {
  const { currentUser } = useAuth()
  const { isDark } = useTheme()
  const [activeTab, setActiveTab] = useState(NAV_TABS.TRANSACTIONS)
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Show login page if user is not authenticated
  if (!currentUser) {
    return <Login />
  }

  // Navigate to previous month
  const handlePrevMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }

  // Navigate to next month
  const handleNextMonth = () => {
    setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }

  // Render the active page based on selected tab
  const renderPage = () => {
    switch (activeTab) {
      case NAV_TABS.TRANSACTIONS:
        return <Transactions currentMonth={currentMonth} />
      case NAV_TABS.STATS:
        return <Stats currentMonth={currentMonth} />
      case NAV_TABS.ACCOUNTS:
        return <Accounts />
      case NAV_TABS.SETTINGS:
        return <Settings />
      default:
        return <Transactions currentMonth={currentMonth} />
    }
  }

  // Page titles for each tab
  const pageTitles = {
    [NAV_TABS.TRANSACTIONS]: 'Transactions',
    [NAV_TABS.STATS]: 'Stats',
    [NAV_TABS.ACCOUNTS]: 'Accounts',
    [NAV_TABS.SETTINGS]: 'Settings',
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <TopBar
        title={pageTitles[activeTab]}
        currentMonth={currentMonth}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />

      {/* Main content area with padding for top and bottom bars */}
      <main className="pt-16 pb-24">
        {renderPage()}
      </main>

      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        onAddClick={() => console.log('Add transaction')}
      />
    </div>
  )
}

export default App