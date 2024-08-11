import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    setIsLoggedIn(!!userId);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userId');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-black to-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/beach.png" alt="beach"/>
          <p className="text-2xl font-bold text-white tracking-wider hover:text-gray-300 transition duration-300 px-3">
            Travel Planner
          </p>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                {isLoggedIn && (
                  <>
                   <Link to="/destinations" className="text-white hover:bg-indigo-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Destinations</Link>
                  <Link to="/itineraries" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">Itineraries</Link>
                  <Link to="/bookings" className="text-white hover:bg-indigo-500 px-3 py-2 rounded-md text-sm font-medium">Bookings</Link>
                  </>
                 
                  
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              {isLoggedIn ? (
                <button onClick={handleLogout} className="text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-md text-sm font-medium">Logout</button>
              ) : (
                <>
                  <Link to="/login" className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
                  <Link to="/register" className="text-white bg-gray-700 hover:bg-gray-800 ml-2 px-3 py-2 rounded-md text-sm font-medium">Register</Link>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            {isLoggedIn && (
              <Link to="/dashboard" className="text-white hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
            )}
            {isLoggedIn ? (
              <button onClick={handleLogout} className="text-white bg-indigo-600 hover:bg-indigo-700 block w-full text-left px-3 py-2 rounded-md text-base font-medium">Logout</button>
            ) : (
              <>
                <Link to="/login" className="text-white hover:bg-indigo-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Login</Link>
                <Link to="/register" className="text-white bg-indigo-600 hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;