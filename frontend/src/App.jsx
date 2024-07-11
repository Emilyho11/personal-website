import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Hobbies from './pages/Hobbies.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
      </BrowserRouter>
      <Home />
      <Footer />
    </>
  )
}

export default App
