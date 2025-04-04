"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import { useRouter } from "next/navigation"

gsap.registerPlugin(ScrollTrigger)

// Define the type for the category object
export interface Category {
  id: number
  title: string
  image: string
  video?: string
}

// Define the categories array
const categories: Category[] = [
  {
    id: 1,
    title: "Food",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Fine Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Cafes",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Bars & Pubs",
    image: "https://images.unsplash.com/photo-1538488881038-e252a119ace7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    title: "Street Food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    title: "Rooftop Venues",
    image:
      "https://images.unsplash.com/photo-1535302803037-f86237d9c104?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 7,
    title: "Resorts",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    title: "Food Trucks",
    image: "https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    title: "Buffets",
    image: "https://images.unsplash.com/photo-1574936145840-28808d77a0b6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    title: "Beach Dining",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    title: "Mountain Retreats",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    title: "Themed Restaurants",
    image:
      "https://images.unsplash.com/photo-1610538625499-635bf13427b4?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 13,
    title: "Wellness Resorts",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 14,
    title: "Historic Venues",
    image: "https://images.unsplash.com/photo-1582653291997-079a1c04e5a1?auto=format&fit=crop&w=800&q=80",
  },
]

export default function ChooseSection() {
  const router = useRouter()
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 100,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardClick = (category: Category) => {
    router.push(`/subcategories/${category.id}`)
  }

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">Choose Your Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <Card
              key={category.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group cursor-pointer transform transition-opacity overflow-hidden duration-300 hover:scale-105"
              onClick={() => handleCardClick(category)}
            >
              <div className="relative aspect-square rounded-t-lg w-full h-60">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.title}
                  className="object-fit w-full h-full group-hover:scale-150 transition-transform duration-300"
                />
                
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {category.title}
              </div>
              </div>
              <div className="p-3 sm:p-2">
                <h3 className="font-serif text-center sm:text-lg">{category.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

