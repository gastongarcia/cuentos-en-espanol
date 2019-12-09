import React, { useState } from "react"
import { Link } from "gatsby"

const Navigation = ({}) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between flex-wrap bg-white p-6 border-b ">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link to="/">Inicio</Link>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-800 border-teal-400 hover:text-black hover:border-black"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="lg:flex-grow md:items-ce  nter lg:items-center ml-8">
          <Link
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-800 text-lg hover:text-black hover:underline mr-5"
            activeClassName="underline"
          >
            Inicio
          </Link>
          <Link
            to="/listado"
            className="block mt-4 lg:inline-block lg:mt-0 text-teal-800 text-lg hover:text-black hover:underline mr-5"
            activeClassName="underline"
          >
            Los Cuentos
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
