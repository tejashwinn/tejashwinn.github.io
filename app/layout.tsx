'use client'

import './globals.css';
import { ReactNode, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link'


export default function RootLayout({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1 });
    }
  }, []);

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 font-sans">
        <div ref={ref} className="max-w-3xl mx-auto px-4">
          <header className="flex justify-between items-center py-4">
            <span></span>
            <nav className="space-x-4">
              <Link href="/home" className="hover:text-blue-600">Home</Link>
              <Link href="/blog" className="hover:text-blue-600">Blog</Link>
              <Link href="/about" className="hover:text-blue-600">About</Link>
              <Link href="/contact" className="hover:text-blue-600">Contact</Link>
              <Link href="/now" className="hover:text-blue-600">Now</Link>
            </nav>
          </header>
          <main className="mt-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
