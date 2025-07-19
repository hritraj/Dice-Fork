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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-neutral-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <div className="flex items-center group">
            <Link href="/" className="flex items-center space-x-4 hover:scale-105 transition-transform duration-200">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-coffee rounded-2xl flex items-center justify-center shadow-coffee group-hover:shadow-dice transition-all duration-300">
                  <span className="text-2xl text-white font-bold">🎲</span>
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center animate-bounce-gentle">
                  <span className="text-xs">☕</span>
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="font-heading text-2xl text-primary-900 group-hover:text-accent transition-colors">
                  Dice & Fork
                </div>
                <div className="text-xs text-primary-600 font-medium tracking-wider uppercase">
                  Café • Games • Community
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavLink href="/" label="Home" />
            <NavLink href="/menu" label="Menu" />
            <NavLink href="/games" label="Games" />
            <NavLink href="/events" label="Events" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
            
            {/* Booking Buttons */}
            <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-neutral-300">
              <Link
                href="/book/table"
                className="px-4 py-2 text-sm font-medium text-primary-700 bg-neutral-100 hover:bg-neutral-200 rounded-xl transition-all duration-200 hover:scale-105"
              >
                📅 Book Table
              </Link>
              <Link
                href="/book/event"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-warm hover:shadow-dice rounded-xl transition-all duration-200 hover:scale-105"
              >
                🎮 Join Game
              </Link>
            </div>

            {/* User Menu */}
            {!loading && (
              <div className="ml-4">
                {user ? (
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <div className="text-sm font-medium text-primary-900">
                        {user.user_metadata?.name || user.email?.split('@')[0]}
                      </div>
                      <div className="text-xs text-primary-600">Member</div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="p-2 text-primary-600 hover:text-error hover:bg-error/10 rounded-xl transition-all duration-200"
                      title="Sign Out"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                      </svg>
                    </button>
                  </div>
                ) : (
                  <Link
                    href="/join"
                    className="px-5 py-2 text-sm font-medium text-white bg-gradient-forest hover:shadow-board rounded-xl transition-all duration-200 hover:scale-105"
                  >
                    Join Community
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <Link
              href="/book/table"
              className="p-2 text-primary-700 bg-neutral-100 rounded-xl"
            >
              📅
            </Link>
            <button
              onClick={toggleMenu}
              className="p-2 text-primary-700 hover:text-accent hover:bg-neutral-100 rounded-xl transition-all duration-200"
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
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-neutral-200 shadow-medium">
            <div className="px-4 py-6 space-y-4">
              <MobileNavLink href="/" label="Home" icon="🏠" onClick={closeMenu} />
              <MobileNavLink href="/menu" label="Menu" icon="☕" onClick={closeMenu} />
              <MobileNavLink href="/games" label="Games" icon="🎲" onClick={closeMenu} />
              <MobileNavLink href="/events" label="Events" icon="🎮" onClick={closeMenu} />
              <MobileNavLink href="/about" label="About" icon="ℹ️" onClick={closeMenu} />
              <MobileNavLink href="/contact" label="Contact" icon="📞" onClick={closeMenu} />
              
              <div className="pt-4 border-t border-neutral-200 space-y-3">
                <Link
                  href="/book/table"
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 text-primary-700 bg-neutral-100 rounded-xl font-medium"
                >
                  <span>📅</span>
                  <span>Book a Table</span>
                </Link>
                <Link
                  href="/book/event"
                  onClick={closeMenu}
                  className="flex items-center space-x-3 px-4 py-3 text-white bg-gradient-warm rounded-xl font-medium"
                >
                  <span>🎮</span>
                  <span>Join Game Event</span>
                </Link>
              </div>

              {!loading && (
                <div className="pt-4 border-t border-neutral-200">
                  {user ? (
                    <div className="space-y-3">
                      <div className="px-4 py-3 bg-neutral-50 rounded-xl">
                        <div className="font-medium text-primary-900">
                          Welcome, {user.user_metadata?.name || user.email?.split('@')[0]}!
                        </div>
                        <div className="text-sm text-primary-600">Community Member</div>
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-error bg-error/10 rounded-xl font-medium"
                      >
                        <span>👋</span>
                        <span>Sign Out</span>
                      </button>
                    </div>
                  ) : (
                    <Link
                      href="/join"
                      onClick={closeMenu}
                      className="flex items-center space-x-3 px-4 py-3 text-white bg-gradient-forest rounded-xl font-medium"
                    >
                      <span>🚀</span>
                      <span>Join Our Community</span>
                    </Link>
                  )
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Desktop Navigation Link Component
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-sm font-medium text-primary-700 hover:text-accent hover:bg-neutral-100 rounded-xl transition-all duration-200"
    >
      {label}
    </Link>
  );
}

// Mobile Navigation Link Component
function MobileNavLink({ 
  href, 
  label, 
  icon, 
  onClick 
}: { 
  href: string; 
  label: string; 
  icon: string; 
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="flex items-center space-x-3 px-4 py-3 text-primary-700 hover:text-accent hover:bg-neutral-100 rounded-xl transition-all duration-200"
    >
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </Link>
  );
} 