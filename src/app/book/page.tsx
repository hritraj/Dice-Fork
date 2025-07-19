'use client';

import { useState } from 'react';
import Image from 'next/image';

type BookingType = 'table' | 'event';

interface TableBooking {
  date: string;
  time: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

interface EventBooking {
  eventType: string;
  date: string;
  time: string;
  participants: number;
  name: string;
  email: string;
  phone: string;
  gamePreference: string;
  skillLevel: string;
}

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
];

const eventTypes = [
  'Beginner Game Night',
  'Strategy Game Session',
  'Family Game Time',
  'Competitive Tournament',
  'Learn New Games',
  'Private Group Event'
];

const gameCategories = [
  'Strategy Games',
  'Family Games', 
  'Party Games',
  'Cooperative Games',
  'Card Games',
  'No Preference'
];

export default function BookPage() {
  const [bookingType, setBookingType] = useState<BookingType>('table');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');

  const [tableBooking, setTableBooking] = useState<TableBooking>({
    date: '',
    time: '',
    guests: 2,
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [eventBooking, setEventBooking] = useState<EventBooking>({
    eventType: '',
    date: '',
    time: '',
    participants: 2,
    name: '',
    email: '',
    phone: '',
    gamePreference: '',
    skillLevel: 'beginner'
  });

  const handleTableBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setMessage('Table booked successfully! We&apos;ll send you a confirmation email shortly.');
      setMessageType('success');
      
      // Reset form
      setTableBooking({
        date: '',
        time: '',
        guests: 2,
        name: '',
        email: '',
        phone: '',
        specialRequests: ''
      });
    } catch {
      setMessage('Failed to book table. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEventBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setMessage('Event booking confirmed! Get ready for an amazing gaming experience.');
      setMessageType('success');
      
      // Reset form
      setEventBooking({
        eventType: '',
        date: '',
        time: '',
        participants: 2,
        name: '',
        email: '',
        phone: '',
        gamePreference: '',
        skillLevel: 'beginner'
      });
    } catch {
      setMessage('Failed to book event. Please try again.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-red-50 to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.jpg"
              alt="Dice & Fork Logo"
              width={100}
              height={100}
              className="rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
            Book Your <span className="text-gradient">Experience</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Reserve your table for a delicious meal or join one of our exciting board game events.
          </p>
        </div>
      </section>

      {/* Booking Type Selection */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => setBookingType('table')}
              className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 ${
                bookingType === 'table'
                  ? 'border-orange-500 bg-orange-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-orange-300'
              }`}
            >
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Café Table</h3>
              <p className="text-gray-600">Reserve a table for dining and casual gaming</p>
            </button>
            
            <button
              onClick={() => setBookingType('event')}
              className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 ${
                bookingType === 'event'
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-blue-300'
              }`}
            >
              <div className="text-4xl mb-3">🎲</div>
              <h3 className="text-2xl font-bold mb-2 text-gray-900">Game Event</h3>
              <p className="text-gray-600">Join a structured board game session</p>
            </button>
          </div>

          {/* Message Display */}
          {message && (
            <div className={`mb-8 p-4 rounded-xl ${
              messageType === 'success' 
                ? 'bg-green-50 text-green-800 border border-green-200' 
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  {messageType === 'success' ? (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  )}
                </svg>
                {message}
              </div>
            </div>
          )}

          {/* Booking Forms */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {bookingType === 'table' ? (
              <form onSubmit={handleTableBookingSubmit} className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <span className="text-4xl mr-3">🍽️</span>
                  Book a Table
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={tableBooking.date}
                      onChange={(e) => setTableBooking({...tableBooking, date: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Time
                    </label>
                    <select
                      required
                      value={tableBooking.time}
                      onChange={(e) => setTableBooking({...tableBooking, time: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Guests
                    </label>
                    <select
                      value={tableBooking.guests}
                      onChange={(e) => setTableBooking({...tableBooking, guests: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={tableBooking.name}
                      onChange={(e) => setTableBooking({...tableBooking, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={tableBooking.email}
                      onChange={(e) => setTableBooking({...tableBooking, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={tableBooking.phone}
                      onChange={(e) => setTableBooking({...tableBooking, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Special Requests */}
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Special Requests (Optional)
                  </label>
                  <textarea
                    rows={4}
                    value={tableBooking.specialRequests}
                    onChange={(e) => setTableBooking({...tableBooking, specialRequests: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Any dietary restrictions, seating preferences, or special occasions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 btn-primary text-lg py-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Booking Table...' : 'Book Table'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleEventBookingSubmit} className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-gray-900 flex items-center">
                  <span className="text-4xl mr-3">🎲</span>
                  Book Game Event
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Event Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Event Type
                    </label>
                    <select
                      required
                      value={eventBooking.eventType}
                      onChange={(e) => setEventBooking({...eventBooking, eventType: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={eventBooking.date}
                      onChange={(e) => setEventBooking({...eventBooking, date: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      required
                      value={eventBooking.time}
                      onChange={(e) => setEventBooking({...eventBooking, time: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>

                  {/* Participants */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Number of Participants
                    </label>
                    <select
                      value={eventBooking.participants}
                      onChange={(e) => setEventBooking({...eventBooking, participants: parseInt(e.target.value)})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {[1,2,3,4,5,6,7,8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Participant' : 'Participants'}</option>
                      ))}
                    </select>
                  </div>

                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={eventBooking.name}
                      onChange={(e) => setEventBooking({...eventBooking, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={eventBooking.email}
                      onChange={(e) => setEventBooking({...eventBooking, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={eventBooking.phone}
                      onChange={(e) => setEventBooking({...eventBooking, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  {/* Game Preference */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Game Preference
                    </label>
                    <select
                      value={eventBooking.gamePreference}
                      onChange={(e) => setEventBooking({...eventBooking, gamePreference: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">No preference</option>
                      {gameCategories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Skill Level */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Skill Level
                    </label>
                    <select
                      value={eventBooking.skillLevel}
                      onChange={(e) => setEventBooking({...eventBooking, skillLevel: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                      <option value="expert">Expert</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-8 btn-secondary text-lg py-4 disabled:opacity-50"
                >
                  {isSubmitting ? 'Booking Event...' : 'Book Event'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
              <p className="text-gray-600">Simple online reservation system with instant confirmation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Flexible Times</h3>
              <p className="text-gray-600">Multiple time slots available throughout the day.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">All Welcome</h3>
              <p className="text-gray-600">Perfect for individuals, couples, families, and groups.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}