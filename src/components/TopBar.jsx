import { useTheme } from '../context/ThemeContext'

// Top navigation bar with page title and month selector
export default function TopBar({ title, currentMonth, onPrevMonth, onNextMonth }) {
  const { isDark } = useTheme()

  // Format month for display (e.g. "May 2026")
  const formatMonth = (date) => {
    return date.toLocaleString('en-US', { month: 'long', year: 'numeric' })
  }

  return (
   <div className="fixed top-0 left-0 right-0 z-10 text-white px-4 py-3 flex items-center justify-between" style={{ backgroundColor: '#0D1B4B ' }}>
      {/* Page title */}
      <h1 className="text-lg font-semibold">{title}</h1>

      {/* Month selector with prev/next arrows */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevMonth}
          className="p-1 rounded-full hover:bg-blue-900 transition-colors"
        >
          ‹
        </button>
        <span className="text-sm font-medium min-w-[100px] text-center">
          {formatMonth(currentMonth)}
        </span>
        <button
          onClick={onNextMonth}
          className="p-1 rounded-full hover:bg-blue-900 transition-colors"
        >
          ›
        </button>
      </div>
    </div>
  )
}