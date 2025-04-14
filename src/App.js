import React from 'react'
import "./App.css"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Comissioners } from './components/Comissioners'
import { Videos } from './components/Videos'
import { Meeting } from './components/Meeting'
import { Policy } from './components/Policy'
import { Petition } from './components/Petition'
import { Records } from './components/Records'
import { Contact } from './components/Contact'
import { Navbar } from './components/Navbar'
import { Links } from './components/Links'
import { Footer } from './components/Footer'
import { Elections } from './components/Elections'

import { Current } from './components/Current'
import { Report } from './components/Report'
import { Audit } from './components/Audit'
import { Resolution } from './components/Resolution'
import { AgendaArchive } from './components/AgendaArchive'
import { MinutesArchive } from './components/MinutesArchive'
import { ReportsArchive } from './components/ReportsArchive'
import { PosterWinner } from './components/PosterWinner'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comissioners" element={<Comissioners />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/meeting" element={<Meeting />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/petition" element={<Petition />} />
          <Route path="/records" element={<Records />} />
          <Route path="/links" element={<Links />} />

          <Route path="/current" element={<Current />} />
          <Route path="/resolution" element={<Resolution />} />
          <Route path="/audit" element={<Audit />} />
          <Route path="/report" element={<Report />} />
          <Route path="/posterContestWinner" element={<PosterWinner />} />


          <Route path="/agendaArchive" element={<AgendaArchive />} />
          <Route path="/minutesArchive" element={<MinutesArchive />} />
          <Route path="/reportsArchive" element={<ReportsArchive />} />
          <Route path="/elections" element={<Elections />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
