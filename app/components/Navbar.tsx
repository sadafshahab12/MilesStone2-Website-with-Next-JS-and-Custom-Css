"use client";
import React, { useState } from "react";
import "../globals.css";
import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";
import "animate.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <>
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <h1>Code & Connect</h1>
          </div>
          {/* web nav link  */}
          <div>
            <ul className={`navlinks ${isOpen ? "open" : ""}`}>
              <li onClick={closeMenu}>
                <Link href="/" className="link">
                  Home
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/about" className="link">
                  About
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/service" className="link">
                  Our Services
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/blog" className="link">
                  Blog
                </Link>
              </li>
              <li onClick={closeMenu}>
                <Link href="/contact" className="link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-Btn">
            <Button buttonText="Get Started" />
          </div>
          <div className="fa-bar" onClick={toggleMenu}>
            <Image
              src="/images/fabar.png"
              alt="nav-menu"
              className="nav-menu"
              width={500}
              height={500}
            />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
