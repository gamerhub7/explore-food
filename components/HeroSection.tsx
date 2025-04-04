"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power4.out"
      });

      gsap.from(imageRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power4.out"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-background/95 py-12 sm:py-16"
    >
      <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div ref={textRef} className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Discover Amazing Places to Eat & Stay
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto md:mx-0">
            Explore the best restaurants, hotels, and experiences near you. From cozy cafes to luxury resorts,
            find your perfect destination.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Button size="lg" className="text-base sm:text-lg">
              Explore Now
            </Button>
            <Button size="lg" variant="outline" className="text-base sm:text-lg">
              View Top Rated
            </Button>
          </div>
        </div>
        <div ref={imageRef} className="flex-1 relative w-full max-w-xl md:max-w-none">
          <img
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
            alt="Food Experience"
            className="rounded-lg shadow-2xl w-full"
          />
        </div>
      </div>
    </section>
  );
}