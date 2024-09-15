import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './pages/AboutPage';
import ChatbotPage from './pages/Chatbot';
import FaqPage from './pages/FaqPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TranslatorPage from './pages/Translate';

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/chatbot">Chatbot</Link></li>
            <li><Link to="/translator">Translator</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/chatbot" element={<ChatbotPage />} />
            <Route path="/translator" element={<TranslatorPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
