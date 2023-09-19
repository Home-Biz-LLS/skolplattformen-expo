import React from 'react';
import Link from 'next/link';

const NavLinks = () => {
  return (
    <ul className="flex flex-col text-xl text-gray-800 dark:text-white md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8 md:text-base">
      <li>
        <Link href={'/'}>Hem</Link>
      </li>
      <li>
        <Link href={'/'}>Aktuellt</Link>
      </li>
      <li>
        <Link href={'/'}>Funktioner</Link>
      </li>
      <li>
        <Link href={'/'}>Screenshots</Link>
      </li>
      <li>
        <Link href={'/'}>Vad kostar det?</Link>
      </li>
    </ul>
  );
};

export default NavLinks;
