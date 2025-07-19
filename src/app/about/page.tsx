import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-teal-50 to-blue-50 bg-hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.jpg"
                alt="Dice & Fork Logo"
                width={120}
                height={120}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">
              About <span className="text-gradient">Dice & Fork</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Where culinary excellence meets the joy of board gaming. We've created a unique space 
              where food lovers and game enthusiasts come together for unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Dice & Fork was born from a simple idea: what if we could combine two of life&apos;s greatest pleasures – 
                  delicious food and engaging board games – under one roof?
                </p>
                <p>
                  Founded in 2021 by chef Maria Rodriguez and board game enthusiast Alex Chen, 
                  our café represents the perfect fusion of culinary artistry and tabletop entertainment. 
                  Maria&apos;s background in fine dining and Alex&apos;s passion for game design created the blueprint 
                  for a completely new type of social experience.
                </p>
                <p>
                  What started as weekend pop-ups in local community centers has grown into a beloved 
                  neighborhood destination where strangers become friends over shared meals and epic game battles.
                </p>
                <p>
                  Today, Dice & Fork serves hundreds of guests each week, hosting everything from romantic 
                  date nights over Azul to family celebrations with King of Tokyo. We're not just a café – 
                  we&apos;re a community hub where lasting memories are made.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">🍽️</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Chef Maria</h3>
                <p className="text-gray-700">Culinary artist creating gamer-friendly dishes</p>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center mt-8">
                <div className="text-4xl mb-4">🎲</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Alex Chen</h3>
                <p className="text-gray-700">Game master curating our amazing collection</p>
              </div>
              <div className="bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl p-8 text-center -mt-8">
                <div className="text-4xl mb-4">☕</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Since 2021</h3>
                <p className="text-gray-700">Three years of bringing joy to our community</p>
              </div>
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">❤️</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">5000+</h3>
                <p className="text-gray-700">Happy customers served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe that the best experiences happen when great food, engaging games, 
              and wonderful people come together in a welcoming environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-orange-100">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🍴</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Quality First</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Every dish is crafted with the finest ingredients and designed to be enjoyed 
                while gaming. No compromises on taste or experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Community</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We foster connections between people through shared meals and games. 
                Everyone is welcome at our table.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-green-100">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎲</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Play & Learn</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Games bring out our creativity and strategic thinking. We love teaching 
                new games and watching friendships form over the table.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-purple-100">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Sustainability</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We source locally when possible and use eco-friendly packaging. 
                Good for you and good for the planet.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Innovation</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                We&apos;re always experimenting with new menu items, game events, 
                and ways to enhance your experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">😊</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-center text-gray-900">Joy</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                At the heart of everything we do is simple joy. Life&apos;s too short 
                for bad food and boring games.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">The Dice & Fork Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              More than just a meal or a game – it's a complete experience designed for connection and joy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Thoughtfully Designed</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Every aspect of our café is designed with both food and gaming in mind. 
                  Our tables have built-in game storage, perfect lighting for reading cards, 
                  and easy-to-clean surfaces for worry-free dining.
                </p>
                <p>
                  Our menu features &quot;one-handed&quot; options – delicious dishes that can be enjoyed 
                  without interrupting your game. Think gourmet sandwiches, elegant small plates, 
                  and drinks that won't spill on your game pieces.
                </p>
                <p>
                  The atmosphere strikes the perfect balance between the energy of a game night 
                  and the comfort of your favorite neighborhood café.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                <div className="text-3xl mb-3">🏠</div>
                <h4 className="font-bold mb-2">Cozy Atmosphere</h4>
                <p className="text-sm text-gray-600">Warm lighting and comfortable seating</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <div className="text-3xl mb-3">🔇</div>
                <h4 className="font-bold mb-2">Perfect Acoustics</h4>
                <p className="text-sm text-gray-600">Hear your friends, not the kitchen</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-6 border border-green-100">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="font-bold mb-2">Free WiFi</h4>
                <p className="text-sm text-gray-600">Look up rules or share your victories</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <div className="text-3xl mb-3">🧼</div>
                <h4 className="font-bold mb-2">Spotless Clean</h4>
                <p className="text-sm text-gray-600">Games and tables sanitized regularly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">200+</div>
              <div className="text-orange-100 text-lg">Board Games</div>
              <div className="text-orange-200 text-sm">And growing!</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">50+</div>
              <div className="text-orange-100 text-lg">Menu Items</div>
              <div className="text-orange-200 text-sm">All gamer-friendly</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15+</div>
              <div className="text-orange-100 text-lg">Events/Month</div>
              <div className="text-orange-200 text-sm">Something for everyone</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5.0</div>
              <div className="text-orange-100 text-lg">Star Rating</div>
              <div className="text-orange-200 text-sm">From 500+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people who make Dice & Fork a special place every single day.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 card-hover">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-100 to-red-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-orange-200">
                <span className="text-orange-600 text-3xl font-bold">MR</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Maria Rodriguez</h3>
              <p className="text-orange-600 font-semibold mb-3">Executive Chef & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                15 years of culinary experience, specializing in creating delicious food 
                that&apos;s perfect for sharing and gaming. Maria&apos;s innovative &quot;one-handed&quot; 
                menu revolutionized café gaming.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 card-hover">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-blue-200">
                <span className="text-blue-600 text-3xl font-bold">AC</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Alex Chen</h3>
              <p className="text-orange-600 font-semibold mb-3">Game Curator & Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Board game designer and enthusiast with an encyclopedia knowledge of games. 
                Alex personally selects every game in our collection and loves teaching 
                newcomers their first strategy game.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 card-hover">
              <div className="w-24 h-24 bg-gradient-to-r from-green-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-green-200">
                <span className="text-green-600 text-3xl font-bold">JS</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Jordan Smith</h3>
              <p className="text-orange-600 font-semibold mb-3">Events Coordinator</p>
              <p className="text-gray-600 leading-relaxed">
                The mastermind behind our incredible events calendar. From family game 
                nights to competitive tournaments, Jordan ensures every event is 
                memorable and perfectly organized.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 card-hover">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-purple-200">
                <span className="text-purple-600 text-3xl font-bold">SP</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Sam Patel</h3>
              <p className="text-orange-600 font-semibold mb-3">Head Barista</p>
              <p className="text-gray-600 leading-relaxed">
                Coffee artist and gaming enthusiast who creates the perfect fuel for 
                long gaming sessions.                 Sam&apos;s specialty drinks are almost as popular 
                as our signature board game boards.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 card-hover">
              <div className="w-24 h-24 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-yellow-200">
                <span className="text-yellow-600 text-3xl font-bold">EW</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Emma Wilson</h3>
              <p className="text-orange-600 font-semibold mb-3">Community Manager</p>
              <p className="text-gray-600 leading-relaxed">
                The friendly face who welcomes newcomers and helps build our amazing 
                community. Emma organizes meetups, manages our social media, and 
                knows every regular customer by name.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-100 card-hover">
              <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-red-200">
                <span className="text-red-600 text-3xl font-bold">+</span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Join Our Team!</h3>
              <p className="text-orange-600 font-semibold mb-3">We're Hiring</p>
              <p className="text-gray-600 leading-relaxed">
                Love food, games, and people? We&apos;re always looking for passionate 
                individuals to join our team. Check our careers page for current openings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Join Our Story?</h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Whether you're a foodie, a gamer, or just someone who loves great experiences, 
                         we&apos;d love to welcome you to the Dice & Fork family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book" 
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Your First Visit
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-green-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 