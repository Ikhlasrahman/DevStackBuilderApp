import { Suspense } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import TechnologyList from './components/TechnologyList'
import type { TechnologiesType } from './types'

const technologiesPromise = async ():Promise<TechnologiesType[]> => {
  const res = await fetch('/data/technologies.json')
  const data = await res.json();
  return data;
}
function App() {
  

  return (
   <div>
   <Navbar />
    <Hero />
    <Suspense fallback={<p><span className="loading loading-bars loading-xl"></span></p>}>
      <TechnologyList technologiesPromise={technologiesPromise()} ></TechnologyList>
    </Suspense>
    <Footer />
   </div>
  )
}

export default App
