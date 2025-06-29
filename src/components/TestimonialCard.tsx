interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatarUrl?: string;
  rating: number;
}

export default function TestimonialCard({ 
  name, 
  role, 
  content, 
  avatarUrl, 
  rating 
}: TestimonialCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
      {/* Quote Icon */}
      <div className="mb-4">
        <svg className="w-8 h-8 text-purple-200" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
        </svg>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-4">
        {renderStars(rating)}
      </div>

      {/* Content */}
      <p className="text-gray-600 mb-6 leading-relaxed">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 flex items-center justify-center mr-4">
          {avatarUrl ? (
            <img 
              src={avatarUrl} 
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          ) : (
            <span className="text-white font-bold text-lg">
              {name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
} 