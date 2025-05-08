import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import './output.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;