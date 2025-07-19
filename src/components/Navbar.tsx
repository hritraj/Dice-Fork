'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut, loading } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-orange-100' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Dice & Fork Logo"
                  width={50}
                  height={50}
                  className="rounded-xl transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">🎲</span>
                </div>
              </div>
              <div>
                <span className="text-2xl font-bold text-gradient">Dice & Fork</span>
                <p className="text-xs text-gray-600 -mt-1">Café • Games • Community</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/menu" className="nav-link text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Menu
            </Link>
            <Link href="/games" className="nav-link text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Games
            </Link>
            <Link href="/events" className="nav-link text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Events
            </Link>
            <Link href="/about" className="nav-link text-gray-700 hover:text-green-600 transition-colors font-medium">
              About
            </Link>
            <Link href="/contact" className="nav-link text-gray-700 hover:text-orange-600 transition-colors font-medium">
              Contact
            </Link>
            
            {/* Book Table Button */}
            <Link 
              href="/book" 
              className="btn-primary hidden lg:inline-flex items-center"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Table
            </Link>
            
            {!loading && (
              user ? (
                <div className="flex items-center space-x-4">
                  <div className="text-sm text-gray-600">
                    Welcome, <span className="font-semibold">{user.user_metadata?.name || user.email}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="text-red-600 hover:text-red-700 font-medium transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <Link 
                  href="/join" 
                  className="btn-outline"
                >
                  Join Us
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link 
              href="/book" 
              className="btn-primary text-sm px-4 py-2"
            >
              Book
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-orange-600 focus:outline-none transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-xl shadow-lg">
              <Link 
                href="/" 
                className="block px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                🏠 Home
              </Link>
              <Link 
                href="/menu" 
                className="block px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                🍽️ Menu
              </Link>
              <Link 
                href="/games" 
                className="block px-3 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                🎲 Games
              </Link>
              <Link 
                href="/events" 
                className="block px-3 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                🎉 Events
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                ℹ️ About
              </Link>
              <Link 
                href="/contact" 
                className="block px-3 py-3 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-lg transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                📞 Contact
              </Link>
              
              {!loading && (
                user ? (
                  <div className="px-3 py-3 border-t border-gray-200 mt-2">
                    <div className="text-sm text-gray-600 mb-3">
                      Welcome, <span className="font-semibold">{user.user_metadata?.name || user.email}</span>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left text-red-600 hover:text-red-700 font-medium"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link 
                    href="/join" 
                    className="block px-3 py-3 mt-2 btn-outline text-center rounded-lg"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join Our Community
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 