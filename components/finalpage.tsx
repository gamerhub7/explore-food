"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Card, CardHeader } from "@/components/ui/card"
import TypeDialogs from "./typedialogs"
import Dialogs from "./dialogs"
import { Heart } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger)

// Define the type for the sub-category type object
export interface FinalPage {
  id: number
  title: string
  image: string
  video?: string
}

// Define the sub-category types array (sample data)
export const allFinalPage: { [key: number]: FinalPage[] } = {
  1: [
    //veg
    {
      id: 1,
      title: "WaveCrest Resort ",
      video: "https://www.instagram.com/reel/DCvh3auT0Av/embed",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/ab/af/44/room-sunbird.jpg?w=700&h=-1&s=1",
    },
    {
      id: 2,
      title: " PalmBreeze Paradise",
      image: "https://images.unsplash.com/photo-1641873933980-fcff60026f50?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9uJTIwdmVnfGVufDB8fDB8fHww",
      video: "https://www.instagram.com/reel/DAxl1knsT5v/embed"
    },
    {
      id: 3,
      title: "Coastal Luxe",
      image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aXRhbGlhbnxlbnwwfHwwfHx8MA%3D%3D",
      video: "https://www.instagram.com/reel/DAxl1knsT5v/embed"
    },
    {
      id: 4,
      title: "The Retreat Oasis",
      image: "https://plus.unsplash.com/premium_photo-1674601033631-79eeffaac6f9?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbmVzZSUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      video: "https://www.instagram.com/reel/DAxl1knsT5v/embed"
    },
  ],
  2: [
    // Beachfront Resorts category (for example)
    {
      id: 1,
      title: "house ",
      image: "https://plus.unsplash.com/premium_photo-1664551734578-fe47fea8cab8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVnfGVufDB8fDB8fHww",
      video: ""
    },
    {
      id: 2,
      title: "home",
      image: "https://images.unsplash.com/photo-1641873933980-fcff60026f50?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bm9uJTIwdmVnfGVufDB8fDB8fHww",
      video: ""
    },
    {
      id: 3,
      title: "ram",
      image: "https://images.unsplash.com/photo-1542367592-8849eb950fd8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D",
      video: ""
    },
    {
      id: 4,
      title: "syam",
      image: "https://images.unsplash.com/photo-1617692855027-33b14f061079?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZG9vcml8ZW58MHx8MHx8fDA%3D",
      video: ""
    },
  ],
}

export default function FinalPage({ finalpageId }: { finalpageId: number }) {
  const [selectedCard, setSelectedCard] = useState<FinalPage | null>(null)
  const [showReviews, setShowReviews] = useState(false)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement | null>(null)

  const finalpage = allFinalPage[finalpageId] || []

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

  const handleCardClick = (finalpage: FinalPage) => {
    setSelectedCard(finalpage)
  }

  return (
    <section ref={sectionRef} className="py-12 mt-10 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12">
           Final Page
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {finalpage.map((finalpage, index) => (
            <Card
              key={finalpage.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group cursor-pointer transform transition-opacity overflow-hidden duration-300 hover:scale-105"
              onClick={() => handleCardClick(finalpage)}
            >
              <div className="relative aspect-square rounded-t-lg w-full h-60">
                <img
                  src={finalpage.image || "/placeholder.svg"}
                  alt={finalpage.title}
                  className="object-cover w-full h-full group-hover:scale-150 transition-transform duration-300"
                />
                {/* Circle with heart rating */}
    <div className="absolute top-2 right-2 flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white text-xs font-bold">
      {4.8}/10
    </div>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {finalpage.title}
    </div>
              </div>
              <div className="p-3 sm:p-2">
                <h3 className="font-serif text-center sm:text-lg">{finalpage.title}</h3>
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

