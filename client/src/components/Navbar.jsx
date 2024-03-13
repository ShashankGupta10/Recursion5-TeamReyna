import React from 'react';
import { getUser } from '../auth.js';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const loggedInUser = getUser();

  const handleSignOut = () => {
    localStorage.clear();
    navigate('/');
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-[#020D41] to-[#2e2885] ">
        <div className="flex flex-col h-35">
          <header className="px-4 lg:px-6 h-14 flex items-center">
            <a className="flex items-center justify-center" href="/">
              <img className="h-10 w-16" src="logo_white.svg" alt="" />
              <span className="sr-only text-white">WanderLust</span>
            </a>

            {localStorage.getItem('email') ? (
              <nav className="text-white ml-auto flex gap-4 sm:gap-6">
                <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
                  Profile
                </a>

                <a className="text-sm font-medium hover:underline underline-offset-4" href="/chat">
                  Chat
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
                  Pricing
                </a>
                <button className="text-sm font-medium hover:underline underline-offset-4"  onClick={handleSignOut}>
                  Sign out
                </button>
              </nav>
            ) : (
              <nav className="text-white ml-auto flex gap-4 sm:gap-6">
                <a className="text-sm font-medium hover:underline underline-offset-4" href="/">
                  Home
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
                  About
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
                  Locations
                </a>
                <a className="text-sm font-medium hover:underline underline-offset-4" href="/signup">
                  Sign In
                </a>
              </nav>
            )}
          </header>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
