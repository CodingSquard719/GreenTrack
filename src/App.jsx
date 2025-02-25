import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./page/landingpage"
import CarbonTracker from "./components/carbon"
import Dashboard from "./components/home"
import { Toaster } from "./components/ui/toaster"
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/carbon" element={<CarbonTracker />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster />
    </Router>
  )
}

export default App
