'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// Sample data for featured items
const featuredGames = [
  {
    title: "Azul",
    description: "Beautiful tile-laying game perfect with coffee",
    players: "2-4 players",
    duration: "30-45 min",
    difficulty: "Easy" as const,
    category: "Strategy",
    imageUrl: "/api/placeholder/300/200"
  },
  {
    title: "Wingspan",
    description: "Bird-themed engine builder with gorgeous art",
    players: "1-5 players", 
    duration: "40-70 min",
    difficulty: "Medium" as const,
    category: "Engine Building"
  },
  {
    title: "Ticket to Ride",
    description: "Cross-country train adventure for everyone",
    players: "2-5 players",
    duration: "30-60 min", 
    difficulty: "Easy" as const,
    category: "Family"
  }
];

const menuHighlights = [
  {
    name: "Artisan Coffee",
    description: "Single-origin beans roasted to perfection",
    price: "$4-6",
    emoji: "☕"
  },
  {
    name: "Craft Sandwiches", 
    description: "Gourmet sandwiches perfect for one-handed eating",
    price: "$12-16",
    emoji: "🥪"
  },
  {
    name: "Board Game Boards",
    description: "Themed charcuterie boards inspired by classic games",
    price: "$18-24",
    emoji: "🧀"
  }
];

const testimonials = [
      {
      name: "Sarah Chen",
      role: "Regular Customer",
      content: "The perfect spot for date night! Amazing coffee, delicious food, and we discovered our new favorite game here.",
      rating: 5,
      gamePlayedLast: "Azul"
    },
  {
    name: "Mike Rodriguez", 
    role: "Board Game Enthusiast",
    content: "I love that I can grab lunch and play a quick game between meetings. The staff even taught me Splendor!",
    rating: 5,
    gamePlayedLast: "Splendor"
  },
  {
    name: "The Johnson Family",
    role: "Weekend Visitors",
    content: "Our kids love the family game nights here. Great food, friendly atmosphere, and games for all ages!",
    rating: 5,
    gamePlayedLast: "Ticket to Ride"
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-red-50 to-purple-50 bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left fade-in-up">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow">
                Where <span className="text-gradient">Great Food</span><br />
                Meets <span className="text-gradient">Great Games</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                Welcome to Dice & Fork – a unique café experience where delicious food, 
                artisan coffee, and board games come together in perfect harmony.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/book" className="btn-primary inline-flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Book Your Table
                </Link>
                <Link href="/menu" className="btn-outline inline-flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  View Menu
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20">
                <div className="flex justify-center mb-6">
                  <Image
                    src="/logo.jpg"
                    alt="Dice & Fork Logo"
                    width={120}
                    height={120}
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">Currently Open</h3>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      <span>12 tables available</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      <span>8 game events today</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-200 rounded-full opacity-60 float"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-200 rounded-full opacity-40 float" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-200 rounded-full opacity-50 float" style={{animationDelay: '4s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Why Dice & Fork?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We've created the perfect environment where food lovers and game enthusiasts 
              can come together for unforgettable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🍽️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Delicious Food</h3>
              <p className="text-gray-600 leading-relaxed">
                From artisan coffee to gourmet sandwiches, every dish is crafted with care 
                and designed to be enjoyed while gaming.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🎲</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Games</h3>
              <p className="text-gray-600 leading-relaxed">
                Over 200 carefully curated board games for all skill levels, 
                from quick coffee break games to epic adventures.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">👥</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Join a welcoming community of food and game lovers. Make new friends, 
                learn new games, and create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Menu Highlights</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every item on our menu is designed with gamers in mind – delicious, 
              easy to eat, and perfect for sharing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuHighlights.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-orange-100">
                <div className="text-6xl mb-4 text-center">{item.emoji}</div>
                <h3 className="text-2xl font-bold mb-3 text-center text-gray-900">{item.name}</h3>
                <p className="text-gray-600 text-center mb-4">{item.description}</p>
                <div className="text-center">
                  <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu" className="btn-primary">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Games */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Featured Games</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our most popular games, perfect for enjoying with 
              your meal and friends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 card-hover border border-blue-100">
                <div className="h-48 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-6xl opacity-60">🎲</span>
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{game.title}</h3>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {game.players}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {game.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/games" className="btn-secondary">
              Browse All Games
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our amazing community about their experiences at Dice & Fork.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-xl border border-purple-100">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-xl lg:text-2xl text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div className="text-center">
                  <div className="font-bold text-lg text-gray-900">{testimonials[currentTestimonial].name}</div>
                  <div className="text-gray-600">{testimonials[currentTestimonial].role}</div>
                  <div className="text-sm text-purple-600 mt-2">
                    Last played: {testimonials[currentTestimonial].gamePlayedLast}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-purple-600 scale-125' : 'bg-purple-300 hover:bg-purple-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join us for special events, tournaments, and game nights designed to 
              bring our community together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample Events */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 card-hover border border-green-100">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Weekly Tournament</h3>
              <p className="text-gray-600 mb-4">Compete in our friendly weekly tournaments with prizes and glory!</p>
              <div className="text-sm text-green-600 font-semibold">Every Saturday • 7 PM</div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 card-hover border border-pink-100">
              <div className="text-4xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Family Game Night</h3>
              <p className="text-gray-600 mb-4">Perfect for families! Kid-friendly games and special menu items.</p>
              <div className="text-sm text-pink-600 font-semibold">Every Sunday • 3 PM</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 card-hover border border-blue-100">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Learn & Play</h3>
              <p className="text-gray-600 mb-4">New to board games? Our staff will teach you the basics!</p>
              <div className="text-sm text-blue-600 font-semibold">Every Wednesday • 6 PM</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/events" className="btn-secondary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-game-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Whether you're craving great coffee, delicious food, or an epic game night, 
            we're here to make it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/book" 
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Your Table Now
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
