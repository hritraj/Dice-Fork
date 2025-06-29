import Link from 'next/link';
import Image from 'next/image';
import GameCard from '@/components/GameCard';
import EventCard from '@/components/EventCard';
import TestimonialCard from '@/components/TestimonialCard';

// Dummy data for events
const upcomingEvents = [
  {
    title: "Secret Hitler Tournament",
    date: "June 15, 2024",
    time: "7:00 PM",
    location: "Game Haven Cafe",
    description: "Join us for an intense evening of deception and strategy. Can you identify the fascists among you?",
    attendees: 18,
    maxAttendees: 20,
    isFeatured: true
  },
  {
    title: "Catan Championship",
    date: "June 22, 2024",
    time: "6:30 PM",
    location: "Community Center",
    description: "Build, trade, and settle your way to victory in our monthly Catan tournament.",
    attendees: 12,
    maxAttendees: 16
  },
  {
    title: "Newbie Night",
    date: "June 29, 2024",
    time: "7:00 PM",
    location: "Board Game Lounge",
    description: "Perfect for beginners! Learn new games in a friendly, supportive environment.",
    attendees: 8,
    maxAttendees: 15
  }
];

// Dummy data for games
const featuredGames = [
  {
    title: "Secret Hitler",
    description: "A social deduction game where players must work together to identify the hidden fascists among them.",
    players: "5-10 players",
    duration: "45-60 min",
    difficulty: "Medium" as const,
    category: "Social Deduction"
  },
  {
    title: "Catan",
    description: "Build settlements, trade resources, and expand your territory in this classic strategy game.",
    players: "3-4 players",
    duration: "60-90 min",
    difficulty: "Easy" as const,
    category: "Strategy"
  },
  {
    title: "Ticket to Ride",
    description: "Connect cities across the map by building train routes in this award-winning board game.",
    players: "2-5 players",
    duration: "45-60 min",
    difficulty: "Easy" as const,
    category: "Family"
  }
];

// Dummy data for testimonials
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Member",
    content: "Dice & Fork has completely changed my social life. I've made amazing friends and discovered so many incredible games. The community is welcoming and the events are always well-organized.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Board Game Enthusiast",
    content: "As someone who loves strategy games, this club is perfect. The tournaments are competitive but friendly, and I've learned so many new games from other members.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "New Member",
    content: "I was nervous about joining as a beginner, but everyone was so helpful and patient. Now I can't imagine my weekends without our game nights!",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.jpg"
              alt="Dice & Fork Logo"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to <span className="text-yellow-300">Dice & Fork</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Where strategy meets fun! Join our vibrant community of board game enthusiasts 
            for unforgettable nights of gaming, friendship, and adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Our Club
            </Link>
            <Link 
              href="/events" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Our Club</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a passionate community of board game lovers who believe that the best games 
              are played with friends, laughter, and maybe a little friendly competition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community First</h3>
              <p className="text-gray-600">We prioritize building lasting friendships and creating a welcoming environment for all skill levels.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Games</h3>
              <p className="text-gray-600">From classic strategy games to modern social deduction, we have something for everyone.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Regular Events</h3>
              <p className="text-gray-600">Weekly meetups, monthly tournaments, and special events keep our community active and engaged.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/about" 
              className="inline-flex items-center text-purple-600 hover:text-purple-700 font-semibold"
            >
              Learn More About Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don't miss out on our exciting upcoming events and tournaments!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/events" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Game Library Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Game Library</h2>
            <p className="text-xl text-gray-600">Discover our extensive collection of board games for all skill levels and interests.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredGames.map((game, index) => (
              <GameCard key={index} {...game} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/games" 
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              Browse All Games
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600">Hear from our community about their experiences with Dice & Fork.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join the Fun?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become part of our amazing community and start your board game adventure today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Join Now
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
