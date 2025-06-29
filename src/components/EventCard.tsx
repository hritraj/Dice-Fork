interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees: number;
  maxAttendees: number;
  imageUrl?: string;
  isFeatured?: boolean;
}

export default function EventCard({ 
  title, 
  date, 
  time, 
  location, 
  description, 
  attendees, 
  maxAttendees,
  imageUrl,
  isFeatured = false
}: EventCardProps) {
  const attendancePercentage = (attendees / maxAttendees) * 100;
  const isFull = attendees >= maxAttendees;

  return (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 ${isFeatured ? 'ring-2 ring-purple-500' : ''}`}>
      {/* Event Image */}
      <div className="h-48 bg-gradient-to-br from-purple-50 to-blue-50 relative overflow-hidden border-b border-gray-100">
        {imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-purple-400 text-6xl font-bold opacity-60">
              🎲
            </div>
          </div>
        )}
        {isFeatured && (
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-purple-600 text-white text-xs font-bold rounded-full shadow-sm">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className={`px-2 py-1 rounded-full text-xs font-medium shadow-sm ${
            isFull ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
          }`}>
            {isFull ? 'Full' : `${attendees}/${maxAttendees}`}
          </span>
        </div>
      </div>

      {/* Event Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-2">
          {title}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Event Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {date}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {time}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <svg className="w-4 h-4 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {location}
          </div>
        </div>

        {/* Attendance Bar */}
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span>Attendance</span>
            <span>{attendees}/{maxAttendees}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className={`h-2 rounded-full transition-all duration-300 ${
                isFull ? 'bg-red-500' : 'bg-green-500'
              }`}
              style={{ width: `${Math.min(attendancePercentage, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Action Button */}
        <button 
          className={`w-full py-2 px-4 rounded-lg font-medium transition-all duration-200 ${
            isFull 
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 shadow-sm'
          }`}
          disabled={isFull}
        >
          {isFull ? 'Event Full' : 'Join Event'}
        </button>
      </div>
    </div>
  );
} 