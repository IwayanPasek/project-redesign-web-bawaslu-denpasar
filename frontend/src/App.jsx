import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import News from './components/News';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary-container selection:text-white">
      <Navbar />
      <Hero />
      <Services />
      <News />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
