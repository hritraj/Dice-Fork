import Link from 'next/link';

// Menu categories and items
const menuCategories = [
  {
    id: 'coffee',
    name: 'Coffee & Espresso',
    icon: '☕',
    description: 'Expertly crafted coffee drinks using premium, freshly roasted beans',
    items: [
      { name: 'Dice Latte', description: 'Our signature latte with a hint of vanilla and cinnamon', price: '$4.50' },
      { name: 'Americano', description: 'Rich espresso shots with hot water', price: '$3.25' },
      { name: 'Cappuccino', description: 'Equal parts espresso, steamed milk, and foam', price: '$4.00' },
      { name: 'Flat White', description: 'Double shot with microfoam steamed milk', price: '$4.25' },
      { name: 'Macchiato', description: 'Espresso "marked" with a dollop of steamed milk', price: '$3.75' },
      { name: 'Cold Brew', description: 'Smooth, less acidic coffee steeped for 12+ hours', price: '$3.50' },
      { name: 'Board Game Blend', description: 'Our house blend - perfectly balanced for long gaming sessions', price: '$3.00' },
      { name: 'Iced Coffee', description: 'Chilled coffee served over ice with milk', price: '$3.25' },
    ]
  },
  {
    id: 'beverages',
    name: 'Other Beverages',
    icon: '🥤',
    description: 'Refreshing drinks for every taste preference',
    items: [
      { name: 'Chai Latte', description: 'Spiced tea blend with steamed milk', price: '$4.00' },
      { name: 'Hot Chocolate', description: 'Rich chocolate with whipped cream and marshmallows', price: '$3.75' },
      { name: 'Herbal Teas', description: 'Selection of premium herbal teas', price: '$2.75' },
      { name: 'Fresh Lemonade', description: 'Made daily with real lemons', price: '$3.00' },
      { name: 'Sparkling Water', description: 'Various flavored sparkling waters', price: '$2.50' },
      { name: 'Kombucha', description: 'Locally brewed probiotic tea', price: '$4.50' },
      { name: 'Smoothies', description: 'Fruit and veggie blends (ask about today\'s flavors)', price: '$5.50' },
      { name: 'Sodas & Juices', description: 'Variety of soft drinks and fresh juices', price: '$2.75' },
    ]
  },
  {
    id: 'breakfast',
    name: 'Breakfast & Brunch',
    icon: '🍳',
    description: 'Perfect fuel for your morning gaming sessions',
    items: [
      { name: 'Game Master\'s Breakfast', description: 'Two eggs, bacon, toast, and hash browns', price: '$12.00' },
      { name: 'Avocado Toast', description: 'Smashed avocado on artisan bread with everything seasoning', price: '$9.50' },
      { name: 'Strategy Stack', description: 'Three fluffy pancakes with maple syrup and butter', price: '$8.75' },
      { name: 'Breakfast Burrito', description: 'Eggs, cheese, hash browns, and choice of meat wrapped up', price: '$10.50' },
      { name: 'Granola Bowl', description: 'House-made granola with yogurt and fresh berries', price: '$7.50' },
      { name: 'French Toast', description: 'Thick-cut brioche with cinnamon and vanilla', price: '$9.00' },
      { name: 'Bagel & Cream Cheese', description: 'Fresh bagel with plain or flavored cream cheese', price: '$4.50' },
      { name: 'Oatmeal', description: 'Steel-cut oats with choice of toppings', price: '$6.00' },
    ]
  },
  {
    id: 'lunch',
    name: 'Lunch & Dinner',
    icon: '🍕',
    description: 'Hearty meals designed to fuel epic gaming adventures',
    items: [
      { name: 'Board Game Burger', description: 'House-made patty with cheese, lettuce, tomato, and fries', price: '$14.50' },
      { name: 'Grilled Cheese & Soup', description: 'Classic comfort combo with tomato soup', price: '$11.00' },
      { name: 'Caesar Salad', description: 'Romaine, parmesan, croutons, and our signature dressing', price: '$10.50' },
      { name: 'BBQ Pulled Pork Sandwich', description: 'Slow-cooked pork with coleslaw and pickles', price: '$13.00' },
      { name: 'Vegetarian Wrap', description: 'Hummus, veggies, and greens in a spinach tortilla', price: '$9.50' },
      { name: 'Mac & Cheese', description: 'Three-cheese blend with breadcrumb topping', price: '$12.00' },
      { name: 'Dice Pizza (Personal)', description: 'Individual pizza with choice of toppings', price: '$11.00' },
      { name: 'Chicken Club Sandwich', description: 'Grilled chicken, bacon, lettuce, tomato, and mayo', price: '$12.50' },
    ]
  },
  {
    id: 'snacks',
    name: 'Snacks & Treats',
    icon: '🧁',
    description: 'Perfect for sharing between turns and keeping energy up',
    items: [
      { name: 'Dice Cookies', description: 'Sugar cookies shaped like dice with icing numbers', price: '$2.50' },
      { name: 'Muffin of the Day', description: 'Fresh-baked muffin (ask about today\'s flavor)', price: '$3.50' },
      { name: 'Game Piece Pretzels', description: 'Soft pretzel bites shaped like meeples', price: '$5.50' },
      { name: 'Mixed Nuts', description: 'Roasted and seasoned nut mix', price: '$4.00' },
      { name: 'Fruit Cup', description: 'Fresh seasonal fruit medley', price: '$4.50' },
      { name: 'Brownie Square', description: 'Fudgy chocolate brownie with nuts', price: '$3.75' },
      { name: 'Cheese & Crackers', description: 'Artisan cheese selection with water crackers', price: '$8.00' },
      { name: 'Popcorn', description: 'Kettle corn or cheese flavored', price: '$3.00' },
    ]
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: '🍰',
    description: 'Sweet endings to perfect your gaming experience',
    items: [
      { name: 'Victory Cake', description: 'Chocolate layer cake with buttercream frosting', price: '$6.50' },
      { name: 'Board Game Pie', description: 'Rotating seasonal pie selection', price: '$5.75' },
      { name: 'Ice Cream Sundae', description: 'Two scoops with choice of toppings', price: '$5.50' },
      { name: 'Tiramisu', description: 'Classic Italian coffee-flavored dessert', price: '$6.00' },
      { name: 'Cheesecake Slice', description: 'New York style with berry compote', price: '$5.25' },
      { name: 'Cookie Sandwich', description: 'Ice cream between two fresh-baked cookies', price: '$4.75' },
      { name: 'Fruit Tart', description: 'Pastry shell with custard and fresh fruit', price: '$5.50' },
      { name: 'Chocolate Mousse', description: 'Rich and airy chocolate dessert', price: '$5.00' },
    ]
  }
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-gradient-neutral py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-coffee rounded-3xl flex items-center justify-center shadow-coffee">
              <span className="text-3xl text-white">☕</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-900 mb-6">
            Our Menu
          </h1>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Delicious food and drinks crafted to complement your gaming experience. 
            From quick snacks between turns to hearty meals for longer sessions, we've got you covered.
          </p>
        </div>

        {/* Featured Items Banner */}
        <div className="bg-white rounded-3xl shadow-soft p-8 mb-16 border border-neutral-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-heading font-bold text-primary-900 mb-2">
              🌟 Today's Specials
            </h2>
            <p className="text-primary-600">Limited time offerings you don't want to miss!</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-coffee rounded-xl text-white">
              <h3 className="font-heading font-bold mb-2">Game Night Combo</h3>
              <p className="text-sm opacity-90 mb-2">Coffee + Sandwich + Cookie</p>
              <p className="text-lg font-bold">$15.00 <span className="text-sm line-through opacity-60">$18.50</span></p>
            </div>
            <div className="text-center p-6 bg-gradient-warm rounded-xl text-white">
              <h3 className="font-heading font-bold mb-2">Victory Celebration</h3>
              <p className="text-sm opacity-90 mb-2">Any dessert + Hot beverage</p>
              <p className="text-lg font-bold">$8.00 <span className="text-sm line-through opacity-60">$10.25</span></p>
            </div>
            <div className="text-center p-6 bg-gradient-forest rounded-xl text-white">
              <h3 className="font-heading font-bold mb-2">Strategy Session</h3>
              <p className="text-sm opacity-90 mb-2">Free refills on coffee (3+ hour games)</p>
              <p className="text-lg font-bold">Ask your server!</p>
            </div>
          </div>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.id} className="bg-white rounded-3xl shadow-soft overflow-hidden border border-neutral-200">
              {/* Category Header */}
              <div className="bg-neutral-50 p-8 border-b border-neutral-200">
                <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-coffee rounded-2xl flex items-center justify-center text-2xl text-white">
                    {category.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h2 className="text-3xl font-heading font-bold text-primary-900 mb-1">
                      {category.name}
                    </h2>
                    <p className="text-primary-600">{category.description}</p>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className="flex items-start justify-between p-4 hover:bg-neutral-50 rounded-xl transition-colors duration-200 group"
                    >
                      <div className="flex-1 pr-4">
                        <h3 className="font-semibold text-primary-900 mb-1 group-hover:text-accent transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-sm text-primary-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-accent">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Information */}
        <div className="mt-16 bg-white rounded-3xl shadow-soft p-8 border border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-coffee rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                🌱
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Sustainable Sourcing</h3>
              <p className="text-sm text-primary-600">
                We partner with local suppliers and use ethically sourced ingredients whenever possible.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                🥗
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Dietary Options</h3>
              <p className="text-sm text-primary-600">
                Vegetarian, vegan, and gluten-free options available. Ask your server about modifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-forest rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                ⏰
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Kitchen Hours</h3>
              <p className="text-sm text-primary-600">
                Full menu available 8 AM - 9 PM daily. Limited menu until 10 PM on weekends.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-coffee rounded-xl flex items-center justify-center mx-auto mb-3 text-white">
                🎲
              </div>
              <h3 className="font-semibold text-primary-900 mb-2">Game-Friendly</h3>
              <p className="text-sm text-primary-600">
                All items designed to be enjoyed while playing. Minimal mess, maximum flavor!
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-coffee rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 dice-pattern opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Ready to Dine & Play?
              </h2>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Reserve your table now and get ready for an amazing combination of great food and epic gaming!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/book/table" 
                  className="px-8 py-4 bg-white text-coffee rounded-xl font-semibold hover:bg-neutral-100 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>📅</span>
                  <span>Reserve Your Table</span>
                </Link>
                <Link 
                  href="/book/event" 
                  className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-coffee transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>🎮</span>
                  <span>Join Game Event</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}