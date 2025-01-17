'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  { id: 1, src: '/img/shenyang2024.jpg', alt: 'shenyang2024' },
  { id: 2, src: '/img/canada2022.jpg', alt: 'canada2022' },
  { id: 3, src: '/img/hawaii2022.jpg', alt: 'hawaii2022' },
  { id: 4, src: '/img/hawaii2022_1.jpg', alt: 'hawaii2022_1' },
  { id: 5, src: '/img/fostercity2019.jpg', alt: 'fostercity2019' },
  { id: 6, src: '/img/academyofart2019.jpg', alt: 'academyofart2019' },
  { id: 7, src: '/img/yosemite2019.jpg', alt: 'yosemite2019' },
  { id: 8, src: '/img/seapoint_sf_2019.jpg', alt: 'seapoint_sf_2019' }
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
              Hello World! My name is Alex Cho and the challenge of this entire portfolio is to build majority of the projects via Generative AI tools. 
            </p>
            <p className="text-lg mb-4">
              I've been a self-taught developer and this time around I am trying to learn AI related skills myself and apply them in the projects in this portfolio. 
            </p>
          
          </div>
        </div>
      </section>
    </div>
  )
}

