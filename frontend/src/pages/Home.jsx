import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-green-700 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">9jaConnect</h1>
          <nav className="flex gap-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/social" className="hover:underline">Social</Link>
            <Link to="/news" className="hover:underline">News</Link>
            <Link to="/marketplace" className="hover:underline">Marketplace</Link>
            <Link to="/groups" className="hover:underline">Groups</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center bg-gradient-to-b from-green-50 to-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Connecting Nigeria, One Community at a Time
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The all-in-one platform for Nigerians to connect, share, trade, and stay informed.
            Built for our networks, our languages, and our unique challenges.
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/social" className="btn-primary">
              Get Started
            </Link>
            <Link to="/groups" className="btn-outline">
              Join a Community
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <h3 className="text-2xl font-bold text-center mb-8">Everything in One Place</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              title="Social Connection"
              desc="Connect with real people in your community, verified by phone number."
              link="/social"
            />
            <FeatureCard
              title="Local News"
              desc="Verified news and real-time alerts for your area."
              link="/news"
            />
            <FeatureCard
              title="Marketplace"
              desc="Buy, sell, and trade locally with trusted community members."
              link="/marketplace"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 px-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2026 9jaConnect. Connecting Nigeria.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, desc, link }) {
  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-gray-600 mb-4">{desc}</p>
      <Link to={link} className="text-green-700 font-medium hover:underline">
        Explore →
      </Link>
    </div>
  )
}