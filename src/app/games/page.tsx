'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Game {
  id: string;
  title: string;
  description: string;
  players: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  yearPublished?: number;
  rating?: number;
  imageUrl?: string;
  designer?: string;
  isRecommended?: boolean;
  minAge?: number;
  bggId?: number;
}

// Sample games data - in a real app, this would come from BoardGameGeek API
const gamesData: Game[] = [
  {
    id: '1',
    title: 'Azul',
    description: 'A beautiful tile-laying game where players compete to create the most stunning azulejo tilework.',
    players: '2-4',
    duration: '30-45 min',
    difficulty: 'Easy',
    category: 'Abstract Strategy',
    yearPublished: 2017,
    rating: 7.8,
    designer: 'Michael Kiesling',
    isRecommended: true,
    minAge: 8,
    bggId: 230802
  },
  {
    id: '2',
    title: 'Wingspan',
    description: 'A relaxing, award-winning strategy card game about birds for 1 to 5 players.',
    players: '1-5',
    duration: '40-70 min', 
    difficulty: 'Medium',
    category: 'Engine Building',
    yearPublished: 2019,
    rating: 8.1,
    designer: 'Elizabeth Hargrave',
    isRecommended: true,
    minAge: 10,
    bggId: 266192
  },
  {
    id: '3',
    title: 'Ticket to Ride',
    description: 'A cross-country train adventure where players collect train cards to claim railway routes.',
    players: '2-5',
    duration: '30-60 min',
    difficulty: 'Easy',
    category: 'Family',
    yearPublished: 2004,
    rating: 7.4,
    designer: 'Alan R. Moon',
    isRecommended: true,
    minAge: 8,
    bggId: 9209
  },
  {
    id: '4',
    title: 'Splendor',
    description: 'A fast-paced and addictive game of chip-collecting and card development.',
    players: '2-4',
    duration: '30 min',
    difficulty: 'Easy',
    category: 'Engine Building',
    yearPublished: 2014,
    rating: 7.4,
    designer: 'Marc André',
    minAge: 10,
    bggId: 148228
  },
  {
    id: '5',
    title: 'Pandemic',
    description: 'Work together as a team of disease-fighting specialists to save the world.',
    players: '2-4',
    duration: '45 min',
    difficulty: 'Medium',
    category: 'Cooperative',
    yearPublished: 2008,
    rating: 7.6,
    designer: 'Matt Leacock',
    minAge: 8,
    bggId: 30549
  },
  {
    id: '6',
    title: 'Carcassonne',
    description: 'A tile-placement game where players develop the countryside around Carcassonne.',
    players: '2-5',
    duration: '30-45 min',
    difficulty: 'Easy',
    category: 'Tile Placement',
    yearPublished: 2000,
    rating: 7.4,
    designer: 'Klaus-Jürgen Wrede',
    minAge: 7,
    bggId: 822
  },
  {
    id: '7',
    title: 'King of Tokyo',
    description: 'Mutant monsters, robots, and aliens compete for dominance in Tokyo.',
    players: '2-6',
    duration: '20-30 min',
    difficulty: 'Easy',
    category: 'Dice Rolling',
    yearPublished: 2011,
    rating: 7.2,
    designer: 'Richard Garfield',
    minAge: 8,
    bggId: 70323
  },
  {
    id: '8',
    title: '7 Wonders',
    description: 'Lead one of the seven greatest cities of the Ancient World.',
    players: '3-7',
    duration: '30 min',
    difficulty: 'Medium',
    category: 'Card Drafting',
    yearPublished: 2010,
    rating: 7.7,
    designer: 'Antoine Bauza',
    minAge: 10,
    bggId: 68448
  },
  {
    id: '9',
    title: 'Codenames',
    description: 'A clever party game of communication and deduction.',
    players: '2-8',
    duration: '15 min',
    difficulty: 'Easy',
    category: 'Party Game',
    yearPublished: 2015,
    rating: 7.8,
    designer: 'Vlaada Chvátil',
    minAge: 10,
    bggId: 178900
  },
  {
    id: '10',
    title: 'Settlers of Catan',
    description: 'Trade, build, and settle the island of Catan in this modern classic.',
    players: '3-4',
    duration: '60-90 min',
    difficulty: 'Medium',
    category: 'Strategy',
    yearPublished: 1995,
    rating: 7.2,
    designer: 'Klaus Teuber',
    minAge: 10,
    bggId: 13
  }
];

const categories = [
  'All Games',
  'Family',
  'Strategy', 
  'Abstract Strategy',
  'Engine Building',
  'Cooperative',
  'Tile Placement',
  'Dice Rolling',
  'Card Drafting',
  'Party Game'
];

const difficulties = ['All', 'Easy', 'Medium', 'Hard'];
const playerCounts = ['All', '2', '3', '4', '5', '6+'];

export default function GamesPage() {
  const [games] = useState<Game[]>(gamesData);
  const [filteredGames, setFilteredGames] = useState<Game[]>(gamesData);
  const [selectedCategory, setSelectedCategory] = useState('All Games');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedPlayerCount, setSelectedPlayerCount] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRecommendedOnly, setShowRecommendedOnly] = useState(false);

  useEffect(() => {
    let filtered = games;

    // Filter by category
    if (selectedCategory !== 'All Games') {
      filtered = filtered.filter(game => game.category === selectedCategory);
    }

    // Filter by difficulty
    if (selectedDifficulty !== 'All') {
      filtered = filtered.filter(game => game.difficulty === selectedDifficulty);
    }

    // Filter by player count
    if (selectedPlayerCount !== 'All') {
      const count = selectedPlayerCount === '6+' ? 6 : parseInt(selectedPlayerCount);
      filtered = filtered.filter(game => {
        const players = game.players;
        if (selectedPlayerCount === '6+') {
          // Check if max players is 6 or more
          const maxPlayers = parseInt(players.split('-')[1] || players);
          return maxPlayers >= 6;
        } else {
          // Check if player count is within range
          const [min, max] = players.split('-').map(p => parseInt(p.trim()));
          return count >= min && count <= (max || min);
        }
      });
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(game => 
        game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.designer?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by recommended
    if (showRecommendedOnly) {
      filtered = filtered.filter(game => game.isRecommended);
    }

    setFilteredGames(filtered);
  }, [games, selectedCategory, selectedDifficulty, selectedPlayerCount, searchTerm, showRecommendedOnly]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Hard':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryEmoji = (category: string) => {
    const categoryEmojis: { [key: string]: string } = {
      'Family': '👨‍👩‍👧‍👦',
      'Strategy': '🧠',
      'Abstract Strategy': '🔷',
      'Engine Building': '⚙️',
      'Cooperative': '🤝',
      'Tile Placement': '🧩',
      'Dice Rolling': '🎲',
      'Card Drafting': '🃏',
      'Party Game': '🎉'
    };
    return categoryEmojis[category] || '🎲';
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
            Our <span className="text-gradient">Game Library</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Explore our carefully curated collection of over 200 board games. 
            From family favorites to strategic masterpieces, there's something for everyone.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200">
              <div className="text-3xl mb-2">📚</div>
              <h3 className="font-bold text-lg mb-2">200+ Games</h3>
              <p className="text-gray-700 text-sm">Constantly growing collection</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200">
              <div className="text-3xl mb-2">🎯</div>
              <h3 className="font-bold text-lg mb-2">All Skill Levels</h3>
              <p className="text-gray-700 text-sm">From beginners to experts</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-pink-200">
              <div className="text-3xl mb-2">👥</div>
              <h3 className="font-bold text-lg mb-2">Any Group Size</h3>
              <p className="text-gray-700 text-sm">Solo to large groups</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Find Your Perfect Game</h2>
            
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search games, designers, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                />
                <svg className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Filter Controls */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Difficulty Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Difficulty</label>
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {difficulties.map(difficulty => (
                    <option key={difficulty} value={difficulty}>{difficulty}</option>
                  ))}
                </select>
              </div>

              {/* Player Count Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Players</label>
                <select
                  value={selectedPlayerCount}
                  onChange={(e) => setSelectedPlayerCount(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {playerCounts.map(count => (
                    <option key={count} value={count}>
                      {count === 'All' ? 'Any' : count} {count !== 'All' && count !== '6+' ? 'Players' : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Recommended Toggle */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Filter</label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showRecommendedOnly}
                    onChange={(e) => setShowRecommendedOnly(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">Staff Picks Only</span>
                </label>
              </div>
            </div>

            {/* Results Count */}
            <div className="text-sm text-gray-600">
              Showing {filteredGames.length} of {games.length} games
            </div>
          </div>
        </div>
      </section>

      {/* Games Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredGames.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🎲</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No games found</h3>
              <p className="text-gray-600">Try adjusting your filters or search terms.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map((game) => (
                <div key={game.id} className="bg-white rounded-2xl shadow-lg card-hover border border-gray-100 overflow-hidden">
                  {/* Game Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-200 to-purple-200 relative flex items-center justify-center">
                    <div className="text-6xl opacity-60">{getCategoryEmoji(game.category)}</div>
                    {game.isRecommended && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                          Staff Pick
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(game.difficulty)}`}>
                        {game.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Game Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {game.title}
                      </h3>
                      {game.rating && (
                        <div className="flex items-center text-sm text-yellow-600">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {game.rating}
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {game.description}
                    </p>

                    {/* Game Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {game.players} players
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {game.duration}
                      </div>
                      {game.minAge && (
                        <div className="flex items-center text-sm text-gray-500">
                          <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Age {game.minAge}+
                        </div>
                      )}
                    </div>

                    {/* Category and Designer */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                        {game.category}
                      </span>
                      {game.designer && (
                        <span className="text-xs text-gray-500">
                          by {game.designer}
                        </span>
                      )}
                    </div>

                    {/* Year Published */}
                    {game.yearPublished && (
                      <div className="mt-2 text-xs text-gray-400">
                        Published: {game.yearPublished}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Book your table and dive into our amazing collection of board games. 
            Our staff is always happy to teach you new games!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book" 
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book a Table
            </a>
            <a 
              href="/events" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Join Game Events
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 