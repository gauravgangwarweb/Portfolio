import { useEffect, useState } from "react"
import About from "./components/about"
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import SplashScreen from "./components/splashScreen"
import supabase from "./assets/supabese"
import TechSection from "./components/techSection"
import ProjectSection from "./components/projectSection"
import Footer from "./components/footer"

function App() {
  const [about, setAbout] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await supabase.from('about').select('*');
      setAbout(res.data[0].data);
      setIsLoading(false); 
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      getData();
    }, delay);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="text-black main-bg">
      {isLoading ?
       <SplashScreen /> :
       <>
        <Hero />
        <About />
        <TechSection />
        {/* <ProjectSection /> */}
        {/* <Footer /> */}
      </>
       }
    </div>
  )
}

export default App;
