'use client';

import { useState } from 'react';
import NavButton from './navButton';
import NavMenu from './navMenu';
import NavHome from './navHome';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className=" px-12 py-6.5">
        <NavHome />
        <NavButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        <NavMenu isOpen={isOpen} />
      </nav>
    </>
  );
}
