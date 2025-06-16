'use client';

import { Menu, X } from 'lucide-react';
import { useRef } from 'react';

type Props = {
  isOpen: boolean;
  toggle: () => void;
};

export default function NavButton({ isOpen, toggle }: Props) {
  const tl = useRef<HTMLDivElement | null>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = tl.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 1}px, ${y * 1}px)`;
  };

  const handleMouseLeave = () => {
    const btn = tl.current;
    if (btn) {
      btn.style.transform = 'translate(0, 0)';
    }
  };

  return (
    <>
      <div
        ref={tl}
        className=" fixed top-2 right-6 p-2 rounded-full z-[99] transition-all duration-500 ease-in-out cursor-pointer hover:p-2 hover:bg-orgcolor/35"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <button
          onClick={toggle}
          className=" p-2 rounded-full cursor-pointer text-orange-900 bg-orgcolor"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={33} strokeWidth={3} /> : <Menu size={33} strokeWidth={3} />}
        </button>
      </div>
    </>
  );
}
