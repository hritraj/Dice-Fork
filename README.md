# Dice & Fork - Where Great Food Meets Great Games

A modern, responsive website for Dice & Fork, a unique café that combines delicious food, artisan coffee, and board games in one welcoming space.

## 🌟 Features

### 🍽️ Café Experience
- **Beautiful Menu System** - Interactive menu with categories, dietary information, and special offers
- **Dual Booking System** - Separate booking flows for café tables and board game events
- **Modern Design** - Clean, responsive design with smooth animations and transitions
- **Gamer-Friendly** - Everything designed with board gamers in mind

### 🎲 Board Game Integration
- **Curated Game Library** - 200+ games with detailed information, ratings, and filters
- **Smart Filtering** - Filter by difficulty, player count, category, and staff picks
- **BoardGameGeek Integration** - Ready for integration with real game data
- **Event Management** - Comprehensive event system for tournaments and game nights

### 🎨 Design & UX
- **Modern Aesthetics** - Warm café colors combined with playful game elements
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - CSS animations and transitions for enhanced user experience
- **Accessibility** - Built with modern web standards and accessibility in mind

## 🚀 Technology Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0 with custom design system
- **Database**: Supabase (configured but requires setup)
- **Authentication**: Supabase Auth
- **Icons**: Heroicons and emoji-based design
- **Fonts**: Geist Sans and Geist Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About page - café story and team
│   ├── book/           # Dual booking system (tables + events)
│   ├── contact/        # Contact page with form
│   ├── events/         # Events listing and management
│   ├── games/          # Game library with filtering
│   ├── join/           # Login/signup (legacy, can be updated)
│   ├── menu/           # Interactive café menu
│   ├── api/            # API routes for contact, events, etc.
│   ├── globals.css     # Enhanced design system and animations
│   ├── layout.tsx      # Root layout with metadata
│   └── page.tsx        # Homepage with all key sections
└── components/
    ├── Navbar.tsx      # Enhanced navigation with café branding
    ├── Footer.tsx      # Rich footer with hours, contact, newsletter
    ├── AuthProvider.tsx # Authentication context
    ├── EventCard.tsx   # Event display component
    ├── GameCard.tsx    # Game display component (legacy)
    └── TestimonialCard.tsx # Customer testimonials
```

## 🎯 Key Pages

### 🏠 Homepage (`/`)
- Hero section with café branding
- Features showcase (food, games, community)
- Menu highlights with pricing
- Featured games carousel
- Customer testimonials
- Upcoming events preview

### 🍽️ Menu (`/menu`)
- Interactive category navigation
- Detailed food and beverage listings
- Dietary information and badges
- Special offers section
- Gamer-friendly design notes

### 🎲 Games (`/games`)
- Advanced filtering system
- 200+ game database with ratings
- Search functionality
- Difficulty and player count filters
- Staff picks highlighting

### 📅 Booking (`/book`)
- Dual booking system:
  - **Café Table Booking**: Date, time, guests, special requests
  - **Game Event Booking**: Event type, skill level, game preferences
- User-friendly forms with validation
- No login required for booking

### ℹ️ About (`/about`)
- Café story and mission
- Founder profiles (Chef Maria & Alex Chen)
- Team introduction
- Values and sustainability
- Statistics and achievements

## 🎨 Design System

### Color Palette
- **Café Browns**: Warm, inviting earth tones
- **Game Blues/Purples**: Playful, strategic colors
- **Accent Orange/Red**: Energy and excitement
- **Supporting Greens**: Growth and freshness

### Typography
- **Headers**: Bold, modern styling with gradients
- **Body**: Clean, readable with proper line spacing
- **Accents**: Fun emoji integration throughout

### Components
- **Cards**: Consistent hover effects and shadows
- **Buttons**: Three styles (primary, secondary, outline)
- **Forms**: Clean inputs with focus states
- **Navigation**: Smooth transitions and mobile-friendly

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- Optional: Supabase account for full functionality

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd diceandfork

# Install dependencies
npm install

# Set up environment variables (optional)
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev

# Build for production
npm run build
```

### Environment Variables
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🔧 Configuration

### Supabase Setup (Optional)
If you want full functionality including contact forms and event registration:

1. Create a Supabase project
2. Set up these tables:
   - `contact_messages` - for contact form submissions
   - `events` - for event management
   - `event_registrations` - for user registrations
3. Configure authentication settings
4. Add your credentials to `.env.local`

### Customization
- **Menu Items**: Edit `src/app/menu/page.tsx` to update café offerings
- **Games**: Update `src/app/games/page.tsx` for your game collection
- **Branding**: Modify colors in `src/app/globals.css`
- **Content**: Update text throughout the site to match your café

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+): Full layout with all features
- **Tablet** (768px-1199px): Adapted layout with touch-friendly elements  
- **Mobile** (320px-767px): Mobile-first design with collapsible navigation

## 🎯 Key Features Implemented

✅ **Complete Redesign** - Modern café aesthetic
✅ **Booking System** - Tables and events without login requirement
✅ **Interactive Menu** - Categories, pricing, dietary info
✅ **Game Library** - Advanced filtering and search
✅ **Responsive Design** - Mobile-first approach
✅ **Smooth Animations** - Enhanced user experience
✅ **SEO Optimization** - Proper metadata and structure
✅ **Performance** - Optimized builds and fast loading

## 🚀 Deployment

The site is ready for deployment to:
- **Vercel** (recommended for Next.js)
- **Netlify** 
- **Any Node.js hosting provider**

Simply connect your repository and deploy - the build process is fully configured.

## 🎉 Result

A fully functional, beautiful website for Dice & Fork that perfectly captures the unique café + board game concept. The site features:

- **Modern Design**: Clean, inviting aesthetic that appeals to both food lovers and gamers
- **Full Functionality**: Complete booking system, menu display, and game library
- **Great UX**: Smooth navigation, responsive design, and intuitive user flows
- **Production Ready**: Optimized build, proper SEO, and deployment-ready

Perfect for a café that wants to stand out by combining great food with the joy of board gaming! 🎲☕

---

**Built with ❤️ for board game lovers and food enthusiasts**
