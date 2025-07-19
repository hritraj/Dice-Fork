import Link from 'next/link';
import Image from 'next/image';
import GameCard from '@/components/GameCard';
import EventCard from '@/components/EventCard';
import TestimonialCard from '@/components/TestimonialCard';

// Enhanced event data with more professional content
const upcomingEvents = [
  {
    id: "event-1",
    title: "Secret Hitler Championship",
    date: "December 15, 2024",
    time: "7:00 PM - 10:00 PM",
    location: "The Game Haven Lounge",
    description: "Join us for our monthly championship tournament featuring the ultimate social deduction game. Test your skills in reading people and strategic thinking in this intense evening of politics and betrayal.",
    attendees: 18,
    maxAttendees: 20,
    isFeatured: true,
    category: "Tournament"
  },
  {
    id: "event-2",
    title: "Catan World Cup Qualifier",
    date: "December 22, 2024",
    time: "6:30 PM - 9:30 PM",
    location: "Downtown Community Center",
    description: "Compete for a chance to represent our club in the regional Catan championships. Build, trade, and settle your way to victory in this prestigious qualifying tournament.",
    attendees: 12,
    maxAttendees: 16,
    isFeatured: false,
    category: "Qualifier"
  },
  {
    id: "event-3",
    title: "Welcome Night for New Members",
    date: "December 29, 2024",
    time: "7:00 PM - 10:00 PM",
    location: "Board Game Café & Lounge",
    description: "Perfect for beginners and newcomers! Learn the basics of popular games, meet fellow enthusiasts, and discover your new favorite hobby in our supportive community.",
    attendees: 8,
    maxAttendees: 15,
    isFeatured: false,
    category: "Beginner Friendly"
  }
];

// Enhanced game data with more variety
const featuredGames = [
  {
    title: "Secret Hitler",
    description: "A dramatic game of political intrigue and deduction. Players must work together to stop the fascists from taking control of the government.",
    players: "5-10 players",
    duration: "45-60 min",
    difficulty: "Medium" as const,
    category: "Social Deduction",
    imageUrl: "/games/secret-hitler.jpg"
  },
  {
    title: "Settlers of Catan",
    description: "Build and develop your civilization by trading resources and expanding your settlements across the island of Catan.",
    players: "3-4 players",
    duration: "60-90 min",
    difficulty: "Easy" as const,
    category: "Strategy",
    imageUrl: "/games/catan.jpg"
  },
  {
    title: "Ticket to Ride",
    description: "Connect cities across the country by claiming railway routes in this award-winning train adventure board game.",
    players: "2-5 players",
    duration: "45-60 min",
    difficulty: "Easy" as const,
    category: "Family",
    imageUrl: "/games/ticket-to-ride.jpg"
  },
  {
    title: "Wingspan",
    description: "A competitive, medium-weight, card-driven, engine-building board game about birds and their habitats.",
    players: "1-5 players",
    duration: "40-70 min",
    difficulty: "Medium" as const,
    category: "Engine Building",
    imageUrl: "/games/wingspan.jpg"
  },
  {
    title: "Azul",
    description: "A tile-placement game where players compete to create the most beautiful wall by carefully selecting and placing colorful tiles.",
    players: "2-4 players",
    duration: "30-45 min",
    difficulty: "Easy" as const,
    category: "Abstract",
    imageUrl: "/games/azul.jpg"
  },
  {
    title: "Gloomhaven",
    description: "A cooperative campaign game of tactical combat and persistent character progression set in a dark fantasy world.",
    players: "1-4 players",
    duration: "60-120 min",
    difficulty: "Hard" as const,
    category: "Adventure",
    imageUrl: "/games/gloomhaven.jpg"
  }
];

// Enhanced testimonials with more details
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Club President & Strategy Game Expert",
    content: "Dice & Fork transformed my love for board games into lasting friendships. The community here is incredible - welcoming to newcomers yet challenging for veterans. I've discovered games I never knew existed and made memories that will last a lifetime.",
    rating: 5,
    avatar: "/avatars/sarah.jpg",
    joinDate: "Member since 2022"
  },
  {
    name: "Marcus Chen",
    role: "Tournament Champion",
    content: "The competitive scene here is fantastic! Whether you're looking for casual fun or serious tournament play, Dice & Fork delivers. I've improved my game significantly and even won a few championships thanks to the supportive community.",
    rating: 5,
    avatar: "/avatars/marcus.jpg",
    joinDate: "Member since 2021"
  },
  {
    name: "Emma Rodriguez",
    role: "New Member Coordinator",
    content: "I was intimidated by complex board games until I found this club. The patient mentorship and beginner-friendly events made all the difference. Now I'm helping other newcomers discover the joy of modern board gaming!",
    rating: 5,
    avatar: "/avatars/emma.jpg",
    joinDate: "Member since 2023"
  }
];

const stats = [
  { number: "500+", label: "Active Members", icon: "👥" },
  { number: "50+", label: "Games in Library", icon: "🎲" },
  { number: "24", label: "Events per Month", icon: "📅" },
  { number: "98%", label: "Member Satisfaction", icon: "⭐" }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-20 h-20 bg-white rounded-full opacity-20"></div>
          </div>
          <div className="absolute top-40 right-20 animate-float" style={{animationDelay: '1s'}}>
            <div className="w-12 h-12 bg-yellow-300 rounded-full opacity-30"></div>
          </div>
          <div className="absolute bottom-32 left-1/4 animate-float" style={{animationDelay: '2s'}}>
            <div className="w-16 h-16 bg-pink-400 rounded-full opacity-25"></div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="animate-fadeInUp">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Image
                  src="/logo.jpg"
                  alt="Dice & Fork Logo"
                  width={150}
                  height={150}
                  className="rounded-3xl shadow-2xl ring-4 ring-white/20"
                  priority
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur opacity-30 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              Welcome to{' '}
              <span className="gradient-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300 bg-clip-text text-transparent">
                Dice & Fork
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed text-gray-200">
              The premier social club where strategy meets community, and every game night becomes an unforgettable adventure.
            </p>
            
            <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-300">
              Join 500+ passionate board game enthusiasts in creating memories, building friendships, and discovering your next favorite game.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link 
                href="/join" 
                className="group bg-gradient-to-r from-orange-400 to-pink-500 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-orange-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  🚀 Join Our Community
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="/events" 
                className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm"
              >
                <span className="flex items-center gap-3">
                  📅 Explore Events
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </div>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fadeInUp text-center" style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-1">{stat.number}</div>
                  <div className="text-sm md:text-base text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-75" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Enhanced About Preview Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Dice & Fork?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We&apos;re more than just a board game club – we&apos;re a thriving community that brings people together 
              through the power of play, strategy, and genuine human connection.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="text-center group animate-fadeInUp" style={{animationDelay: '0.1s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Inclusive Community</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                From complete beginners to seasoned strategists, everyone finds their place in our welcoming, 
                supportive community where friendship comes first.
              </p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{animationDelay: '0.2s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Curated Game Library</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Discover amazing games from our collection of 50+ carefully selected titles spanning every genre, 
                complexity level, and player count.
              </p>
            </div>
            
            <div className="text-center group animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-green-200 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Premium Events</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Join 24+ monthly events including tournaments, casual nights, learning sessions, 
                and special themed gatherings designed for maximum fun.
              </p>
            </div>
          </div>
          
          <div className="text-center animate-fadeInUp" style={{animationDelay: '0.4s'}}>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 text-purple-600 hover:text-purple-700 font-bold text-lg transition-colors group"
            >
              <span>Discover Our Story</span>
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Upcoming Events Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              <span className="gradient-text">Upcoming</span> Adventures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t miss out on our carefully crafted events designed to bring out the best in every player!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <EventCard {...event} />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fadeInUp">
            <Link 
              href="/events" 
              className="btn-primary text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center gap-3">
                🎯 View All Events
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Game Library Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-black text-gray-900 mb-6">
              Our <span className="gradient-text">Game Collection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our handpicked selection of the finest board games, from quick party games to epic adventures.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredGames.slice(0, 6).map((game, index) => (
              <div key={index} className="animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <GameCard {...game} />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fadeInUp">
            <Link 
              href="/games" 
              className="btn-primary text-lg px-8 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="flex items-center gap-3">
                🎲 Browse Game Library
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-5xl font-black mb-6">
              What Our <span className="gradient-text bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">Members</span> Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear genuine stories from our community about their incredible experiences with Dice & Fork.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="animate-fadeInUp" style={{animationDelay: `${index * 0.1}s`}}>
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready to Roll the Dice?
            </h2>
            <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed">
              Your next great adventure is just one game away.
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto text-gray-200">
              Join our incredible community of 500+ members and discover why Dice & Fork is the premier 
              destination for board game enthusiasts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                href="/join" 
                className="group bg-white text-purple-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  🎉 Join Now - It&apos;s Free!
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
              
              <Link 
                href="/contact" 
                className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm"
              >
                <span className="flex items-center gap-3">
                  💬 Get in Touch
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
