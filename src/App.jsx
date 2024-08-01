import { useEffect, useState } from 'react'
import './App.css'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

function App() {
  let herodata = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to ", text2: "your passions" },
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  return (
    <>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero playStatus={playStatus} setPlayStatus={setPlayStatus} heroCount={heroCount} setHeroCount={setHeroCount} herodata={herodata[heroCount]} />
    </>
  )
}

export default App