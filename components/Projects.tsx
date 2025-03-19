'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Github, Globe } from 'lucide-react'
import getBasePath from '../utils/path'

// First, define the valid categories
type CategoryType = 'AI/ML' | 'Web' | 'UX/UI Design';

interface Project {
  title: string;
  description: string;
  category: CategoryType;  // Use the specific type here
  image: string;
  demo?: string;
  repo?: string;
  tools: string[];  // Add tools array
}

const projectsData = [
  {
    title: 'MentorNear',
    description: 'jQuery app: Find and meet with a mentor near you',
    image: `${getBasePath()}/img/mentornear.png`,
    repo: 'https://github.com/alexsjcho/mentor-near-api-capstone',
    category: 'Web',
    tools: ['jQuery', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Normalize.css', '3rd Party API'],
  },
  {
    title: 'Qualified',
    description: 'Allows users to score their sales conversations',
    image: `${getBasePath()}/img/qualified.png`,
    repo: 'https://github.com/alexsjcho/qualified-react-redux-immutable-app',
    category: 'Web',
    tools: ['React', 'Redux', 'React-Router', 'Immutable', 'Bootstrap',  'Jest', 'Enzyme', 'JavaScript', 'CSS', '3rd Party API'],
  },
  {
    title: 'SmartOKR',
    description: 'Automate your goals via everday software tools',
    image: `${getBasePath()}/img/sokrapp.png`,
    repo: 'https://github.com/alexsjcho/smart-okr-react-redux-app',
    category: 'Web',
    tools: ['React', 'Redux', 'JavaScript', '3rd Party API'],
  },
  {
    title: 'GramPages',
    description: 'GramPages provides engagement analytics for Instagram to empower influencers to make content creation decisions that will yield the greatest impact (no longer hosted, private GitHub repo)',
    image: `${getBasePath()}/img/grampages.png`,
    category: 'Web',
    tools: ['JavaScript', 'CSS', '3rd Party API', 'React', 'Redux', 'React-Router', 'Express', 'Node.js', 'MongoDB', 'Mongoose'],
  },
  
  {
    title: 'Rollout System',
    description: 'Internal ByteDance intent-based deployment IaC product',
    image: `${getBasePath()}/img/rolloutsystem.png`,
    demo: 'https://www.figma.com/proto/NdFRq7UsKkyrfIFddtZitG/RLS-Q32024?node-id=36-27387&t=PDo2dUO7bLGzoPVl-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
    category: 'UX/UI Design',
    tools: ['Figma'],
  },

  {
    title: 'ByteGate',
    description: 'Internal ByteDance feature flagging product',
    image: `${getBasePath()}/img/bytegate.png`,
    demo: 'https://www.figma.com/proto/qEPSOnfWhm3Qbd4RQWOAWc/feature-gate-Q3-2024?node-id=1-52442&node-type=FRAME&t=ghsDeWkF9NHlYaUR-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A11',
    category: 'UX/UI Design',
    tools: ['Figma'],
  },
  {
    title: 'Apple Sales Forecasting 2024',
    description: 'Beginner project on Apple sales forecasting for 2024',
    image: `${getBasePath()}/img/correlation_heatmap.png`,
    category: 'AI/ML',
    repo: 'https://github.com/alexsjcho/apple-2024-sales-dataset',
    tools: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas', 'Numpy', 'Matplotlib', 'Scikit-learn', 'Jupyter Notebook'],
  },
  {
    title: 'AI-Powered Customer Service Chatbot',
    description: 'This was a practice project to learn more about AI Agents workflows. Used Langflow as the backend to power my Next.js frontend.',
    image: `${getBasePath()}/img/ai_agent_chatbot.png`,
    category: 'AI/ML',
    repo: 'https://github.com/alexsjcho/customer_support_ai_agent',
    tools: ['Python', 'Langflow', 'OpenAI', 'Astra-DB', 'Next.js']
  },
  {
    title: 'Simple Terminal AI Agent',
    description: 'Created a simple AI Agent from scratch using Anthropic\'s Claude API and tools',
    image: `${getBasePath()}/img/ai_agent_terminal.png`,
    category: 'AI/ML',
    repo: 'https://github.com/alexsjcho/aiagent_from_scratch',
    tools: ['Anthropic', 'Claude API', 'Python', 'Wikipedia Search API']
  },
  {
    title: 'Another AI project TBD',
    description: 'On roadmap. TBD',
    image: `${getBasePath()}/placeholder.svg?height=200&width=300`,
    category: 'AI/ML',
    tools: ['TBD']
  }

]

// Define a type for the category colors
type CategoryColors = {
  [K in CategoryType]: string;
}

// Define the categoryColors object with the correct type
const categoryColors: CategoryColors = {
  'AI/ML': 'bg-blue-100 text-blue-800',
  'Web': 'bg-green-100 text-green-800',
  'UX/UI Design': 'bg-orange-100 text-orange-800'
}

const PROJECTS_PER_PAGE = 9

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
    <div className="max-w-6xl mx-auto mt-8 pt-8">
      <section className="px-4">
        <h2 className="text-4xl font-bold mb-8 text-center text-black font-sans tracking-tight">Projects</h2>
        <div className="mb-8 w-64 mx-auto">
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent className="bg-white dark:bg-gray-800">
              <SelectItem value="All" className="cursor-pointer">All Projects</SelectItem>
              <SelectItem value="Web" className="cursor-pointer">Web</SelectItem>
              <SelectItem value="AI/ML" className="cursor-pointer">AI/ML</SelectItem>
              <SelectItem value="UX/UI Design" className="cursor-pointer">UX/UI Design</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedProjects.map((project) => (
            <div key={project.title} className="bg-white p-6 rounded-lg shadow-md relative">
              {selectedCategory === 'All' && (
                <span className={`absolute top-4 left-4 px-2 py-1 rounded-full text-xs font-semibold ${categoryColors[project.category as CategoryType]}`}>
                  {project.category}
                </span>
              )}
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                width={400}
                height={400}
                className="w-[300px] h-[300px] object-contain mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {project.tools.map((tool) => (
                  <span key={tool} className="px-2 py-1 bg-gray-100 rounded-full text-xs">
                    {tool}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                {project.demo && (
                  <Button asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Globe className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.repo && (
                  <Button variant="outline" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub Repo
                    </a>
                  </Button>
                )}
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
      </section>
    </div>
  )
}

