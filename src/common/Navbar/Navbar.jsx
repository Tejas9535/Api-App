/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Switcher from "../Switcher/Switcher";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => setToggle(!toggle);
  const switchTheme = () => setIsDark(!isDark);

  return (
    <div className="h-[80px] z-10  bg-zinc-200 dark:bg-gray-900 dark:text-gray-900 drop-shadow-md">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold dark:text-cyan-50 mr-4 sm:text-4xl">
            Navbar
          </h1>
          <button
            className="md:hidden border-none bg-transparent text-black mr-4"
            onClick={switchTheme}
          >
            <Switcher />
          </button>
          <ul className="hidden md:flex">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/memes">Memes</Link>
            </li>
            <li>
              <Link to="/anime">Anime</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button
            className="border-none bg-transparent text-black mr-4"
            onClick={switchTheme}
          >
            <Switcher />
          </button>
          <button className="border-none bg-transparent text-black mr-4">
            sign Up
          </button>
          <button className="px-8 py-3 dark:bg-cyan-50 dark:text-gray-900">
            sign In
          </button>
        </div>
        <div
          className="md:hidden"
          onClick={handleClick}
          onKeyUp
          role="button"
          tabIndex={0}
        >
          {!toggle ? (
            <MenuIcon className="w-7 dark:bg-cyan-50" />
          ) : (
            <XIcon className="w-7 dark:bg-cyan-50" />
          )}
        </div>
      </div>
      <ul className={!toggle ? "hidden" : "bg-zinc-200 w-full px-8 "}>
        <li className="border-b-2 border-zinc-300 dark:border-gray-900 dark:text-gray-900 w-full">
          <Link to="/">Home</Link>
        </li>
        <li className="border-b-2 border-zinc-300 dark:border-gray-900 dark:text-gray-900 w-full">
          <Link to="/memes">Memes</Link>
        </li>
        <li className="border-b-2 border-zinc-300 dark:border-gray-900 dark:text-gray-900 w-full">
          <Link to="/anime">Anime</Link>
        </li>
        <li className="border-b-2 border-zinc-300 dark:border-gray-900 dark:text-gray-900 w-full">
          <Link to="/">About</Link>
        </li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent dark:text-gray-900 text-indigo-600 px-8 py-3 mb-4">
            sign Up
          </button>
          <button className="px-8 py-3 dark:bg-gray-900 dark:text-cyan-50">
            sign In
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
