import Image from 'next/image';

interface GameCardProps {
  title: string;
  description: string;
  players: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  imageUrl?: string;
}

export default function GameCard({ 
  title, 
  description, 
  players, 
  duration, 
  difficulty, 
  category,
  imageUrl 
}: GameCardProps) {
  const getDifficultyConfig = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return {
          color: 'bg-gradient-to-r from-green-500 to-emerald-500 text-white',
          bgColor: 'from-green-50 to-emerald-50',
          icon: '😊'
        };
      case 'Medium':
        return {
          color: 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white',
          bgColor: 'from-yellow-50 to-orange-50',
          icon: '🤔'
        };
      case 'Hard':
        return {
          color: 'bg-gradient-to-r from-red-500 to-pink-500 text-white',
          bgColor: 'from-red-50 to-pink-50',
          icon: '🧠'
        };
      default:
        return {
          color: 'bg-gray-500 text-white',
          bgColor: 'from-gray-50 to-gray-100',
          icon: '🎲'
        };
    }
  };

  const difficultyConfig = getDifficultyConfig(difficulty);

  return (
    <div className="group relative bg-white rounded-3xl shadow-soft hover:shadow-hard transition-all duration-500 overflow-hidden border border-gray-100 hover:border-purple-200 transform hover:scale-[1.02]">
      {/* Game Image */}
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
              {title.charAt(0)}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20"></div>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        
        {/* Difficulty Badge */}
        <div className="absolute top-4 right-4">
          <div className={`px-4 py-2 rounded-2xl text-sm font-bold shadow-lg backdrop-blur-sm ${difficultyConfig.color}`}>
            <span className="flex items-center gap-2">
              <span>{difficultyConfig.icon}</span>
              {difficulty}
            </span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-2xl text-xs font-semibold shadow-lg">
            {category}
          </div>
        </div>
      </div>

      {/* Game Content */}
      <div className="p-6">
        <h3 className="text-2xl font-black text-gray-900 group-hover:text-purple-600 transition-colors mb-3 leading-tight">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Game Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center text-gray-700">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-purple-200 transition-colors">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">{players}</div>
              <div className="text-sm text-gray-500">Players</div>
            </div>
          </div>
          
          <div className="flex items-center text-gray-700">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mr-3 group-hover:bg-blue-200 transition-colors">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <div className="font-semibold">{duration}</div>
              <div className="text-sm text-gray-500">Play Time</div>
            </div>
          </div>
        </div>

        {/* Difficulty Indicator */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Complexity Level</span>
            <span className="text-sm font-bold text-purple-600">
              {difficulty}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-500 ease-out bg-gradient-to-r ${
                difficulty === 'Easy' 
                  ? 'from-green-500 to-emerald-500' 
                  : difficulty === 'Medium'
                    ? 'from-yellow-500 to-orange-500'
                    : 'from-red-500 to-pink-500'
              }`}
              style={{ 
                width: difficulty === 'Easy' ? '33%' : difficulty === 'Medium' ? '66%' : '100%' 
              }}
            ></div>
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl group">
          <span className="flex items-center justify-center gap-2">
            <svg className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Learn More
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
} 