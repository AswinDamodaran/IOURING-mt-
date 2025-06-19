"use client";

import React, { useState } from "react";
import Link from "next/link";
import Darkmode from "../darkmodebtn/Darkmode"; 

function Header({ username }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background border-b-2 border-border text-text">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/globe.svg" className="h-8" alt="test Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-text">
            Test
          </span>
        </a>

        {/* Mobile view: Darkmode + Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Darkmode />
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text rounded-full hover:bg-subbg focus:outline-none focus:ring-2 focus:ring-border"
            aria-controls="profile-box"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open profile</span>
            <img
              src="/You.svg"
              alt="profile icon"
              className="rounded-full w-full h-full object-cover"
            />
          </button>
        </div>

        {/* Desktop view */}
        <div className="hidden md:flex items-center gap-4">
          <Darkmode />
          <img
            className="w-10 h-10 rounded-full"
            src="/You.svg"
            alt="profile image"
          />
          <div className="font-medium dark:text-text">
            <div className="font-extrabold">{username}</div>
            <Link href="/" className="cursor-pointer font-semibold">
              Logout
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          id="profile-box"
          className="absolute right-4 top-16 z-50 p-2 border border-border rounded-lg bg-subbg text-text shadow-md w-fit"
        >
          <div className="flex items-center gap-3">
            <img
              className="w-8 h-8 rounded-full"
              src="/You.svg"
              alt="profile image"
            />
            <div className="text-sm">
              <div className="font-semibold">{username}</div>
              <Link href="/" className="cursor-pointer font-extralight">
                Logout
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
