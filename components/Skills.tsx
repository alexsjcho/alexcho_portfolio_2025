'use client'

import { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// First, define the category type
type SkillCategory = 'Web Development' | 'AI/ML' | 'Sales & Marketing' | 'UX/UI Design' | 'Project Management' | 'Other';

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
    skills: ['React', 'Next.js', 'TypeScript', /* ... */],
    color: 'bg-blue-500'
  },
  'AI/ML': {
    skills: ['TensorFlow', 'PyTorch', /* ... */],
    color: 'bg-green-500'
  },
  'Sales & Marketing': {
    skills: ['Market Analysis', 'CRM', /* ... */],
    color: 'bg-yellow-500'
  },
  'UX/UI Design': {
    skills: ['Figma', 'Adobe XD', /* ... */],
    color: 'bg-purple-500'
  },
  'Project Management': {
    skills: ['Agile', 'Scrum', /* ... */],
    color: 'bg-red-500'
  },
  'Other': {
    skills: ['Problem Solving', 'Communication', /* ... */],
    color: 'bg-gray-500'
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
          {displayedSkills.map(({ skill, color }) => (
            <div key={skill} className={`p-4 rounded-lg shadow-md text-center ${color}`}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

