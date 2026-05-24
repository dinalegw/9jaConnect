import { Link } from 'react-router-dom'

export default function Groups() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-700 text-white py-4 px-6">
        <div className="container mx-auto">
          <Link to="/" className="text-2xl font-bold">9jaConnect</Link>
        </div>
      </header>
      <main className="flex-1 container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold mb-4">Community Groups</h2>
        <p className="text-gray-600 mb-6">
          Join groups for your state, LGA, ethnicity, profession, or interests.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <GroupCard name="Lagos Community" members="12.5K" />
          <GroupCard name="Yoruba Heritage" members="8.2K" />
          <GroupCard name="Tech Nigeria" members="5.7K" />
        </div>
      </main>
    </div>
  )
}

function GroupCard({ name, members }) {
  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition-shadow">
      <h3 className="font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{members} members</p>
    </div>
  )
}