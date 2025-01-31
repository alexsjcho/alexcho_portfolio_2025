import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <section>
        <h2 className="text-4xl font-bold mb-8 text-center text-black font-sans tracking-tight">Contact</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/alexsjcho" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Github size={32} />
          </a>
          <a href="https://www.linkedin.com/in/alexsjcho/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
            <Linkedin size={32} />
          </a>
          <a href="mailto:alexsjcho@gmail.com" className="text-gray-600 hover:text-gray-900">
            <Mail size={32} />
          </a>
        </div>
      </section>
    </div>
  )
}

