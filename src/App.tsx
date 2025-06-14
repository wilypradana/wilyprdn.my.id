import { Home, Scroll, Star } from 'lucide-react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectSection from './components/Project'
import Skills from './components/Skills'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        
   
        <section id="home">
         <HeroSection />
        </section>

        <section id="project">
          <ProjectSection />
        </section>

        <section id="skills">
          <Skills />
        </section>
             <ScrollToTopButton />
      </main>
    </div>
  )
}

export default App