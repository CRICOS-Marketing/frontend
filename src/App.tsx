import './App.css';
import Hero from './components/Hero';
import Services from './components/Services';
import Training from './components/Training';
import Consulting from './components/Consulting';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Services', link: '/services' },
    { name: 'Training', link: '/training' },
    { name: 'Consulting', link: '/consulting' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <Router>
      <Navbar navItems={navItems} />
      <Hero />
      <Services />
      <Training />
      <Consulting />
      <Contact />
    </Router>
  );
}

export default App;
