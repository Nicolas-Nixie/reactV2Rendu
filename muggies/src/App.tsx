import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import './pages/Home.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
      </Routes>  
    </>
  )
}

export default App
