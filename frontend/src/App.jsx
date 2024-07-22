import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import HobbiesGame from './pages/HobbiesGame.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer.jsx'
import { useEffect } from 'react'

function App() {

  // useEffect(() => {
  //   // Function to disable right-click
  //   const handleContextMenu = (event) => {
  //     event.preventDefault();
  //   };
    
  //   // Function to disable specific keyboard shortcuts
  //   const handleKeyDown = (event) => {
  //     if (event.keyCode === 123 || // F12
  //         (event.ctrlKey && event.shiftKey && (event.keyCode === 73 || event.keyCode === 74)) || // Ctrl+Shift+I or Ctrl+Shift+J
  //         (event.ctrlKey && event.keyCode === 85)) { // Ctrl+U
  //       event.preventDefault();
  //     }
  //   };
    
  //   // Add event listeners
  //   document.addEventListener('contextmenu', handleContextMenu);
  //   document.addEventListener('keydown', handleKeyDown);

  //   // Clean up event listeners on unmount
  //   return () => {
  //     document.removeEventListener('contextmenu', handleContextMenu);
  //     document.removeEventListener('keydown', handleKeyDown);
  //   };
  // }, []);

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
