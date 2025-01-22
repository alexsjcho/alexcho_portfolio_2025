'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// First, define the category type
type SkillCategory = 'Web Development' | 'AI/ML' | 'Sales/Customer Success/Solutions' | 'UX/UI Design' | 'Product Management' | 'Product Marketing'

// Define the structure of skill data
interface SkillData {
  skills: string[];
  color: string;
}

// Define the type for skillsData
type SkillsDataType = {
  [K in SkillCategory]: SkillData;
}

// Define your skillsData with the correct type
const skillsData: SkillsDataType = {
  'Web Development': {
    skills: ['React', 'Next.js', 'JavaScript', 'HTML', 'CSS', 'RESTful API', 'SQL', 'NoSQL', 'CI/CD' /* ... */],
    color: 'bg-blue-500'
  },
  'AI/ML': {
    skills: ['Python', 'PyTorch', 'Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning' /* ... */],
    color: 'bg-green-500'
  },
  'Sales/Customer Success/Solutions': {
    skills: ['Qualification Frameworks', 'Prospecting & Lead Generation', 'Sales Process', 'Retention & Renewal', 'Account Management' , 'Solution Proof-of-Concept' /* ... */],
    color: 'bg-yellow-500'
  },
  'UX/UI Design': {
    skills: ['Figma UI Design', 'Wireframe & Prototype', 'User Research & Analysis', 'Information Architecture' /* ... */],
    color: 'bg-purple-500'
  },
  'Product Management': {
    skills: ['Agile/Scrum', 'Requirement Docs', 'Decision Making/Prioritization', 'Product Roadmap & Strategy' /* ... */],
    color: 'bg-red-500'
  },
  'Product Marketing': {
    skills: ['Messaging & Positioning', 'Go-to-Market Strategy', 'Market Competitive Analysis', 'Content Marketing', 'Competitive Battlecards' /* ... */],
    color: 'bg-teal-500'
  }

};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory | 'All'>('All');

  const displayedSkills = selectedCategory === 'All'
    ? Object.entries(skillsData).flatMap(([category, { skills, color }]) => 
        skills.map(skill => ({ skill, category, color }))
      )
    : skillsData[selectedCategory as SkillCategory]?.skills.map(skill => ({ 
        skill, 
        category: selectedCategory, 
        color: skillsData[selectedCategory as SkillCategory].color 
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
          {displayedSkills.map(({ skill, category, color }) => (
            <div key={skill} className={`relative p-4 rounded-lg shadow-md text-center ${color}`}>
              {selectedCategory === 'All' && (
                <span className="absolute -top-2 left-2 px-2 py-0.5 bg-gray-800 text-white text-xs rounded-full">
                  {category}
                </span>
              )}
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

