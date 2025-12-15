import React from 'react'
import Homepage from './Pages/Homepage/Homepage'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route} from "react-router-dom"
import Footer from './Components/Footer/Footer'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Advantages from './Pages/Advantages/Advantages'
import Contact from './Pages/Contact/Contact'
import MeetTheTeam from './Pages/MeetTheTeam/MeetTheTeam'
import ScrollToTop from './Components/ScrollToTop'
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy'
import Legal from './Pages/Legal/Legal'
import Terms from './Pages/Terms/Terms'

const App = () => {
  return (
    <div>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path = "/"  element = {<Homepage />}/>
        <Route path = "/about"  element = {<About />}/>
        <Route path = "/services"  element = {<Services />}/>
        <Route path = "/advantages"  element = {<Advantages />}/>
        <Route path = "/contact"  element = {<Contact />}/>
        <Route path = "/theteam"  element = {<MeetTheTeam />}/>
        <Route path = "/privacypolicy"  element = {<PrivacyPolicy />}/>
        <Route path = "/legal"  element = {<Legal />}/>
        <Route path = "/terms"  element = {<Terms />}/>
        <Route path = "*"  element={<p>Nothing to show</p>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App