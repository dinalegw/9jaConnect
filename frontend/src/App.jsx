import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Social from './pages/Social.jsx'
import News from './pages/News.jsx'
import Marketplace from './pages/Marketplace.jsx'
import Groups from './pages/Groups.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<Social />} />
        <Route path="/news" element={<News />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/groups" element={<Groups />} />
      </Routes>
    </div>
  )
}

export default App