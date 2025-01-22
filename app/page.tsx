import About from '@/components/About'
import Header from '@/components/Header'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import { WavyBackground } from "@/components/ui/wavy-background"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* About section with wavy background */}
      <section id="about" className="relative">
        <WavyBackground>
          <div className="max-w-6xl mx-auto px-4">
            <About />
          </div>
        </WavyBackground>
      </section>

      {/* Skills section with light gray background */}
      <section id="skills" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Skills />
        </div>
      </section>

      {/* Projects section with white background */}
      <section id="projects" className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Projects />
        </div>
      </section>

      {/* Contact section with light gray background */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Contact />
        </div>
      </section>
    </main>
  )
}

