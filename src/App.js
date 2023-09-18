import './App.css';
import { Footer } from './Components/Footer/Footer';
import HeroSection from './Components/HeroSection/HeroSection';
import { Navbar } from './Components/Navbar/Navbar';
import { Products } from './Components/Products/Products';

function App() {
  return (
    <div >
      <div className='min-h-[10vh]'>
        <Navbar />
      </div>
      <div className='min-h-[70vh]'>
      <HeroSection />
      </div>
        <Footer />
    </div>
  );
}

export default App;
