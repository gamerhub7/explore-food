"use client";

import { useEffect, useState } from 'react';
import { Search, User, MapPin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import gsap from 'gsap';


// export default AnimatedText;
import { useRouter } from "next/navigation";

// Define the type for the category object
export interface Category {
  id: number;
  title: string;
  image: string;
  video?: string;
}

// Define the categories array
const categories: Category[] = [
  { id: 1, title: "Food", image: "..." },
  { id: 2, title: "Fine Dining", image: "..." },
  { id: 3, title: "Cafes", image: "..." },
  { id: 4, title: "Bars & Pubs", image: "..." },
  { id: 5, title: "Street Food", image: "..." },
  { id: 6, title: "Rooftop Venues", image: "..." },
  { id: 7, title: "Resorts", image: "..." },
  { id: 8, title: "Food Trucks", image: "..." },
  { id: 9, title: "Buffets", image: "..." },
  { id: 10, title: "Beach Dining", image: "..." },
  { id: 11, title: "Mountain Retreats", image: "..." },
  { id: 12, title: "Themed Restaurants", image: "..." },
  { id: 13, title: "Wellness Resorts", image: "..." },
  { id: 14, title: "Historic Venues", image: "..." },
];

export default function Navbar() {
  const router = useRouter();
  const [location, setLocation] = useState("Zirakpur, IN");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Function to handle navigation when a category is clicked
  const handleCategoryClick = (categoryId: number) => {
    router.push(`/subcategories/${categoryId}`);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
        <span className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          <span className="refer inline-block">
            Refer
          </span>
          <span className="with text-2xl sm:text-3xl font-semibold text-transparent bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 bg-clip-text">
            With
          </span>
          <span className="love inline-block">
            Love
          </span>
    </span>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-4">
          <div className="relative w-full rounded-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 " />
            <Input
              type="search"
              placeholder="Search restaurants, hotels..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Mobile Search Button */}
          <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Search className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="w-full p-4">
              <SheetHeader className="mb-4">
                <SheetTitle>Search</SheetTitle>
              </SheetHeader>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search restaurants, hotels..."
                  className="pl-10 w-full"
                  autoFocus
                />
              </div>
            </SheetContent>
          </Sheet>

          <Button variant="ghost" className="hidden sm:flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span className="hidden md:inline">{location}</span>
          </Button>

          {/* Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost">Categories</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              {categories.map((category: Category) => (
                <DropdownMenuItem
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className="cursor-pointer"
                >
                  {category.title}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Sign out</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <Button variant="ghost" className="w-full justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  {location}
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Explore
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Top Rated
                </Button>
                {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="w-full justify-start">
                      
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-full">
                    {categories.map((category: Category) => (
                      <DropdownMenuItem
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className="cursor-pointer"
                      >
                        {category.title}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu> */}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
