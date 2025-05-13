"use client"

import { useState } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image"
import { FadeIn } from "./fade-in"

interface ProjectCardProps {
  title: string
  description: string
  imageSrc: string
}

export function ProjectCard({ title, description, imageSrc }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <FadeIn>
      <div
        className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tabIndex={0}
        role="article"
        aria-label={`Project: ${title}`}
      >
        <div className="aspect-[3/2] relative">
          <Image
            src={imageError ? "/placeholder.svg" : imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        </div>
        <div
          className={`absolute inset-0 bg-black/70 flex items-center justify-center transition-all duration-300 ${
            isHovered 
              ? "opacity-100 backdrop-blur-sm" 
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="text-white p-6 max-w-prose">
            <h3 className="text-2xl font-semibold mb-3">{title}</h3>
            <p className="text-sm leading-relaxed text-gray-200">
              {description}
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}