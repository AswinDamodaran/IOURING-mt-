"use client";

import React, { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-background border-b-2 border-border text-text">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">

        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/globe.svg" className="h-8" alt="test Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-button">
            Test
          </span>
        </a>

        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-text rounded-full md:hidden hover:bg-subbg focus:outline-none focus:ring-2 focus:ring-border"
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

        <div className="hidden md:flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full"
            src="/You.svg"
            alt="profile image"
          />
          <div className="font-medium dark:text-text">
            <div className="font-bold">Jese Leos</div>
            <div className="cursor-pointer font-semibold">Logout</div>
          </div>
        </div>
      </div>

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
              <div className="font-semibold">Jese Leos</div>
              <div className="cursor-pointer text-xs">Logout</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
