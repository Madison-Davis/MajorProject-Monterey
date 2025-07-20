// File: src/App.tsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Mission from "./pages/Mission";
import Profile from "./pages/Profile";
import About from "./pages/About";
import "leaflet/dist/leaflet.css";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-customBackground text-white font-roboto">
        <header className="flex justify-between items-center p-4 bg-customHeader shadow">
          <h1 className="text-xl font-bold">SustainableMissions</h1>
          <nav className="space-x-4">
            <Link to="/mission" className="hover:underline">Missions</Link>
            <Link to="/profile" className="hover:underline">Profile</Link>
            <Link to="/about" className="hover:underline">About</Link>
          </nav>
        </header>
        <main className="p-0">
          <Routes>
            <Route path="/mission" element={<Mission />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;