'use client';

import { gsap } from 'gsap';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

type Props = {
  isOpen: boolean;
};

export default function NavMenu({ isOpen }: Props) {
  const tl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!tl.current) return;

    if (isOpen) {
      tl.current.style.display = 'block'; // pastikan tampil dulu
      gsap.fromTo(
        tl.current,
        {
          x: '100%',
          clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        },
        {
          x: 0,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 0.75,
          ease: 'power3.inOut',
        }
      );
    } else {
      gsap.to(tl.current, {
        x: '100%',
        clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)',
        duration: 0.75,
        ease: 'power3.inOut',
        onComplete: () => {
          if (tl.current) tl.current.style.display = 'none';
        },
      });
    }
  }, [isOpen]);

  return (
    <aside
      ref={tl}
      className={`fixed top-0 right-0 h-full w-[353px] px-8 py-24 z-50 bg-white shadow-lg ${
        isOpen ? 'block' : 'hidden'
      }
  `}
    >
      <div className=" py-4 my-4 border-b-2">
        <h1 className=" text-4xl font-bold">Navigation</h1>
      </div>
      <nav className="flex flex-col gap-6">
        <Link
          href="#"
          className="text-lg font-medium hover:text-orange-900 transition-colors duration-200 "
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-lg font-medium hover:text-orange-900 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          href="#projects"
          className="text-lg font-medium hover:text-orange-900 transition-colors duration-200"
        >
          Projects
        </Link>
        <Link
          href="#skills"
          className="text-lg font-medium hover:text-orange-900 transition-colors duration-200"
        >
          Skills
        </Link>
        <Link
          href="#contact"
          className="text-lg font-medium hover:text-orange-900 transition-colors duration-200"
        >
          Contact
        </Link>
      </nav>
    </aside>
  );
}
