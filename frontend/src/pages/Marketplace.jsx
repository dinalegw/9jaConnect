import { Link } from 'react-router-dom'

export default function Marketplace() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-700 text-white py-4 px-6">
        <div className="container mx-auto">
          <Link to="/" className="text-2xl font-bold">9jaConnect</Link>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">Local Marketplace</h2>
        <p className="text-gray-600 mb-6">
          Buy, sell, and trade within your community. Pay with airtime or cash on delivery.
        </p>
        <div className="border rounded-lg p-4">
          <p className="text-gray-500">Marketplace coming soon...</p>
        </div>
      </main>
    </div>
  )
}