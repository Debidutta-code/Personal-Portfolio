import './App.css';
import Navbar from './components/Navbar.js'
import Homepage from './components/Homepage.js';
import AboutPage from './components/AboutPage.js';
import SkillsPage from './components/SkillsPage.js';
import ProjectPage from './components/ProjectPage.js';
import ContactPage from './components/ContactPage.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Homepage />
        <AboutPage />
        <SkillsPage />
        <ProjectPage />
        <ContactPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
