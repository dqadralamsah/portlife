'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import img1 from '@/../../public/img/selfimg.png';

export default function HeroSection() {
  const txtHer = useRef<HTMLDivElement | null>(null);
  const imgHer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (txtHer.current) {
      gsap.from('.txtHerSec', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 2,
        ease: 'power3.out',
      });
    }

    if (imgHer.current) {
      gsap.from('.imgHerSec', {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 2.5,
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <>
      <section className="relative w-full heroSection">
        <div ref={txtHer} className=" txtHerSec relative text-center text-9xl font-bold  z-0">
          <h1 className=" overflow-hidden">DICKY</h1>
          <h1 className=" overflow-hidden">QADR</h1>
          <h1 className=" overflow-hidden">ALAMSAH</h1>
        </div>
        <div
          ref={imgHer}
          className=" imgHerSec absolute top-20 left-0 right-0 flex items-center justify-center z-10"
        >
          <Image src={img1} width={450} alt="img1" className="pointer-events-none" />
        </div>
        <div className=" flex items-center justify-between h-[363px] p-12">
          <h1 className=" text-9xl text-orgcolor font-bold">SOO</h1>
          <h1 className=" text-9xl text-orgcolor font-bold">HAY</h1>
        </div>
      </section>
    </>
  );
}
