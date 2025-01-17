'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const skillsData = {
  'Web Development': {
    skills: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    color: 'bg-blue-200 text-blue-800'
  },
  'AI/ML': {
    skills: ['TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    color: 'bg-green-200 text-green-800'
  },
  'Sales & Marketing': {
    skills: ['Market Research', 'CRM', 'Digital Marketing', 'Analytics'],
    color: 'bg-yellow-200 text-yellow-800'
  },
  'UX/UI Design': {
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    color: 'bg-purple-200 text-purple-800'
  },
  'Project Management': {
    skills: ['Agile', 'Scrum', 'JIRA', 'Risk Management'],
    color: 'bg-red-200 text-red-800'
  },
  'Other': {
    skills: ['Data Analysis', 'Technical Writing', 'Public Speaking', 'Team Leadership'],
    color: 'bg-gray-200 text-gray-800'
  },
}

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredSkills = selectedCategory === 'All'
    ? Object.entries(skillsData).flatMap(([category, { skills, color }]) => 
        skills.map(skill => ({ skill, category, color }))
      )
    : skillsData[selectedCategory]?.skills.map(skill => ({ 
        skill, 
        category: selectedCategory, 
        color: skillsData[selectedCategory].color 
      })) || []

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="mb-8 w-64 mx-auto">
          <Select onValueChange={setSelectedCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All Skills</SelectItem>
              {Object.keys(skillsData).map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredSkills.map(({ skill, color }) => (
            <div key={skill} className={`p-4 rounded-lg shadow-md text-center ${color}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

