import './App.css';
import Navbar from './components/Navbar.js'
import Homepage from './components/Homepage.js';
import AboutPage from './components/AboutPage.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
      <AboutPage />
    </div>
  );
}

export default App;
