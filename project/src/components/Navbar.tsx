import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900 shadow-lg' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="px-4 md:px-16 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <h1 className="text-red-600 text-3xl font-bold transition-transform hover:scale-110">NETFLIX</h1>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Home</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">TV Shows</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">Movies</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">New & Popular</a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">My List</a>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-white hover:text-gray-300 transition-colors">
            <Search className="w-6 h-6" />
          </button>
          <button className="text-white hover:text-gray-300 transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 cursor-pointer group">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-8 h-8 rounded transition-transform group-hover:scale-110"
            />
            <ChevronDown className="w-4 h-4 text-white transition-transform group-hover:rotate-180" />
          </div>
        </div>
      </div>
    </nav>
  );
}