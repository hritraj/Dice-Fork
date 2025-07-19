import Link from 'next/link';
import Image from 'next/image';
import GameCard from '@/components/GameCard';
import EventCard from '@/components/EventCard';
import TestimonialCard from '@/components/TestimonialCard';

// Dummy data for events
const upcomingEvents = [
  {
    id: "event-1",
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
    id: "event-2",
    title: "Catan Championship",
    date: "June 22, 2024",
    time: "6:30 PM",
    location: "Community Center",
    description: "Build, trade, and settle your way to victory in our monthly Catan tournament.",
    attendees: 12,
    maxAttendees: 16,
    isFeatured: false
  },
  {
    id: "event-3",
    title: "Newbie Night",
    date: "June 29, 2024",
    time: "7:00 PM",
    location: "Board Game Lounge",
    description: "Perfect for beginners! Learn new games in a friendly, supportive environment.",
    attendees: 8,
    maxAttendees: 15,
    isFeatured: false
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
    content: "Dice & Fork has completely changed my social life. I&apos;ve made amazing friends and discovered so many incredible games. The community is welcoming and the events are always well-organized.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Board Game Enthusiast",
    content: "As someone who loves strategy games, this club is perfect. The tournaments are competitive but friendly, and I&apos;ve learned so many new games from other members.",
    rating: 5
  },
  {
    name: "Emma Rodriguez",
    role: "New Member",
    content: "I was nervous about joining as a beginner, but everyone was so helpful and patient. Now I can&apos;t imagine my weekends without our game nights!",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-secondary to-primary-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/mascot.svg"
              alt="Dice & Fork Mascot"
              width={120}
              height={120}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-headline font-bold mb-6 text-accent">
            Welcome to <span className="text-accent">Dice & Fork</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Where strategy meets fun! Join our vibrant community of board game enthusiasts 
            for unforgettable nights of gaming, friendship, and adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/join" 
              className="bg-accent text-primary px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
            >
              Join Our Club
            </Link>
            <Link 
              href="/events" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-headline font-bold text-primary mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4 text-3xl">🎲</div>
              <h3 className="text-xl font-semibold mb-2">Join the Club</h3>
              <p className="text-gray-600">Sign up online or at an event. All skill levels welcome!</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mb-4 text-3xl">🕹️</div>
              <h3 className="text-xl font-semibold mb-2">Play & Connect</h3>
              <p className="text-gray-600">Attend weekly meetups, tournaments, and casual game nights.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 text-3xl">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Level Up</h3>
              <p className="text-gray-600">Make friends, win prizes, and discover new games every month.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-headline font-bold text-primary mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">How do I join Dice & Fork?</h3>
              <p className="text-gray-600">Sign up online or come to an event. All are welcome!</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Do I need to bring my own games?</h3>
              <p className="text-gray-600">Nope! We have a huge library of games for all interests and skill levels.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Are there membership fees?</h3>
              <p className="text-gray-600">Yes, $15/month or $150/year. Guests can attend for $5/event.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="font-semibold text-lg mb-2">Can I bring friends?</h3>
              <p className="text-gray-600">Absolutely! Bring friends and family—just let us know in advance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Carousel Scaffold) */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-headline font-bold text-primary mb-4">What Our Members Say</h2>
            <p className="text-xl text-gray-600">Hear from our community about their experiences with Dice & Fork.</p>
          </div>
          {/* TODO: Replace with carousel logic */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600">Don&apos;t miss out on our exciting upcoming events and tournaments!</p>
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
