'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Link from 'next/link';

export default function NowPage() {
    const boxRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(
            boxRef.current,
            { opacity: 0, scale: 0.5 },
            { opacity: 1, scale: 1, duration: 1.5 }
        );
    }, []);

    return (
        <section ref={boxRef} className="box space-y-8">
            <section>
                <h1 className="text-3xl font-bold mb-4">Now</h1>
                <p className="text-base">
                    This is a now page, and if you have your own site,
                    <Link href="https://nownownow.com/about">
                        you should make one, too.
                    </Link>
                </p>
                <p className='text-xs' >(Updated on October 1st, 2025)</p>
            </section>
            <section>
                <h1 className="text-3xl font-bold mb-4">Projects</h1>
                <p className="text-base">- Bulding an MLOps Platform at work.</p>
                <p className="text-base">- Building spendsense</p>
            </section>
            <section>
                <h1 className="text-3xl font-bold mb-4">Learning</h1>
                <p className="text-base">TypeScript, Go and Rust.</p>
            </section>
            <section>
                <h1 className="text-3xl font-bold mb-4">At</h1>
                <iframe
                    width="350"
                    height="250"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.45464324951173%2C12.911544553191519%2C77.74131774902345%2C13.050382373628993&amp;layer=mapnik"
                    style={{ border: "1px solid black" }}
                />
                <p className='text-xs'>
                    <Link href="https://www.openstreetmap.org/?#map=13/12.97729/77.59077">Bengaluru.</Link>
                </p>
            </section>
        </section>
    );
}