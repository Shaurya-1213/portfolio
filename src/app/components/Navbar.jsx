'use client'
import React from 'react'

const Navbar = () => {
  return (
    <div><div className="bg-white lg:pb-12">
    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
      <header className="flex items-center justify-between py-4 md:py-8">
        {/* logo - start */}
        <a
          href="/"
          className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
          aria-label="logo"
        >
          <svg
            width={95}
            height={94}
            viewBox="0 0 95 94"
            className="h-auto w-6 text-indigo-500"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M96 0V47L48 94H0V47L48 0H96Z" />
          </svg>
          Flowrift
        </a>
        {/* logo - end */}
        {/* nav - start */}
        <nav className="hidden gap-12 lg:flex">
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Home
          </a>
          <a
            href="#"
            className="inline-flex items-center text-gray-600 gap-1 text-lg font-semibold hover:text-indigo-500 active:text-indigo-700"
          >
            Skills
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            About
          </a>
          <a
            href="#"
            className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
          >
            Contact
          </a>
        </nav>
        {/* nav - end */}
        {/* buttons - start */}
        <div className="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start">
          <a
            href="#"
            className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
          >
            Login
          </a>
        </div>
        {/* buttons - end */}
      </header>
    </div>
  </div>
  </div>
  )
}

export default Navbar