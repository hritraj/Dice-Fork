import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
  joinDate?: string;
}

export default function TestimonialCard({ 
  name, 
  role, 
  content, 
  rating, 
  avatar,
  joinDate 
}: TestimonialCardProps) {
  return (
    <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:scale-[1.02] shadow-xl hover:shadow-2xl">
      {/* Quote Icon */}
      <div className="text-4xl text-yellow-300 mb-4 opacity-80">
        &ldquo;
      </div>
      
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-300' : 'text-gray-400'
            } transition-colors`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="ml-2 text-sm text-gray-300 font-medium">
          ({rating}/5)
        </span>
      </div>

      {/* Testimonial Content */}
      <blockquote className="text-gray-100 text-lg leading-relaxed mb-8 italic">
        {content}
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4">
        <div className="relative">
          {avatar ? (
            <div className="w-14 h-14 rounded-2xl overflow-hidden ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-300">
              <Image
                src={avatar}
                alt={name}
                width={56}
                height={56}
                className="w-full h-full object-cover"
              />
            </div>
          ) : (
            <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center ring-2 ring-white/30 group-hover:ring-white/50 transition-all duration-300">
              <span className="text-white font-bold text-xl">
                {name.charAt(0)}
              </span>
            </div>
          )}
          
          {/* Online indicator */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-white/20 animate-pulse"></div>
        </div>
        
        <div className="flex-1">
          <div className="font-bold text-white text-lg group-hover:text-yellow-300 transition-colors">
            {name}
          </div>
          <div className="text-gray-300 text-sm font-medium mb-1">
            {role}
          </div>
          {joinDate && (
            <div className="text-gray-400 text-xs">
              {joinDate}
            </div>
          )}
        </div>
        
        {/* Verified Badge */}
        <div className="bg-blue-500/20 p-2 rounded-xl backdrop-blur-sm">
          <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
} 