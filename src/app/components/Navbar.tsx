import Link from "next/link";
import React from "react";

interface NavbarProps {
  fontFamily: string;
}

const Navbar: React.FC<NavbarProps> = ({ fontFamily }) => {
  return (
    <>
      <div className={`${fontFamily} nav-container`}>
        <ul className="nav-links">
          <li className="link">
            <Link href="#">Work</Link>
          </li>
          <li className="link">
            <Link href="#">Blog</Link>
          </li>
          <li className="link">
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
