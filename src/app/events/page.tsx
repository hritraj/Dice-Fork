'use client';

import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/components/AuthProvider';
import EventCard from '@/components/EventCard';

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  maxAttendees: number;
  imageUrl?: string;
  isFeatured?: boolean;
  category: string;
  created_at: string;
}

const categories = ["All", "Tournament", "Social", "Strategy", "Family", "Cooperative"];

export default function Events() {
  const { user } = useAuth();
  const [events, setEvents] = useState<Event[]>([]);
  const [userRegistrations, setUserRegistrations] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/events');
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        setError('Failed to load events');
      }
    } catch {
      setError('Error loading events');
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchUserRegistrations = useCallback(async () => {
    if (!user) return;
    
    try {
      const response = await fetch(`/api/events/register?userId=${user.id}`);
      if (response.ok) {
        const data = await response.json();
        setUserRegistrations(data.map((reg: unknown) => (reg as { event_id: string }).event_id));
      }
    } catch (error) {
      console.error('Error fetching user registrations:', error);
    }
  }, [user]);

  // Load events and registrations on mount and when filters change
  useEffect(() => {
    fetchEvents();
  }, [selectedCategory, searchTerm, fetchEvents]);

  useEffect(() => {
    fetchUserRegistrations();
  }, [fetchUserRegistrations]);

  const handleRegistrationChange = () => {
    // Refresh both events and user registrations
    fetchEvents();
    fetchUserRegistrations();
  };

  const filteredEvents = events.filter(event => {
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Join us for exciting tournaments, social game nights, and special events throughout the year.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading events...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">⚠️</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Error loading events</h3>
              <p className="text-gray-600">{error}</p>
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎲</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedCategory === "All" ? "All Events" : `${selectedCategory} Events`}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredEvents.length} event{filteredEvents.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredEvents.map((event) => (
                  <EventCard 
                    key={event.id} 
                    {...event}
                    isRegistered={userRegistrations.includes(event.id)}
                    onRegistrationChange={handleRegistrationChange}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Event Categories Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Event Types</h2>
            <p className="text-xl text-gray-600">
              We offer a variety of events to suit different interests and skill levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tournaments</h3>
              <p className="text-gray-600">
                Competitive events with prizes and rankings. Perfect for experienced players looking for a challenge.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Games</h3>
              <p className="text-gray-600">
                Focus on interaction and fun. Great for making friends and enjoying light-hearted competition.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy Games</h3>
              <p className="text-gray-600">
                Complex games that require planning and tactical thinking. Ideal for strategic minds.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Events</h3>
              <p className="text-gray-600">
                All-ages events with games suitable for children and adults to enjoy together.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cooperative Games</h3>
              <p className="text-gray-600">
                Work together as a team to achieve common goals. Perfect for building camaraderie.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Special Events</h3>
              <p className="text-gray-600">
                Unique events like game launches, themed nights, and special celebrations throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We&apos;re always open to suggestions for new events and game types. Let us know what you&apos;d like to see!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Suggest an Event
            </a>
            <a 
              href="/join" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Join Our Club
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 