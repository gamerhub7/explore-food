"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Card } from "@/components/ui/card";


gsap.registerPlugin(ScrollTrigger);

export interface SubCategory {
  id: number;
  title: string;
  image: string;
  video?:string
}

const allSubCategories: { [key: number]: SubCategory[] } = {
  1: [
    { id: 1, title: "Resorts", image: "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Dhabba", image: "https://plus.unsplash.com/premium_photo-1736895377220-bcafaa34fdbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
     {id:3, title: "cafe",image: "https://images.unsplash.com/photo-1559305616-3f99cd43e353?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZXxlbnwwfHwwfHx8MA%3D%3D",}
    // Add more subcategories
  ],
  2: [
    { id: 1, title: "Beach", image: "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Mountain ", image: "https://plus.unsplash.com/premium_photo-1736895377220-bcafaa34fdbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  
    // Add more subcategories
  ],
  3: [
    { id: 1, title: "Beachfront Resorts", image: "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Mountain Cabins", image: "https://plus.unsplash.com/premium_photo-1736895377220-bcafaa34fdbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  
    // Add more subcategories
  ],
  4: [
    { id: 1, title: "ghjf", image: "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Mountain Cabins", image: "https://plus.unsplash.com/premium_photo-1736895377220-bcafaa34fdbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  
    // Add more subcategories
  ],
  5: [
    { id: 1, title: "jmhxrtj", image: "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Mountain Cabins", image: "https://plus.unsplash.com/premium_photo-1736895377220-bcafaa34fdbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  
    // Add more subcategories
  ],
  6: [
    { id: 1, title: "hgvyjrd6", image: "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Mountain Cabins", image: "https://plus.unsplash.com/premium_photo-1736895377220-bcafaa34fdbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  
    // Add more subcategories
  ],
  7: [
    { id: 1, title: "Bjhvhv", image: "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: ".lnknl", image: "https://plus.unsplash.com/premium_photo-1736895377220-bcafaa34fdbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  
    // Add more subcategories
  ],
  8: [
    { id: 1, title: "Beachfront Resorts", image: "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Mountain Cabins", image: "https://plus.unsplash.com/premium_photo-1736895377220-bcafaa34fdbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  
    // Add more subcategories
  ],
  9: [
    { id: 1, title: "Beachfront Resorts", image: "https://images.unsplash.com/photo-1737562963380-3a7e45c0bf31?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, title: "Mountain Cabins", image: "https://plus.unsplash.com/premium_photo-1736895377220-bcafaa34fdbe?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  
    // Add more subcategories
  ],
 
};

export default function SubCategorySection({ categoryId }: { categoryId: number }) {
  const router = useRouter();
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const subCategories = allSubCategories[categoryId] || [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 100,
       
        opacity: 1,
        yoyo:true,
        duration: 0.8,
        stagger: 0.1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center+=100",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (subCategoryId: number) => {
    router.push(`/subcategories/subcategorytype/${subCategoryId}`);
  };

  return (
    <section ref={sectionRef} className="py-12 sm:py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mt-8 mb-8 sm:mb-12">
          Explore Our Sub-Categories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {subCategories.map((subCategory, index) => (
            <Card
              key={subCategory.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group cursor-pointer transform transition-opacity overflow-hidden duration-300 hover:scale-105"
              onClick={() => handleCardClick(subCategory.id)}
            >
              <div className="relative aspect-square rounded-t-lg w-full h-60">
                <img
                  src={subCategory.image || "/placeholder.svg"}
                  alt={subCategory.title}
                  className="object-cover w-full h-full group-hover:scale-150 transition-transform duration-300"
                />
                <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white  text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {subCategory.title}
    </div>
              </div>
              <div className="p-3 sm:p-2">
                <h3 className="font-serif text-center sm:text-lg">{subCategory.title}</h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
