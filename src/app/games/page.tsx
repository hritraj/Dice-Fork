'use client';

import { useState } from 'react';
import GameCard from '@/components/GameCard';

// Extended dummy data for games
const allGames = [
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
  },
  {
    title: "Pandemic",
    description: "Work together as a team to stop the spread of diseases and save humanity in this cooperative game.",
    players: "2-4 players",
    duration: "45-60 min",
    difficulty: "Medium" as const,
    category: "Cooperative"
  },
  {
    title: "Terraforming Mars",
    description: "Lead a corporation to transform Mars into a habitable planet in this complex strategy game.",
    players: "1-5 players",
    duration: "120-180 min",
    difficulty: "Hard" as const,
    category: "Strategy"
  },
  {
    title: "Carcassonne",
    description: "Build a medieval landscape by placing tiles and claiming features with your meeples.",
    players: "2-5 players",
    duration: "30-45 min",
    difficulty: "Easy" as const,
    category: "Family"
  },
  {
    title: "Scythe",
    description: "Compete for territory and resources in an alternate-history 1920s Europe with giant mechs.",
    players: "1-5 players",
    duration: "90-120 min",
    difficulty: "Hard" as const,
    category: "Strategy"
  },
  {
    title: "Werewolf",
    description: "A classic social deduction game where villagers must identify the werewolves among them.",
    players: "8-18 players",
    duration: "30-45 min",
    difficulty: "Easy" as const,
    category: "Social Deduction"
  },
  {
    title: "Spirit Island",
    description: "Play as powerful spirits defending your island from colonizing invaders in this cooperative game.",
    players: "1-4 players",
    duration: "90-120 min",
    difficulty: "Hard" as const,
    category: "Cooperative"
  },
  {
    title: "Codenames",
    description: "Give one-word clues to help your team identify secret agents while avoiding the assassin.",
    players: "4-8 players",
    duration: "15-30 min",
    difficulty: "Easy" as const,
    category: "Party"
  },
  {
    title: "Agricola",
    description: "Build and manage your farm while feeding your family in this classic worker placement game.",
    players: "1-4 players",
    duration: "90-120 min",
    difficulty: "Medium" as const,
    category: "Strategy"
  },
  {
    title: "Forbidden Island",
    description: "Work together to collect treasures and escape before the island sinks beneath the waves.",
    players: "2-4 players",
    duration: "30-45 min",
    difficulty: "Easy" as const,
    category: "Cooperative"
  }
];

const categories = ["All", "Strategy", "Social Deduction", "Family", "Cooperative", "Party"];
const difficulties = ["All", "Easy", "Medium", "Hard"];

export default function Games() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = allGames.filter(game => {
    const matchesCategory = selectedCategory === "All" || game.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === "All" || game.difficulty === selectedDifficulty;
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesDifficulty && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Game Library</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Explore our extensive collection of board games for all skill levels and interests.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            {/* Search */}
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredGames.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎲</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No games found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedCategory === "All" ? "All Games" : `${selectedCategory} Games`}
                </h2>
                <p className="text-gray-600">
                  Showing {filteredGames.length} game{filteredGames.length !== 1 ? 's' : ''}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGames.map((game, index) => (
                  <GameCard key={index} {...game} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Game Categories Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Game Categories</h2>
            <p className="text-xl text-gray-600">
              We have games for every type of player and occasion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy Games</h3>
              <p className="text-gray-600">
                Complex games that require planning, resource management, and tactical thinking.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎭</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Social Deduction</h3>
              <p className="text-gray-600">
                Games focused on deception, bluffing, and reading other players&apos; intentions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Games</h3>
              <p className="text-gray-600">
                Accessible games suitable for players of all ages and experience levels.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Cooperative Games</h3>
              <p className="text-gray-600">
                Work together as a team to achieve common goals and overcome challenges.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Party Games</h3>
              <p className="text-gray-600">
                Light-hearted games perfect for large groups and social gatherings.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Tournament Games</h3>
              <p className="text-gray-600">
                Competitive games with clear win conditions and strategic depth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difficulty Guide */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Difficulty Guide</h2>
            <p className="text-xl text-gray-600">
              Understanding game complexity to find the perfect match for your experience level.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-green-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-600 font-bold">E</span>
                </div>
                <h3 className="text-xl font-semibold">Easy</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Perfect for beginners and casual players. Simple rules, quick to learn, and fun for everyone.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 15-60 minute play time</li>
                <li>• Simple rule sets</li>
                <li>• Great for families</li>
                <li>• Minimal setup required</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-yellow-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-yellow-600 font-bold">M</span>
                </div>
                <h3 className="text-xl font-semibold">Medium</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Balanced complexity for experienced players. Strategic depth without overwhelming complexity.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 45-120 minute play time</li>
                <li>• Moderate rule complexity</li>
                <li>• Strategic decision making</li>
                <li>• Some setup required</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-red-500">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">H</span>
                </div>
                <h3 className="text-xl font-semibold">Hard</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Complex games for experienced players. Deep strategy, multiple systems, and longer play times.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 90+ minute play time</li>
                <li>• Complex rule systems</li>
                <li>• Deep strategic planning</li>
                <li>• Significant setup time</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Want to Try These Games?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join us at our next event to play these games and discover new favorites with our community!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/events" 
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Events
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