import { Github, Linkedin, Mail } from 'lucide-react'

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto">
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">Contact Me</h2>
      <div className="flex justify-center space-x-8">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <Github size={32} />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <Linkedin size={32} />
        </a>
        <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
          <Mail size={32} />
        </a>
      </div>
    </section>
    </div>
  )
}

