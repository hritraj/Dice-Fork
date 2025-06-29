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

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100">
      {/* Game Image */}
      <div className="h-48 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden border-b border-gray-100">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            width={192}
            height={192}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-purple-400 text-6xl font-bold opacity-60">
              {title.charAt(0)}
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium shadow-sm ${getDifficultyColor(difficulty)}`}>
            {difficulty}
          </span>
        </div>
      </div>

      {/* Game Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Game Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {players}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
        </div>

        {/* Category Badge */}
        <div className="flex items-center justify-between">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full shadow-sm">
            {category}
          </span>
          <button className="text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors">
            Learn More →
          </button>
        </div>
      </div>
    </div>
  );
} 