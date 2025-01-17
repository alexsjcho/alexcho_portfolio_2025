import Header from '@/components/Header'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <section id="about" className="bg-white">
          <About />
        </section>
        <section id="skills" className="bg-gray-50">
          <Skills />
        </section>
        <section id="projects" className="bg-white">
          <Projects />
        </section>
        <section id="contact" className="bg-gray-50">
          <Contact />
        </section>
      </main>
    </div>
  )
}

