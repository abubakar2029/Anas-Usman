import './App.css';
import HeroSection from './Components/HeroSection/HeroSection';
import { Navbar } from './Components/Navbar/Navbar';
import { Products } from './Components/Products/Products';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <HeroSection />
        {/* <Products /> */}
      </div>
    </ChakraProvider>
  );
}

export default App;
