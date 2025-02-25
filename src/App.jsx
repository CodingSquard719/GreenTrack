import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./page/landingpage"
import CarbonTracker from "./components/carbon"
import Dashboard from "./components/home"
import WasteManagementDashboard from "./components/waste"
import EnvironmentalMonitoring from "./components/monitoring";
import GreenChallengesPage from "./components/challenges";
import { Toaster } from "./components/ui/toaster"
import './App.css'

function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/carbon" element={<CarbonTracker />} />
            <Route path="/waste" element={<WasteManagementDashboard />} />
            <Route path="/monitoring" element={<EnvironmentalMonitoring />} />
            <Route path="/challenges" element={<GreenChallengesPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
      <Toaster />
    </>
  )
}

export default App
