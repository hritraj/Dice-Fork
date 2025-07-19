'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookTablePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    notes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-neutral flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl shadow-soft p-12">
            <div className="w-20 h-20 bg-gradient-coffee rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl text-white">✅</span>
            </div>
            <h1 className="text-3xl font-heading font-bold text-primary-900 mb-4">
              Reservation Confirmed!
            </h1>
            <p className="text-lg text-primary-600 mb-8">
              Thank you {formData.name}! We've received your table reservation for {formData.guests} {formData.guests === '1' ? 'person' : 'people'} on {formData.date} at {formData.time}.
            </p>
            <p className="text-primary-600 mb-8">
              You'll receive a confirmation email shortly with all the details. Can't wait to see you at Dice & Fork!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/" 
                className="px-6 py-3 bg-gradient-coffee text-white rounded-xl font-medium hover:shadow-coffee transition-all duration-300"
              >
                Back to Home
              </Link>
              <Link 
                href="/menu" 
                className="px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-xl font-medium hover:bg-primary-600 hover:text-white transition-all duration-300"
              >
                View Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-neutral py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-coffee rounded-2xl flex items-center justify-center shadow-coffee">
              <span className="text-2xl text-white">📅</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-900 mb-4">
            Reserve Your Table
          </h1>
          <p className="text-xl text-primary-600 max-w-2xl mx-auto">
            Book a cozy spot at Dice & Fork for coffee, food, casual gaming, or just hanging out. 
            Perfect for work, dates, or catch-ups with friends!
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-3xl shadow-soft overflow-hidden">
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

              {/* Reservation Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-primary-900 mb-2">
                    Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-primary-900 mb-2">
                    Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  >
                    <option value="">Select time</option>
                    <option value="8:00 AM">8:00 AM</option>
                    <option value="8:30 AM">8:30 AM</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="9:30 AM">9:30 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="10:30 AM">10:30 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="8:30 PM">8:30 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="guests" className="block text-sm font-medium text-primary-900 mb-2">
                    Party Size *
                  </label>
                  <select
                    id="guests"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                  >
                    <option value="1">1 person</option>
                    <option value="2">2 people</option>
                    <option value="3">3 people</option>
                    <option value="4">4 people</option>
                    <option value="5">5 people</option>
                    <option value="6">6 people</option>
                    <option value="7">7 people</option>
                    <option value="8">8 people</option>
                    <option value="9">9+ people</option>
                  </select>
                </div>
              </div>

              {/* Occasion */}
              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-primary-900 mb-2">
                  Occasion (Optional)
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                >
                  <option value="">Select occasion</option>
                  <option value="casual-dining">Casual Dining</option>
                  <option value="work-meeting">Work Meeting</option>
                  <option value="date-night">Date Night</option>
                  <option value="birthday">Birthday Celebration</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="casual-gaming">Casual Gaming</option>
                  <option value="family-time">Family Time</option>
                  <option value="friends-catchup">Friends Catch-up</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Special Notes */}
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-primary-900 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                  placeholder="Any dietary restrictions, accessibility needs, or special requests?"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-coffee text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-coffee transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Confirming Reservation...</span>
                    </>
                  ) : (
                    <>
                      <span>📅</span>
                      <span>Confirm Reservation</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Info Panel */}
          <div className="bg-neutral-50 p-8 md:p-12 border-t border-neutral-200">
            <h3 className="text-xl font-heading font-bold text-primary-900 mb-4">
              What to Expect
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <span className="text-xl">☕</span>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-1">Café Experience</h4>
                  <p className="text-sm text-primary-600">Full menu of coffee, food, and treats available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">🎲</span>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-1">Games Available</h4>
                  <p className="text-sm text-primary-600">Browse our library or bring your own</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">⏱️</span>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-1">Stay as Long as You Like</h4>
                  <p className="text-sm text-primary-600">No time limits - enjoy at your own pace</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-xl">💡</span>
                <div>
                  <h4 className="font-semibold text-primary-900 mb-1">Game Recommendations</h4>
                  <p className="text-sm text-primary-600">Our staff can suggest perfect games for your group</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-neutral-300">
              <p className="text-sm text-primary-600">
                <strong>Need help?</strong> Call us at (555) 123-DICE or check out our{' '}
                <Link href="/contact" className="text-accent hover:text-accent-dark font-medium">
                  contact page
                </Link>{' '}
                for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}