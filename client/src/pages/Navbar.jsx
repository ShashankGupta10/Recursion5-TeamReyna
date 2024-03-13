import React from 'react'
import {getUser} from '../auth.js'
const Navbar = () => {
   
      
      // Example usage to get user on another page (e.g., profile.js)
      const loggedInUser = getUser();

  return (
    <div>    
    <div className="bg-gradient-to-r from-[#020D41] to-[#2e2885] ">
      <div className="flex flex-col h-35  ">
        <header className="px-4 lg:px-6 h-14 flex items-center">
    <a className="flex items-center justify-center" href="#">
      <img className="h-10 w-27" src="logo_white.svg" alt="" />
      <span className="sr-only text-white">WanderLust</span>
    </a>
    
    
    {/* New navigation for signed-in user */}
    {localStorage.getItem('email') ? (
      <nav className=" text-white ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Profile
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Sign out
        </a>
      </nav>
    ) : (
        <nav className="text-white ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Home
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          About
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
          Locations
        </a>
        <a className="text-sm font-medium hover:underline underline-offset-4" href="/signup">
          sign up
        </a>
      </nav>
    )}
  </header></div></div></div>
  )
}

export default Navbar