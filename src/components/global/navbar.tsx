import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside className="flex items-center gap-[2px]">
        <Image
          src="/Synco-logo.png"
          width={50}
          height={50}
          alt="Synco logo"
          className="shadow-sm"
        />
        <p className="text-2xl font-bold"> Synco </p>
      </aside>
      <nav className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 hidden md:block">
        <ul className="flex items-center gap-4 list-none">
          <li>
            <Link href="#">Products</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Clients</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
          <li>
            <Link href="#">Enterprise</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
