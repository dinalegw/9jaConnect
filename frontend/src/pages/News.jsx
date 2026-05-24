import { Link } from 'react-router-dom'

export default function News() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-700 text-white py-4 px-6">
        <div className="container mx-auto">
          <Link to="/" className="text-2xl font-bold">9jaConnect</Link>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">Local News & Information</h2>
        <p className="text-gray-600 mb-6">
          Verified news from trusted Nigerian sources in English, Yoruba, Igbo, Hausa, and Pidgin.
        </p>
        <div className="border rounded-lg p-4">
          <p className="text-gray-500">News feed coming soon...</p>
        </div>
      </main>
    </div>
  )
}