import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Dice & Fork</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Building a community where strategy, friendship, and fun come together through the love of board games.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Dice & Fork was founded in 2018 by a group of friends who shared a passion for board games 
                and a desire to create a welcoming space for others to discover the joy of tabletop gaming.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small weekly meetup in a local coffee shop has grown into a vibrant 
                community of over 200 members who gather regularly to play, learn, and connect through 
                the magic of board games.
              </p>
              <p className="text-lg text-gray-600">
                Today, we host events at multiple venues across the city, organize tournaments, 
                and maintain an extensive library of games for our members to enjoy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-8 border border-purple-100">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/logo.jpg"
                    alt="Dice & Fork Logo"
                    width={80}
                    height={80}
                    className="rounded-xl shadow-md"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Founded in 2018</h3>
                <p className="text-lg text-gray-700">
                  From a small group of friends to a thriving community of board game enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're driven by a simple mission: to create an inclusive, welcoming community where 
              everyone can discover the joy of board games, regardless of their experience level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
              <p className="text-gray-600">
                We welcome players of all backgrounds, skill levels, and experience. Everyone has a place at our table.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in building lasting friendships and connections through shared gaming experiences.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We're always exploring new games, formats, and ways to make our events more engaging and fun.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-gray-600">
                We're committed to teaching new games and helping players develop their strategic thinking skills.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fun First</h3>
              <p className="text-gray-600">
                While we love competition, we prioritize having fun and creating memorable experiences above all else.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Consistency</h3>
              <p className="text-gray-600">
                We maintain regular schedules and reliable events so our community always knows when and where to find us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">200+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Games in Library</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Events Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-600 mb-2">5</div>
              <div className="text-gray-600">Years Strong</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate volunteers who make Dice & Fork possible and keep our community thriving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-200">
                <span className="text-purple-600 text-2xl font-bold">AJ</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
              <p className="text-purple-600 font-medium mb-3">Founder & President</p>
              <p className="text-gray-600">
                Board game enthusiast since childhood, Alex founded Dice & Fork to share his passion 
                and build a community around tabletop gaming.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-green-200">
                <span className="text-green-600 text-2xl font-bold">MC</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Maria Chen</h3>
              <p className="text-purple-600 font-medium mb-3">Events Coordinator</p>
              <p className="text-gray-600">
                Maria ensures every event runs smoothly and that all members have an amazing experience 
                at our meetups and tournaments.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 text-center shadow-lg border border-gray-100">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-yellow-200">
                <span className="text-yellow-600 text-2xl font-bold">DS</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">David Smith</h3>
              <p className="text-purple-600 font-medium mb-3">Game Librarian</p>
              <p className="text-gray-600">
                David manages our extensive game collection and helps members discover new games 
                that match their interests and skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to become part of the Dice & Fork family? We'd love to welcome you to our next event!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/join" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Member
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 