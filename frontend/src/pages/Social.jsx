import { Link } from 'react-router-dom'

export default function Social() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-700 text-white py-4 px-6">
        <div className="container mx-auto">
          <Link to="/" className="text-2xl font-bold">9jaConnect</Link>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">Social Connection</h2>
        <p className="text-gray-600 mb-6">
          Connect with verified Nigerians in your community, state, or with shared interests.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">Local Communities</h3>
            <p className="text-sm text-gray-600">Join groups based on your LGA, state, or community.</p>
          </div>
          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">Professional Networks</h3>
            <p className="text-sm text-gray-600">Connect with others in your industry or profession.</p>
          </div>
        </div>
      </main>
    </div>
  )
}