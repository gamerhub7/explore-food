"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRefs.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div ref={(el) => (sectionRefs.current[0] = el)}>
          <h2 className="text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm">
            At ReferWithLove, we bring fresh, delicious meals straight to your door. Quality and flavor are our priorities.
          </p>
        </div>

        {/* Quick Links */}
        <div ref={(el) => (sectionRefs.current[1] = el)}>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>Menu</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div ref={(el) => (sectionRefs.current[2] = el)}>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="material-icons">phone</span>
              <a href="tel:+1234567890" className="hover:underline">+1 234 567 890</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons">email</span>
              <a href="mailto:support@foodiesdelight.com" className="hover:underline">support@foodiesdelight.com</a>
            </li>
            <li className="flex items-center gap-2">
              <span className="material-icons">You Can Find us here --</span>
             Mohali
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div ref={(el) => (sectionRefs.current[3] = el)}>
          <h2 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <form action="#" method="POST" className="flex flex-col gap-4">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 rounded bg-gray-800 border border-gray-700 text-sm"
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="bg-black text-sm py-4 mt-8">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
          <p>&copy; 2025 ReferWithLove. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
