import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation()

  // যদি home page ("/") হয়, তাহলে transparent navbar
  const isHome = location.pathname === "/"

  const Links = <>
    <li><NavLink to={`/`}>Home</NavLink></li>
    <li><NavLink to={`/Statistics`}>Statistics</NavLink></li>
    <li><NavLink to={`/Dashboard`}>Dashboard</NavLink></li>
  </>

  return (
    <div>
      <div
        className={`navbar fixed top-0 left-0 w-full z-10 
          ${isHome ? "bg-transparent text-white" : "bg-base-100 shadow-sm text-black"}
        `}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn mr-3">Card</a>
          <a className="btn">wishlist</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
