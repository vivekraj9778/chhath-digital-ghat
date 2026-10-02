import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Footer from "./components/Footer/Footer";
import { LocationProvider } from "./context/LocationContext";
import { ThemeProvider } from "./context/ThemeContext";
import { MusicProvider } from "./context/MusicContext";
import { useScrollAnimation } from "./hooks/useScrollAnimation";

function AppInner(){
  useScrollAnimation();
  useEffect(()=>{document.title="Chhath Digital Ghat 🪔";},[]);
  return <><Navbar/><main><Home/></main><MusicPlayer/><Footer/></>;
}
export default function App(){return <LocationProvider><ThemeProvider><MusicProvider><AppInner/></MusicProvider></ThemeProvider></LocationProvider>}