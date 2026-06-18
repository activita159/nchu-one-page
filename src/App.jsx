import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Works from './components/Works.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[#fbfbf8] text-pop-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Works />
        <Contact />
      </main>
    </div>
  );
}

export default App;
