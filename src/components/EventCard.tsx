'use client';

import { useState } from 'react';
import { useAuth } from './AuthProvider';
import Image from 'next/image';

interface EventCardProps {
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
  category?: string;
  isRegistered?: boolean;
  onRegistrationChange?: () => void;
}

export default function EventCard({ 
  id,
  title, 
  date, 
  time, 
  location, 
  description, 
  attendees, 
  maxAttendees,
  imageUrl,
  isFeatured = false,
  category,
  isRegistered = false,
  onRegistrationChange
}: EventCardProps) {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const attendancePercentage = (attendees / maxAttendees) * 100;
  const isFull = attendees >= maxAttendees;
  const isAlmostFull = attendancePercentage >= 80;

  const handleRegistration = async () => {
    if (!user) {
      setError('Please log in to register for events');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/events/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: id,
          userId: user.id,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to register for event');
      }

      if (onRegistrationChange) {
        onRegistrationChange();
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleUnregistration = async () => {
    if (!user) return;

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`/api/events/register?eventId=${id}&userId=${user.id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to unregister from event');
      }

      if (onRegistrationChange) {
        onRegistrationChange();
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`group relative bg-white rounded-3xl shadow-soft hover:shadow-hard transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:scale-[1.02] ${
      isFeatured ? 'ring-2 ring-purple-400 ring-offset-4' : ''
    }`}>
      {/* Featured Badge */}
      {isFeatured && (
        <div className="absolute top-4 left-4 z-20">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-2xl font-bold text-sm shadow-lg">
            <span className="flex items-center gap-2">
              ⭐ Featured Event
            </span>
          </div>
        </div>
      )}

      {/* Event Image */}
      <div className="relative h-56 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 overflow-hidden">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            width={400}
            height={224}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="text-8xl opacity-40 animate-float">
              🎲
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20"></div>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Capacity Badge */}
        <div className="absolute top-4 right-4 z-10">
          <div className={`px-3 py-2 rounded-2xl text-sm font-bold shadow-lg backdrop-blur-sm ${
            isFull 
              ? 'bg-red-500/90 text-white' 
              : isAlmostFull 
                ? 'bg-orange-500/90 text-white'
                : 'bg-green-500/90 text-white'
          }`}>
            {attendees}/{maxAttendees}
          </div>
        </div>

        {/* Category Badge */}
        {category && (
          <div className="absolute bottom-4 left-4">
            <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-2xl text-xs font-semibold shadow-lg">
              {category}
            </div>
          </div>
        )}
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-2xl font-black text-gray-900 group-hover:text-purple-600 transition-colors mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">{date}</div>
              <div className="text-sm text-gray-500">{time}</div>
            </div>
          </div>
          
          <div className="flex items-center text-gray-700">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">{location}</div>
              <div className="text-sm text-gray-500">Event Location</div>
            </div>
          </div>
        </div>

        {/* Attendance Progress */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Registration Status</span>
            <span className={`text-sm font-bold ${
              isFull ? 'text-red-600' : isAlmostFull ? 'text-orange-600' : 'text-green-600'
            }`}>
              {attendees}/{maxAttendees} spots
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ease-out ${
                isFull 
                  ? 'bg-gradient-to-r from-red-500 to-red-600' 
                  : isAlmostFull 
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500'
                    : 'bg-gradient-to-r from-green-500 to-emerald-500'
              }`}
              style={{ width: `${Math.min(attendancePercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          </div>
        )}

        {/* Action Button */}
        {isRegistered ? (
          <button 
            onClick={handleUnregistration}
            disabled={loading}
            className="w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Unregistering...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Leave Event
                </>
              )}
            </span>
          </button>
        ) : (
          <button 
            onClick={handleRegistration}
            disabled={isFull || loading}
            className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
              isFull 
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02]'
            } disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
          >
            <span className="flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Joining...
                </>
              ) : isFull ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                  </svg>
                  Event Full
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Join Event
                </>
              )}
            </span>
          </button>
        )}
      </div>
    </div>
  );
} 