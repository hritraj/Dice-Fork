import Link from 'next/link';
import Image from 'next/image';
import GameCard from '@/components/GameCard';
import EventCard from '@/components/EventCard';
import TestimonialCard from '@/components/TestimonialCard';

// Featured café items
const cafeHighlights = [
  {
    title: "Artisan Coffee",
    description: "Freshly roasted beans, expertly brewed to fuel your gaming sessions",
    icon: "☕",
    price: "$3-6",
  },
  {
    title: "Gourmet Food",
    description: "Game-friendly meals that won't mess with your cards or board pieces",
    icon: "🍕",
    price: "$8-16",
  },
  {
    title: "Sweet Treats",
    description: "Perfect snacks to share between turns and keep energy high",
    icon: "🧁",
    price: "$4-8",
  },
];

// Game experiences
const gameExperiences = [
  {
    title: "Beginner Friendly",
    description: "New to board games? Our game masters will teach you the ropes with easy-to-learn games perfect for all skill levels.",
    icon: "🌟",
    games: ["Ticket to Ride", "Splendor", "Azul"],
  },
  {
    title: "Strategy Deep Dives",
    description: "Challenge your mind with complex strategy games that reward careful planning and tactical thinking.",
    icon: "🧠",
    games: ["Terraforming Mars", "Wingspan", "Scythe"],
  },
  {
    title: "Social & Party",
    description: "Large group games perfect for celebrations, team building, or just having a blast with friends.",
    icon: "🎉",
    games: ["Codenames", "Secret Hitler", "Wavelength"],
  },
];

// Upcoming events sample data
const upcomingEvents = [
  {
    id: "event-1",
    title: "Friday Night Strategy",
    date: "Every Friday",
    time: "7:00 PM",
    location: "Main Gaming Area",
    description: "Join fellow strategists for deep, engaging games that challenge your tactical skills. Perfect for intermediate to advanced players.",
    attendees: 8,
    maxAttendees: 12,
    isFeatured: true,
    category: "Strategy"
  },
  {
    id: "event-2", 
    title: "Weekend Family Fun",
    date: "Saturdays",
    time: "2:00 PM",
    location: "Family Zone",
    description: "Bring the whole family for games everyone can enjoy. Child-friendly environment with games for all ages.",
    attendees: 15,
    maxAttendees: 20,
    isFeatured: false,
    category: "Family"
  },
  {
    id: "event-3",
    title: "New Player Welcome",
    date: "Sunday Afternoons", 
    time: "3:00 PM",
    location: "Learning Lounge",
    description: "First time playing board games? Perfect! We'll introduce you to the hobby with easy, fun games and friendly people.",
    attendees: 6,
    maxAttendees: 10,
    isFeatured: false,
    category: "Beginner"
  }
];

// Customer testimonials
const testimonials = [
  {
    name: "Sarah Chen",
    role: "Regular Customer",
    content: "The perfect blend of great coffee and amazing games! I come here to work during the day and stay for game night. The staff always has great recommendations.",
    rating: 5
  },
  {
    name: "Mike Rodriguez",
    role: "Board Game Enthusiast", 
    content: "Finally, a place that gets it right - quality food, extensive game library, and a welcoming community. My new favorite hangout spot!",
    rating: 5
  },
  {
    name: "Emma & James",
    role: "Date Night Regulars",
    content: "We discovered this place on our third date and keep coming back! It's become our weekly tradition. Much more fun than dinner and a movie.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-neutral overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 coffee-texture"></div>
        <div className="absolute inset-0 dice-pattern opacity-30"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float opacity-20">☕</div>
        <div className="absolute top-40 right-20 text-4xl animate-dice-roll opacity-20">🎲</div>
        <div className="absolute bottom-40 left-20 text-5xl animate-bounce-gentle opacity-20">🍕</div>
        <div className="absolute bottom-20 right-10 text-4xl animate-float opacity-20">🎮</div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Main Brand Logo */}
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="w-32 h-32 bg-gradient-coffee rounded-3xl flex items-center justify-center shadow-coffee group-hover:shadow-dice transition-all duration-500 hover:scale-110">
                <span className="text-5xl font-bold text-white animate-bounce-gentle">🎲</span>
              </div>
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-float">
                <span className="text-2xl">☕</span>
              </div>
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center animate-bounce-gentle">
                <span className="text-xl">🍕</span>
              </div>
            </div>
          </div>

          {/* Hero Content */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-primary-900">
            Welcome to <span className="text-accent">Dice & Fork</span>
          </h1>
          <p className="text-xl md:text-2xl mb-4 max-w-4xl mx-auto text-primary-700 leading-relaxed">
            Where <span className="font-semibold text-accent">amazing coffee</span> meets <span className="font-semibold text-secondary">epic board games</span>
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-primary-600">
            Your new favorite spot to grab a perfect cup, play incredible games, and connect with fellow enthusiasts in our cozy social hub.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link 
              href="/book/table" 
              className="px-8 py-4 bg-gradient-coffee text-white rounded-2xl font-semibold text-lg hover:shadow-coffee transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>📅</span>
              <span>Book a Table</span>
            </Link>
            <Link 
              href="/book/event" 
              className="px-8 py-4 bg-gradient-warm text-white rounded-2xl font-semibold text-lg hover:shadow-dice transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>🎮</span>
              <span>Join Game Night</span>
            </Link>
            <Link 
              href="/menu" 
              className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-2xl font-semibold text-lg hover:bg-primary-600 hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>☕</span>
              <span>View Menu</span>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-accent mb-1">300+</div>
              <div className="text-sm text-primary-600 font-medium">Board Games</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-coffee mb-1">50+</div>
              <div className="text-sm text-primary-600 font-medium">Coffee Blends</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-secondary mb-1">15</div>
              <div className="text-sm text-primary-600 font-medium">Weekly Events</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center hover-lift">
              <div className="text-3xl font-bold text-primary mb-1">5★</div>
              <div className="text-sm text-primary-600 font-medium">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-primary-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* What Makes Us Special */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">
              The Perfect Blend
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              We've created the ultimate social space where quality café culture meets the excitement of modern board gaming.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Café Side */}
            <div>
              <h3 className="text-3xl font-heading font-bold text-coffee mb-6 flex items-center">
                <span className="text-4xl mr-3">☕</span>
                Artisan Café Experience
              </h3>
              <p className="text-lg text-primary-700 mb-8">
                Start your day with expertly crafted coffee, or fuel your gaming session with delicious food designed to complement your play experience.
              </p>
              
              <div className="space-y-4">
                {cafeHighlights.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-neutral-50 rounded-xl hover-lift">
                    <div className="text-2xl">{item.icon}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-semibold text-primary-900">{item.title}</h4>
                        <span className="text-sm font-medium text-accent">{item.price}</span>
                      </div>
                      <p className="text-primary-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href="/menu" 
                className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-gradient-coffee text-white rounded-xl font-medium hover:shadow-coffee transition-all duration-300 hover:scale-105"
              >
                <span>View Full Menu</span>
                <span>→</span>
              </Link>
            </div>

            {/* Gaming Side */}
            <div>
              <h3 className="text-3xl font-heading font-bold text-secondary mb-6 flex items-center">
                <span className="text-4xl mr-3">🎲</span>
                Epic Gaming Adventures
              </h3>
              <p className="text-lg text-primary-700 mb-8">
                Discover new worlds, challenge your mind, and create lasting memories with our curated collection of over 300 board games.
              </p>

              <div className="space-y-4">
                {gameExperiences.map((experience, index) => (
                  <div key={index} className="p-4 bg-secondary-50 rounded-xl hover-lift">
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-2xl">{experience.icon}</span>
                      <h4 className="font-semibold text-primary-900">{experience.title}</h4>
                    </div>
                    <p className="text-primary-600 mb-3">{experience.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {experience.games.map((game, gameIndex) => (
                        <span key={gameIndex} className="px-3 py-1 bg-secondary text-white text-sm rounded-full">
                          {game}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                href="/games" 
                className="inline-flex items-center space-x-2 mt-6 px-6 py-3 bg-gradient-forest text-white rounded-xl font-medium hover:shadow-board transition-all duration-300 hover:scale-105"
              >
                <span>Explore Game Library</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Getting started is easy! Whether you're coming solo or with friends, here's how to make the most of your visit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-soft hover-lift">
              <div className="w-20 h-20 bg-gradient-coffee rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                📅
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-primary-900">Book Your Spot</h3>
              <p className="text-primary-600 mb-6">
                Reserve a table for dining, or join one of our scheduled game events. Walk-ins welcome when space is available!
              </p>
              <Link 
                href="/book/table" 
                className="text-accent font-medium hover:text-accent-dark transition-colors"
              >
                Make Reservation →
              </Link>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-soft hover-lift">
              <div className="w-20 h-20 bg-gradient-warm rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                🎲
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-primary-900">Choose Your Adventure</h3>
              <p className="text-primary-600 mb-6">
                Browse our game library, order from our café menu, or join organized events. Our staff can help you find the perfect game for your group.
              </p>
              <Link 
                href="/games" 
                className="text-accent font-medium hover:text-accent-dark transition-colors"
              >
                Browse Games →
              </Link>
            </div>

            <div className="text-center p-8 bg-white rounded-2xl shadow-soft hover-lift">
              <div className="w-20 h-20 bg-gradient-forest rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                🎉
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-primary-900">Play & Connect</h3>
              <p className="text-primary-600 mb-6">
                Enjoy great food, amazing games, and wonderful company. Make new friends, learn new strategies, and create lasting memories.
              </p>
              <Link 
                href="/about" 
                className="text-accent font-medium hover:text-accent-dark transition-colors"
              >
                Our Community →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">
              Regular Events
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Join our weekly events designed for different play styles and experience levels. There's something for everyone!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/events" 
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-warm text-white rounded-xl font-semibold hover:shadow-dice transition-all duration-300 hover:scale-105"
            >
              <span>View All Events</span>
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-xl text-primary-600 max-w-3xl mx-auto">
              Hear from the amazing people who make Dice & Fork such a special place to gather, play, and connect.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-coffee text-white relative overflow-hidden">
        <div className="absolute inset-0 dice-pattern opacity-20"></div>
        <div className="absolute top-10 left-10 text-6xl animate-float opacity-30">🎲</div>
        <div className="absolute bottom-10 right-10 text-5xl animate-dice-roll opacity-30">☕</div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Roll the Dice?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join our community of coffee lovers and board game enthusiasts. Your next favorite game night starts here!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/book/table" 
              className="px-8 py-4 bg-white text-coffee rounded-xl font-semibold hover:bg-neutral-100 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>📅</span>
              <span>Reserve Your Table</span>
            </Link>
            <Link 
              href="/join" 
              className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-coffee transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>🚀</span>
              <span>Join Our Community</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
