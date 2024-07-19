import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import HobbiesGame from './pages/HobbiesGame.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbiesgame" element={<HobbiesGame />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
