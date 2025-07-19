'use client';

import { useState } from 'react';
import Link from 'next/link';

// Sample events data
const gameEvents = [
  {
    id: "friday-strategy",
    title: "Friday Night Strategy",
    date: "Every Friday",
    time: "7:00 PM - 11:00 PM",
    location: "Main Gaming Area",
    description: "Join fellow strategists for deep, engaging games that challenge your tactical skills. Perfect for intermediate to advanced players looking for a mental workout.",
    maxAttendees: 12,
    currentAttendees: 8,
    difficulty: "Intermediate/Advanced",
    gameTypes: ["Strategy", "Euro Games", "Engine Building"],
    price: "Free with table booking",
    features: ["Game instruction included", "Snacks provided", "Expert facilitators"],
  },
  {
    id: "weekend-family",
    title: "Weekend Family Fun",
    date: "Saturdays",
    time: "2:00 PM - 5:00 PM",
    location: "Family Zone",
    description: "Bring the whole family for games everyone can enjoy. Child-friendly environment with games designed for all ages and skill levels.",
    maxAttendees: 20,
    currentAttendees: 15,
    difficulty: "All Ages",
    gameTypes: ["Family Games", "Cooperative", "Light Strategy"],
    price: "Free for kids under 12",
    features: ["Family-friendly games", "Kid-safe environment", "Patient instruction"],
  },
  {
    id: "newcomer-welcome",
    title: "New Player Welcome",
    date: "Sunday Afternoons",
    time: "3:00 PM - 6:00 PM",
    location: "Learning Lounge",
    description: "First time playing board games? Perfect! We'll introduce you to the hobby with easy, fun games and a welcoming community.",
    maxAttendees: 10,
    currentAttendees: 6,
    difficulty: "Beginner",
    gameTypes: ["Gateway Games", "Party Games", "Simple Strategy"],
    price: "Free",
    features: ["Beginner-friendly", "No experience required", "Welcoming community"],
  },
  {
    id: "competitive-tournament",
    title: "Monthly Tournament",
    date: "First Saturday of Month",
    time: "1:00 PM - 8:00 PM",
    location: "Tournament Hall",
    description: "Competitive tournament with rotating featured games. Prizes for winners and great games for all participants.",
    maxAttendees: 16,
    currentAttendees: 12,
    difficulty: "Competitive",
    gameTypes: ["Tournament Games", "Competitive Strategy", "Points-based"],
    price: "$10 entry fee",
    features: ["Prizes awarded", "Official scoring", "Competitive atmosphere"],
  },
  {
    id: "social-party",
    title: "Social Party Games",
    date: "Thursday Evenings",
    time: "6:00 PM - 9:00 PM",
    location: "Party Zone",
    description: "Loud, fun, social games perfect for groups. Great for team building, celebrations, or just having a blast with friends.",
    maxAttendees: 24,
    currentAttendees: 18,
    difficulty: "Easy/Social",
    gameTypes: ["Party Games", "Social Deduction", "Team Games"],
    price: "Free with food order",
    features: ["Large group games", "Social atmosphere", "Lots of laughs"],
  },
];

export default function BookEventPage() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '1',
    experience: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleEventSelect = (eventId: string) => {
    setSelectedEvent(eventId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;
    
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const selectedEventData = gameEvents.find(event => event.id === selectedEvent);

  if (submitted && selectedEventData) {
    return (
      <div className="min-h-screen bg-gradient-neutral flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-soft p-12">
            <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">🎮</span>
            </div>
            <h1 className="text-3xl font-heading font-bold text-primary-900 mb-4">
              You're Registered!
            </h1>
            <p className="text-lg text-primary-600 mb-8">
              Thanks {formData.name}! You're all set for <strong>{selectedEventData.title}</strong> on {selectedEventData.date} at {selectedEventData.time}.
            </p>
            <p className="text-primary-600 mb-8">
              We'll send you a confirmation email with event details and what to expect. See you at the table!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="px-6 py-3 bg-gradient-warm text-white rounded-xl font-medium hover:shadow-dice transition-all duration-300"
              >
                Back to Home
              </Link>
              <Link 
                href="/events" 
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-medium hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-neutral py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-dice">
              <span className="text-2xl text-white">🎮</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">
            Join a Game Event
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Select an event that matches your style and skill level. From beginner-friendly sessions to competitive tournaments, 
            there's something for every type of player!
          </p>
        </div>

        {!selectedEvent ? (
          /* Event Selection */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {gameEvents.map((event) => {
              const spotsLeft = event.maxAttendees - event.currentAttendees;
              const isAlmostFull = spotsLeft <= 3;
              
              return (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 overflow-hidden border border-neutral-200 hover:border-accent cursor-pointer group"
                  onClick={() => handleEventSelect(event.id)}
                >
                  <div className="p-6">
                    {/* Event Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-primary-900 group-hover:text-accent transition-colors mb-1">
                          {event.title}
                        </h3>
                        <p className="text-sm text-primary-600">
                          {event.date} • {event.time}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                          isAlmostFull ? 'bg-warning text-white' : 'bg-secondary-100 text-secondary-800'
                        }`}>
                          {spotsLeft} spots left
                        </div>
                      </div>
                    </div>

                    {/* Event Description */}
                    <p className="text-primary-600 mb-4">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-primary-700">
                        <span className="text-lg mr-2">📍</span>
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-primary-700">
                        <span className="text-lg mr-2">🎯</span>
                        <span>Difficulty: {event.difficulty}</span>
                      </div>
                      <div className="flex items-center text-sm text-primary-700">
                        <span className="text-lg mr-2">💰</span>
                        <span>{event.price}</span>
                      </div>
                    </div>

                    {/* Game Types */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.gameTypes.map((type, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-neutral-100 text-primary-700 text-xs rounded-lg"
                        >
                          {type}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-1 mb-4">
                      {event.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-primary-600">
                          <span className="text-accent mr-2">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Attendance Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-primary-600 mb-1">
                        <span>Current Attendance</span>
                        <span>{event.currentAttendees}/{event.maxAttendees}</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all duration-300 ${
                            isAlmostFull ? 'bg-warning' : 'bg-secondary'
                          }`}
                          style={{ width: `${(event.currentAttendees / event.maxAttendees) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Select Button */}
                    <button className="w-full bg-gradient-warm text-white py-3 px-4 rounded-xl font-medium hover:shadow-dice transition-all duration-300 group-hover:scale-105">
                      Select This Event
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Registration Form */
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
              {/* Selected Event Summary */}
              <div className="bg-gradient-warm text-white p-8">
                <h2 className="text-2xl font-heading font-bold mb-2">
                  {selectedEventData?.title}
                </h2>
                <p className="text-lg opacity-90 mb-4">
                  {selectedEventData?.date} • {selectedEventData?.time}
                </p>
                <p className="opacity-80">
                  {selectedEventData?.description}
                </p>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="mt-4 text-white/80 hover:text-white text-sm underline"
                >
                  ← Choose a different event
                </button>
              </div>

              {/* Registration Form */}
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-900 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary-900 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-primary-900 mb-2">
                        Number of People *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                      >
                        <option value="1">Just me</option>
                        <option value="2">2 people</option>
                        <option value="3">3 people</option>
                        <option value="4">4 people</option>
                        <option value="5">5 people</option>
                        <option value="6">6 people</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-primary-900 mb-2">
                      Board Game Experience Level
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                    >
                      <option value="">Select your experience level</option>
                      <option value="complete-beginner">Complete beginner (never played modern board games)</option>
                      <option value="some-experience">Some experience (played a few games)</option>
                      <option value="regular-player">Regular player (play often)</option>
                      <option value="experienced">Experienced (know many games well)</option>
                      <option value="expert">Expert/Enthusiast (very experienced)</option>
                    </select>
                  </div>

                  {/* Special Notes */}
                  <div>
                    <label htmlFor="notes" className="block text-sm font-medium text-primary-900 mb-2">
                      Special Notes (Optional)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                      placeholder="Any specific games you'd like to try, accessibility needs, or other notes?"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-warm text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-dice transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Registering...</span>
                        </>
                      ) : (
                        <>
                          <span>🎮</span>
                          <span>Join This Event</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>

              {/* Event Info Panel */}
              <div className="bg-neutral-50 p-8 md:p-12 border-t border-neutral-200">
                <h3 className="text-xl font-heading font-bold text-primary-900 mb-4">
                  What to Expect
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">🎲</span>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-1">Games Provided</h4>
                      <p className="text-sm text-primary-600">All games and materials included</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">👥</span>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-1">Social Environment</h4>
                      <p className="text-sm text-primary-600">Meet like-minded players</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">🎓</span>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-1">Learn New Games</h4>
                      <p className="text-sm text-primary-600">Expert instruction included</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">☕</span>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-1">Food & Drinks</h4>
                      <p className="text-sm text-primary-600">Full café menu available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}