'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, signOut, loading } = useAuth();

  // Handle scroll effect
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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/about', label: 'About', icon: 'ℹ️' },
    { href: '/events', label: 'Events', icon: '📅' },
    { href: '/games', label: 'Games', icon: '🎲' },
    { href: '/contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200/20' 
        : 'bg-white/90 backdrop-blur-md shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center">
            <Link href="/" className="group flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Dice & Fork Logo"
                  width={48}
                  height={48}
                  className="rounded-xl shadow-md ring-2 ring-purple-100 group-hover:ring-purple-300 transition-all duration-300"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-black text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                  Dice & Fork
                </span>
                <div className="text-xs text-gray-500 font-medium tracking-wide">
                  BOARD GAME SOCIAL CLUB
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative px-4 py-2 rounded-xl text-gray-700 hover:text-purple-600 transition-all duration-300 font-medium"
              >
                <span className="flex items-center gap-2">
                  <span className="text-sm opacity-75 group-hover:opacity-100 transition-opacity">
                    {link.icon}
                  </span>
                  {link.label}
                </span>
                <div className="absolute inset-0 bg-purple-50 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
              </Link>
            ))}
          </div>

          {/* User Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {!loading && (
              user ? (
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      Welcome back!
                    </div>
                    <div className="text-xs text-gray-500 truncate max-w-32">
                      {user.user_metadata?.name || user.email}
                    </div>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="group bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 px-4 py-2 rounded-xl font-medium transition-all duration-300 border border-red-200 hover:border-red-300"
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </span>
                  </button>
                </div>
              ) : (
                <Link 
                  href="/join" 
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Join Club
                  </span>
                </Link>
              )
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            {!loading && user && (
              <div className="text-right">
                <div className="text-xs text-gray-500">
                  {user.user_metadata?.name || user.email?.split('@')[0]}
                </div>
              </div>
            )}
            <button
              onClick={toggleMenu}
              className="group p-2 rounded-xl text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 pb-6' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200/50 mt-4 overflow-hidden">
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link, index) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="group flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  <svg className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              ))}
              
              <div className="border-t border-gray-200 my-4"></div>
              
              {!loading && (
                user ? (
                  <div className="space-y-3">
                    <div className="px-4 py-2 bg-purple-50 rounded-xl">
                      <div className="text-sm font-medium text-gray-900 mb-1">
                        Signed in as
                      </div>
                      <div className="text-xs text-purple-600 font-medium">
                        {user.user_metadata?.name || user.email}
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-3 px-4 py-3 bg-red-50 hover:bg-red-100 text-red-600 hover:text-red-700 rounded-xl font-medium transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <Link 
                    href="/join" 
                    className="flex items-center justify-center gap-3 px-4 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
                    onClick={closeMenu}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Join Our Club
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 