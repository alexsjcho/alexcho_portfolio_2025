'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const projectsData = [
  {
    title: 'AI-Powered Customer Service Chatbot',
    description: 'Developed an intelligent chatbot using NLP to improve customer service efficiency by 40%.',
    image: '/placeholder.svg?height=200&width=300',
    demo: 'https://example.com/demo1',
    repo: 'https://github.com/example/repo1',
    category: 'AI/ML Projects',
  },
  {
    title: 'E-commerce Personalization Engine',
    description: 'Created a recommendation system that increased average order value by 25% through personalized product suggestions.',
    image: '/placeholder.svg?height=200&width=300',
    demo: 'https://example.com/demo2',
    repo: 'https://github.com/example/repo2',
    category: 'Web Applications',
  },
  {
    title: 'Mobile App for Health Tracking',
    description: 'Led the development of a mobile app that uses machine learning to provide personalized health insights.',
    image: '/placeholder.svg?height=200&width=300',
    demo: 'https://example.com/demo3',
    repo: 'https://github.com/example/repo3',
    category: 'Mobile Apps',
  },
  {
    title: 'UX Redesign for SaaS Platform',
    description: 'Conducted user research and redesigned the UX of a SaaS platform, resulting in a 30% increase in user engagement.',
    image: '/placeholder.svg?height=200&width=300',
    demo: 'https://example.com/demo4',
    repo: 'https://github.com/example/repo4',
    category: 'UX/UI Design Projects',
  },
  {
    title: 'AI-Driven Financial Forecasting Tool',
    description: 'Developed a machine learning model to predict market trends and provide financial insights with 85% accuracy.',
    image: '/placeholder.svg?height=200&width=300',
    demo: 'https://example.com/demo5',
    repo: 'https://github.com/example/repo5',
    category: 'AI/ML Projects',
  },
  {
    title: 'Responsive Web Application for Event Management',
    description: 'Built a scalable web application that streamlined event planning and increased client bookings by 50%.',
    image: '/placeholder.svg?height=200&width=300',
    demo: 'https://example.com/demo6',
    repo: 'https://github.com/example/repo6',
    category: 'Web Applications',
  },
]

const categoryColors = {
  'AI/ML Projects': 'bg-blue-100 text-blue-800',
  'Web Applications': 'bg-green-100 text-green-800',
  'Mobile Apps': 'bg-yellow-100 text-yellow-800',
  'UX/UI Design Projects': 'bg-purple-100 text-purple-800',
}

const PROJECTS_PER_PAGE = 4

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentPage, setCurrentPage] = useState(1)

  const filteredProjects = useMemo(() => {
    return selectedCategory === 'All'
      ? projectsData
      : projectsData.filter(project => project.category === selectedCategory)
  }, [selectedCategory])

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE)
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  )

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }

  const handlePreviousPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages))
  }

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="mb-8 w-64 mx-auto">
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Projects</SelectItem>
              <SelectItem value="Web Applications">Web Applications</SelectItem>
              <SelectItem value="Mobile Apps">Mobile Apps</SelectItem>
              <SelectItem value="AI/ML Projects">AI/ML Projects</SelectItem>
              <SelectItem value="UX/UI Design Projects">UX/UI Design Projects</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {paginatedProjects.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded-lg shadow-md relative">
              {selectedCategory === 'All' && (
                <span className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[project.category]}`}>
                  {project.category}
                </span>
              )}
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <Button asChild>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="mt-8 flex justify-center items-center space-x-4">
            <Button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              variant="outline"
              size="sm"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              variant="outline"
              size="sm"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

