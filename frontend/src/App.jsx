import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from "./components/Navigation";
import Home from "./Pages/Home";
import Academics from "./Pages/Academics";
import Projects from "./Pages/Projects";
import Contact from './pages/Contact';
import Admin from './pages/Admin'




function App() {
  return (
    <Router>
      <Navigation /> {/* Visible on all pages */}
      
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Academics" element={<Academics />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Admin" element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
