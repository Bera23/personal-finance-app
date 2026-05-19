import { useAuth } from '../context/AuthContext'

// Login page - shown to unauthenticated users
export default function Login() {
  const { signInWithGoogle } = useAuth()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-sm text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Personal Finance</h1>
        <p className="text-gray-500 mb-8">Track your income and expenses</p>

        <button
          onClick={signInWithGoogle}
          className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 rounded-xl px-6 py-3 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
      </div>
    </div>
  )
}