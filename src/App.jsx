import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import LandingPage from "./page/landingpage"
import CarbonTracker from "./components/carbon"
import Dashboard from "./components/home"
import WasteManagementDashboard from "./components/waste"
import EnvironmentalMonitoring from "./components/monitoring"
import GreenChallengesPage from "./components/challenges"
import CommunityEventsPage from "./components/community" 
import ProfilePage from "./components/profile";
import { Toaster } from "./components/ui/toaster"
import './App.css'
import LoginPage from "./page/login"

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Protected Route component
  const ProtectedRoute = ({ children }) => {
    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            {/* Public routes */}
            <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />

            {/* Protected routes */}
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <LandingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/carbon"
              element={
                <ProtectedRoute>
                  <CarbonTracker />
                </ProtectedRoute>
              }
            />
            <Route
              path="/waste"
              element={
                <ProtectedRoute>
                  <WasteManagementDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/monitoring"
              element={
                <ProtectedRoute>
                  <EnvironmentalMonitoring />
                </ProtectedRoute>
              }
            />
            <Route
              path="/challenges"
              element={
                <ProtectedRoute>
                  <GreenChallengesPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/community"
              element={
                <ProtectedRoute>
                  <CommunityEventsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
      <Toaster />
    </>
  )
}

export default App
