import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './input.css'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'
import About from './Komponen/About.jsx'
import Gallery from './Komponen/Galery.jsx'
import AudioPlayer from './Komponen/AudioPlayer.jsx'
import FeedbackForm from './Feedback.jsx'
import Contact from './Contact.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Home />
    <About/>
    <Gallery/>
    <FeedbackForm/>
    <Contact/>
    <AudioPlayer/>
  
  </StrictMode>
)
