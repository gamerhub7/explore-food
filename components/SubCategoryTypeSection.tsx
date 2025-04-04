"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card } from "@/components/ui/card"
import TypeDialogs from "./typedialogs"
import Dialogs from "./dialogs"
import { useRouter } from "next/navigation"

gsap.registerPlugin(ScrollTrigger)

// Define the type for the sub-category type object
export interface SubCategoryType {
  id: number
  title: string
  image: string
  video?: string
}

// Define the sub-category types array (sample data)
export const allSubCategoryTypes: { [key: number]: SubCategoryType[] } = {
  1: [
    // Restaurants category (for example)
    {
      id: 1,
      title: "Veg",
      video: "https://www.youtube.com/embed/epnrjlhOe7o?si=sVzL2DlKz473ppae",
      image:
        "https://plus.unsplash.com/premium_photo-1664551734578-fe47fea8cab8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnfGVufDB8fDB8fHww",
    },
    {
      id: 2,
      title: "Non-Veg",
      image: "https://images.unsplash.com/photo-1641873933980-fcff60026f50?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9uJTIwdmVnfGVufDB8fDB8fHww",
      video: "https://www.instagram.com/reel/DAxl1knsT5v/embed"
    },
    {
      id: 3,
      title: "Italian",
      image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbGlhbnxlbnwwfHwwfHx8MA%3D%3D",
      video: "https://www.instagram.com/reel/DAxl1knsT5v/embed"
    },
    {
      id: 4,
      title: "Chinese",
      image: "https://plus.unsplash.com/premium_photo-1674601033631-79eeffaac6f9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      video: "https://www.instagram.com/reel/DAxl1knsT5v/embed"
    },
  ],
  2: [
    // Beachfront Resorts category (for example)
    {
      id: 1,
      title: "sea",
      image: "https://plus.unsplash.com/premium_photo-1664551734578-fe47fea8cab8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnfGVufDB8fDB8fHww",
      video: ""
    },
    {
      id: 2,
      title: "ocean",
      image: "https://images.unsplash.com/photo-1641873933980-fcff60026f50?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9uJTIwdmVnfGVufDB8fDB8fHww",
      video: ""
    },
    {
      id: 3,
      title: "lake",
      image: "https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      video: ""
    },
    {
      id: 4,
      title: "river",
      image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZG9vcml8ZW58MHx8MHx8fDA%3D",
      video: ""
    },
  ],
}

export default function SubCategoryTypeSection({ subcategoryId }: { subcategoryId: number }) {
  const router = useRouter()
  const [selectedCard, setSelectedCard] = useState<SubCategoryType | null>(null)
  const [showReviews, setShowReviews] = useState(false)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const subCategoryTypes = allSubCategoryTypes[subcategoryId] || []

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

  const handleCardClick = (subCategoryType: number) => {
    router.push(`/subcategories/subcategorytype/finaltype/${subCategoryType}`)
  }

  return (
    <section ref={sectionRef} className="py-12 mt-10 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
           Sub-Category Types
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {subCategoryTypes.map((subCategoryType, index) => (
            <Card
              key={subCategoryType.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group cursor-pointer transform transition-opacity overflow-hidden duration-300 hover:scale-105"
              onClick={() => handleCardClick(subCategoryType.id)}
            >
              <div className="relative aspect-square rounded-t-lg w-full h-60">
                <img
                  src={subCategoryType.image || "/placeholder.svg"}
                  alt={subCategoryType.title}
                  className="object-cover w-full h-full group-hover:scale-150 transition-transform duration-300"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {subCategoryType.title}
              </div>
              </div>
              <div className="p-3 sm:p-2">
                <h3 className="font-serif text-center sm:text-lg">{subCategoryType.title}</h3>
              </div>
            </Card>
          ))}
        </div>

         <Dialogs
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
          showReviews={showReviews}
          setShowReviews={setShowReviews}
        />
      </div>
    </section>
  )
}

