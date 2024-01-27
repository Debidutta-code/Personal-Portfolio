import './App.css';
import Navbar from './components/Navbar.js'
import Homepage from './components/Homepage.js';
import AboutPage from './components/AboutPage.js';
import SkillsPage from './components/SkillsPage.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Homepage />
        <AboutPage />
        <SkillsPage />
      </div>
    </div>
  );
}

export default App;
