'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  { id: 1, src: 'https://drive.google.com/file/d/1L_-daGdrO1tyvkFxTfdo-bYWKlKbYdin/view?usp=drive_link', alt: 'shenyang2024' },
  { id: 2, src: 'https://drive.google.com/file/d/1vmZuWD9HmzSKOTyjzVnI_fO_i8c3okc8/view?usp=drive_link', alt: 'canada2022' },
  { id: 3, src: 'https://drive.google.com/file/d/123JvOvXwvLBp5U4X0GjnEMo9M4BWrgBj/view?usp=drive_link', alt: 'hawaii2022' },
  { id: 4, src: 'https://drive.google.com/file/d/1YZgWAW_MBmPTu24BMd9RXfD-MY0w3Gbo/view?usp=drive_link', alt: 'hawaii2022_1' },
  { id: 5, src: 'https://drive.google.com/file/d/19Z9EKh7A8GMF7afgpDmz7zHbSU08zByO/view?usp=drive_link', alt: 'fostercity2019' },
  { id: 6, src: 'https://drive.google.com/file/d/12h15A5hgXO-ThH-WKCP2IwarblH6jorK/view?usp=drive_link', alt: 'academyofart2019' },
  { id: 7, src: 'https://drive.google.com/file/d/1rMqFxUnrHWWTp97JGXeprMRuPCS55Whs/view?usp=drive_link', alt: 'yosemite2019' },
  { id: 8, src: 'https://drive.google.com/file/d/1q4lqiDeV5iW7PaKERcZoaJSquHLgEMHA/view?usp=drive_link', alt: 'seapoint_sf_2019' }
]

export default function About() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="max-w-6xl mx-auto">
      <section className="py-20 px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col items-center">
          <div className="w-full relative h-[400px] md:h-[600px] mb-8">
            {images.map((image, index) => (
              <Image
                key={image.id}
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className={`object-cover rounded-lg transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={prevImage}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                aria-label="Previous image"
              >
                &#10094;
              </button>
              <button
                onClick={nextImage}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
                aria-label="Next image"
              >
                &#10095;
              </button>
            </div>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {images.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentImage ? 'bg-white' : 'bg-gray-400'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="w-full max-w-3xl text-center">
            <p className="text-lg mb-4">
              Hi, I'm [Your Name], an AI Product Manager with a passion for creating innovative solutions at the intersection of artificial intelligence and user-centric design.
            </p>
            <p className="text-lg mb-4">
              With [X] years of experience in the tech industry, I've successfully led cross-functional teams to deliver cutting-edge AI products that solve real-world problems and delight users.
            </p>
            <p className="text-lg">
              My expertise spans from conceptualizing AI-driven features to managing the entire product lifecycle, always with a focus on ethical AI practices and measurable business impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

