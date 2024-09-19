import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';
import AboutPage from './Components/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' exact element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
