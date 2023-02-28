import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import './pages/Home.tsx'
import './components/Navbar.tsx'
import Navbar from './components/Navbar'
import SignUpModal from './components/SignUpModal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <SignUpModal />
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
    </Routes>  
    </>
  )
}

export default App
