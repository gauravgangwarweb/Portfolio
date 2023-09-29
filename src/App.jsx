import { useEffect, useState } from "react"
import About from "./components/About"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import SplashScreen from "./components/SplashScreen"
import supabase from "./assets/supabese"
import TechSection from "./components/TechSection"
import ProjectSection from "./components/ProjectSection"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import { store } from "./redux/store"

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
    <Provider store={store} >
      <div className="text-black main-bg z-0">
        {isLoading ?
          <SplashScreen /> :
          <>
            <Hero />
            <About />
            <TechSection />
            <ProjectSection />
            {/* <Footer /> */}
          </>
        }
      </div>
    </Provider>
  )
}

export default App;
