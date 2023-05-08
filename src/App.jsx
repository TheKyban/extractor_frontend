import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'
import { createContext, useState } from 'react'
import Navbar from './components/Navbar'
import Google from './components/Google'

export const contexts = createContext()
// export const api_endpoint = 'http://localhost:7575/news'
export const api_endpoint = 'https://extractor-backend.onrender.com/news'

function App() {

  const [loading, setLoading] = useState(false)
  const [URL, setURL] = useState({
    name: "",
    link: ""
  })

  return (
    <Router>
      <contexts.Provider value={{ loading, setLoading, URL, setURL }}>
        <Navbar />
        <Routes>
          <Route path='/news' element={<Home />} />
          <Route path='/' element={<Google />} />
          <Route path='/details' element={<Details />} />
        </Routes>

      </contexts.Provider>
    </Router>
  )
}

export default App

