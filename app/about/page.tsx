'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

export default function AboutPage() {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1.5 }
    );
  }, []);

  return <div ref={boxRef} className="box">
    <div>
      <span className="text-3xl font-bold">Contact</span>
      <div className="mt-6 space-y-4">
        <div>
          <span className="font-semibold">Email:</span>
          <Link href="http://scr.im/tejashwinn" className="ml-2 text-blue-600 underline">t...@g...l.com</Link>
        </div>
        <div>
          <span className="font-semibold">GitHub:</span>
          <Link href="https://github.com/tejashwinn" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 underline">tejashwinn</Link>
        </div>
        <div>
          <span className="font-semibold">LinkedIn:</span>
          <Link href="https://www.linkedin.com/in/tejashwin" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-600 underline">tejashwin</Link>
        </div>
      </div>
    </div>
  </div>;
}