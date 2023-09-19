import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import headerLogo from '../assets/img/logo.png';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between max-w-6xl px-5 py-4 mx-auto md:px-2">
        <Link href={'/'}>
          {/* Visible on >=768px screen width */}
          <Image
            className="hidden md:block"
            src={headerLogo}
            alt="Skolplattformen"
            height={96}
            width={96}
          />
          {/* Visible on < 768px screen width */}
          <Image
            className="md:hidden"
            src={headerLogo}
            alt="Skolplattformen"
            height={48}
            width={48}
          />
        </Link>
        <nav className="hidden md:block">
          <NavLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
