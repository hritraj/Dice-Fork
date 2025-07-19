import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 coffee-texture opacity-10"></div>
      <div className="absolute inset-0 dice-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-coffee rounded-2xl flex items-center justify-center">
                <span className="text-xl font-bold text-white">🎲</span>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">Dice & Fork</h3>
                <p className="text-sm text-neutral-200 tracking-wider uppercase">Café • Games • Community</p>
              </div>
            </div>
            <p className="text-neutral-200 mb-6 max-w-md leading-relaxed">
              Where amazing coffee meets epic board games. Join our community for unforgettable experiences, 
              great food, and the best games in a warm, welcoming atmosphere.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300 hover:scale-105"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-accent">Explore</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-neutral-200 hover:text-accent transition-colors flex items-center space-x-2">
                  <span>🏠</span>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-neutral-200 hover:text-accent transition-colors flex items-center space-x-2">
                  <span>☕</span>
                  <span>Menu</span>
                </Link>
              </li>
              <li>
                <Link href="/games" className="text-neutral-200 hover:text-accent transition-colors flex items-center space-x-2">
                  <span>🎲</span>
                  <span>Games</span>
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-neutral-200 hover:text-accent transition-colors flex items-center space-x-2">
                  <span>🎮</span>
                  <span>Events</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-200 hover:text-accent transition-colors flex items-center space-x-2">
                  <span>ℹ️</span>
                  <span>About</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-6 text-accent">Visit Us</h3>
            <div className="space-y-4 text-neutral-200">
              <div className="flex items-start space-x-3">
                <span className="text-lg">📍</span>
                <div>
                  <p className="font-medium">123 Coffee Lane</p>
                  <p>Board Game District</p>
                  <p>City, State 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-lg">📞</span>
                <p>(555) 123-DICE</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-lg">📧</span>
                <p>hello@diceandfork.com</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-lg">🕒</span>
                <div>
                  <p className="font-medium mb-1">Hours:</p>
                  <p className="text-sm">Mon-Thu: 8am-10pm</p>
                  <p className="text-sm">Fri-Sat: 8am-11pm</p>
                  <p className="text-sm">Sunday: 9am-9pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link 
                href="/book/table" 
                className="px-6 py-3 bg-gradient-coffee rounded-xl font-medium hover:shadow-coffee transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>📅</span>
                <span>Book Table</span>
              </Link>
              <Link 
                href="/book/event" 
                className="px-6 py-3 bg-gradient-warm rounded-xl font-medium hover:shadow-dice transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>🎮</span>
                <span>Join Event</span>
              </Link>
            </div>
            
            <div className="text-center md:text-right text-neutral-300">
              <p className="text-sm">&copy; 2024 Dice & Fork. All rights reserved.</p>
              <p className="text-xs mt-1">Made with ♥ for the board game community</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 