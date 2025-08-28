function WorkExperienceCard({ 
  title = "Software Engineer", 
  subtitle = "Tech Company Inc.", 
  dateRange = "Jan 2022 - Present",
  description = "Add your work experience description here..."
}) {
  return (
    <div className="relative p-6 mt-12 mb-12 rounded-xl bg-white/10 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300">
      {/* Header section with title/subtitle and date */}
      <div className="flex justify-between items-start mb-4">
        {/* Title and subtitle */}
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-(--text) mb-1">{title}</h3>
          <h4 className="text-lg font-medium text-(--text)">{subtitle}</h4>
        </div>
        
        {/* Date range */}
        <div className="text-sm font-medium text-(--background) bg-(--text) px-3 py-1 rounded-full">
          {dateRange}
        </div>
      </div>
      
      {/* Description area */}
      <div className="text-(--primary) leading-relaxed">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>
      
      {/* Subtle glass effect overlay */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default WorkExperienceCard;