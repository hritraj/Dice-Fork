'use client';

import { useState } from 'react';
import Image from 'next/image';

type MenuCategory = 'coffee' | 'food' | 'snacks' | 'beverages' | 'desserts';

// MenuItem interface for menu items structure
interface MenuItem {
  name: string;
  description: string;
  price: string;
  emoji: string;
  isPopular?: boolean;
  isNew?: boolean;
  dietary?: string[];
}

const menuData = {
  coffee: [
    {
      name: "Dice Roll Espresso",
      description: "Bold double shot, perfect for intense strategy sessions",
      price: "$4.50",
      emoji: "☕",
      isPopular: true
    },
    {
      name: "Game Master's Americano", 
      description: "Strong and steady, just like your game leadership",
      price: "$4.00",
      emoji: "☕"
    },
    {
      name: "Victory Latte",
      description: "Smooth milk foam art inspired by your latest win",
      price: "$5.50",
      emoji: "☕",
      isPopular: true
    },
    {
      name: "Quest Cold Brew",
      description: "Smooth, refreshing journey in every sip",
      price: "$4.75",
      emoji: "🧊"
    },
    {
      name: "Critical Hit Cappuccino",
      description: "Perfect balance of espresso and steamed milk foam",
      price: "$5.00",
      emoji: "☕"
    }
  ],
  food: [
    {
      name: "The Strategy Sandwich",
      description: "Turkey, brie, cranberry, and arugula on artisan sourdough",
      price: "$14.00",
      emoji: "🥪",
      isPopular: true
    },
    {
      name: "Meeple Margherita",
      description: "Personal wood-fired pizza with fresh basil and mozzarella",
      price: "$16.00",
      emoji: "🍕"
    },
    {
      name: "Resource Management Bowl",
      description: "Quinoa, roasted vegetables, chickpeas, and tahini dressing",
      price: "$13.50",
      emoji: "🥗",
      dietary: ["Vegan", "Gluten-Free"]
    },
    {
      name: "Alliance Flatbread",
      description: "Prosciutto, fig jam, goat cheese, and arugula",
      price: "$15.50",
      emoji: "🫓"
    },
    {
      name: "Campaign Wrap",
      description: "Grilled chicken, vegetables, and hummus in spinach tortilla",
      price: "$12.00",
      emoji: "🌯",
      dietary: ["High Protein"]
    },
    {
      name: "Dungeon Deluxe Burger",
      description: "Grass-fed beef, caramelized onions, aged cheddar, brioche bun",
      price: "$17.00",
      emoji: "🍔",
      isNew: true
    }
  ],
  snacks: [
    {
      name: "Dice & Cheese Board",
      description: "Artisanal cheeses, charcuterie, nuts, and seasonal fruit",
      price: "$22.00",
      emoji: "🧀",
      isPopular: true
    },
    {
      name: "Token Trail Mix",
      description: "House-made mix of nuts, dried fruit, and dark chocolate",
      price: "$6.50",
      emoji: "🥜"
    },
    {
      name: "Power-Up Hummus Plate",
      description: "Roasted red pepper hummus with fresh vegetables and pita",
      price: "$9.00",
      emoji: "🫒",
      dietary: ["Vegan"]
    },
    {
      name: "Critical Roll Pretzels",
      description: "Warm soft pretzels with beer cheese and mustard",
      price: "$8.50",
      emoji: "🥨"
    },
    {
      name: "Mana Munchies",
      description: "Sweet and savory popcorn mix with herbs and parmesan",
      price: "$5.00",
      emoji: "🍿"
    }
  ],
  beverages: [
    {
      name: "Level Up Smoothie",
      description: "Mango, banana, coconut milk, and protein powder",
      price: "$7.50",
      emoji: "🥤",
      dietary: ["Protein Boost"]
    },
    {
      name: "Healing Potion Tea",
      description: "Chamomile, honey, and lavender blend",
      price: "$4.25",
      emoji: "🍵"
    },
    {
      name: "Mage's Elixir",
      description: "Fresh lemonade with blueberries and mint",
      price: "$5.00",
      emoji: "🍋",
      isNew: true
    },
    {
      name: "Warrior's Energy Drink",
      description: "Green tea, ginger, honey, and lemon",
      price: "$4.75",
      emoji: "🍵"
    },
    {
      name: "Guild Meeting Hot Chocolate",
      description: "Rich Belgian chocolate with whipped cream and marshmallows",
      price: "$5.25",
      emoji: "☕"
    }
  ],
  desserts: [
    {
      name: "Victory Cake Slice",
      description: "Seasonal cake slice - ask your server for today's flavor",
      price: "$6.50",
      emoji: "🍰",
      isPopular: true
    },
    {
      name: "Cookie Conquest",
      description: "Three house-made cookies: chocolate chip, oatmeal, and snickerdoodle",
      price: "$5.00",
      emoji: "🍪"
    },
    {
      name: "Treasure Chest Brownie",
      description: "Fudge brownie with salted caramel and vanilla ice cream",
      price: "$7.00",
      emoji: "🍫"
    },
    {
      name: "Game Night Gelato",
      description: "Two scoops of artisan gelato - flavors rotate weekly",
      price: "$6.00",
      emoji: "🍨"
    }
  ]
};

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('coffee');

  const categories = [
    { id: 'coffee' as MenuCategory, name: 'Coffee & Espresso', emoji: '☕' },
    { id: 'food' as MenuCategory, name: 'Main Dishes', emoji: '🍽️' },
    { id: 'snacks' as MenuCategory, name: 'Snacks & Boards', emoji: '🧀' },
    { id: 'beverages' as MenuCategory, name: 'Other Beverages', emoji: '🥤' },
    { id: 'desserts' as MenuCategory, name: 'Sweet Victories', emoji: '🍰' }
  ];

  const getDietaryBadgeColor = (dietary: string) => {
    switch (dietary) {
      case 'Vegan':
        return 'bg-green-100 text-green-800';
      case 'Gluten-Free':
        return 'bg-blue-100 text-blue-800';
      case 'High Protein':
        return 'bg-purple-100 text-purple-800';
      case 'Protein Boost':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10"></div>
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
            Our <span className="text-gradient">Menu</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Carefully crafted dishes and beverages designed for the perfect gaming experience.
            Every item is easy to enjoy while playing your favorite board games.
          </p>
          
          {/* Special Notice */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-orange-200">
            <h3 className="font-bold text-lg mb-2 text-gray-900">🎲 Gamer-Friendly Design</h3>
            <p className="text-gray-700">
              All our food is designed to be enjoyed one-handed, so you never have to pause your game!
            </p>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-orange-500 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-orange-100 hover:text-orange-700 shadow-md'
                }`}
              >
                <span className="text-xl">{category.emoji}</span>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Category Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-8">
              <div className="flex items-center justify-center">
                <span className="text-4xl mr-4">
                  {categories.find(cat => cat.id === activeCategory)?.emoji}
                </span>
                <h2 className="text-3xl font-bold">
                  {categories.find(cat => cat.id === activeCategory)?.name}
                </h2>
              </div>
            </div>

            {/* Menu Items Grid */}
            <div className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {menuData[activeCategory].map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-100 card-hover">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{item.emoji}</span>
                        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="text-2xl font-bold text-orange-600">{item.price}</span>
                        <div className="flex gap-1">
                          {'isPopular' in item && item.isPopular && (
                            <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                              Popular
                            </span>
                          )}
                          {'isNew' in item && item.isNew && (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs font-bold rounded-full">
                              New
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    
                    {'dietary' in item && item.dietary && item.dietary.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.dietary.map((diet, dietIndex) => (
                          <span
                            key={dietIndex}
                            className={`px-2 py-1 text-xs font-medium rounded-full ${getDietaryBadgeColor(diet)}`}
                          >
                            {diet}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Special Offers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center border border-green-100">
              <div className="text-4xl mb-4">🌅</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Early Bird Special</h3>
              <p className="text-gray-700 mb-4">Coffee + pastry combo for $7 before 10 AM</p>
              <span className="text-green-600 font-semibold">Save $2.50</span>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 text-center border border-blue-100">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Group Game Night</h3>
              <p className="text-gray-700 mb-4">4+ people get 10% off total food bill</p>
              <span className="text-blue-600 font-semibold">Perfect for parties</span>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center border border-purple-100">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Birthday Victory</h3>
              <p className="text-gray-700 mb-4">Free dessert on your birthday with ID</p>
              <span className="text-purple-600 font-semibold">Sweet celebration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Information */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Dietary Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We cater to all dietary needs so everyone can enjoy their gaming experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-bold mb-2">Vegan Options</h3>
              <p className="text-sm text-gray-600">Plant-based dishes marked clearly on menu</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="font-bold mb-2">Gluten-Free</h3>
              <p className="text-sm text-gray-600">Safe options for celiac and gluten sensitivity</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="font-bold mb-2">High Protein</h3>
              <p className="text-sm text-gray-600">Perfect for fitness-focused gamers</p>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="font-bold mb-2">Fresh & Local</h3>
              <p className="text-sm text-gray-600">Sourced from local farms when possible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Feast and Play?</h2>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Book your table now and get ready for an incredible dining and gaming experience!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/book" 
              className="bg-white text-orange-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Your Table
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Ask About Catering
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}