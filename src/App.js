import './App.css';
import Navbar from './components/Navbar';
import './index.css';
import Home from "./components/Home";
import Testimonials from './components/Testimonials';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';




function App() {
  return (
    <div className='bg-[#0a192f]'>
      <Navbar/> 
      <Home />
      <Testimonials />
      <Skills />
      <Work/>
      <Contact/>
      
    </div>
  );
};

export default App;
