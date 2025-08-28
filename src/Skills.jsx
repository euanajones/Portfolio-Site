import { useState } from 'react';

function SkillsDisplay() {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      color: "blue",
      skills: [
        { name: "React", level: 25, icon: "⚛️" },
        { name: "JavaScript", level: 35, icon: "🟨" },
        { name: "CSS/SCSS", level: 75, icon: "🎨" },
        { name: "Tailwind CSS", level: 80, icon: "💨" },
      ]
    },
    backend: {
      title: "Backend Development",
      color: "green",
      skills: [
        { name: "Python", level: 60, icon: "🐍" },
        { name: "Java", level: 75, icon: "☕️" },
        { name: "Ruby", level: 40, icon: "♦️" },
        { name: "FastAPI", level: 10, icon: "⚡️" }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      color: "purple",
      skills: [
        { name: "Git", level: 70, icon: "📝" },
        { name: "Docker", level: 10, icon: "🐳" },
      ]
    }
  };

  const getColorClasses = (color, type = 'bg') => {
    const colors = {
      blue: {
        bg: 'bg-blue-500',
        light: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-200'
      },
      green: {
        bg: 'bg-green-500',
        light: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-200'
      },
      purple: {
        bg: 'bg-purple-500',
        light: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-200'
      }
    };
    return colors[color][type];
  };

  return (
    <div>
      <div className="max-w-4xl mx-auto">

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg p-6 shadow-lg">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? `${getColorClasses(category.color)} text-white shadow-lg transform scale-105`
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <h3 className="font-semibold text-white text-lg">{skill.name}</h3>
                </div>
                <span className={`text-sm font-medium px-3 py-1 rounded-full backdrop-blur-sm bg-white/20 border border-white/30 text-white`}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-white/20 backdrop-blur-sm rounded-full h-3 border border-white/30">
                  <div
                    className={`h-3 rounded-full ${getColorClasses(skillCategories[activeCategory].color)} transition-all duration-1000 ease-out shadow-lg`}
                    style={{
                      width: `${skill.level}%`,
                      transitionDelay: `${index * 150}ms`
                    }}
                  />
                </div>
                
                {/* Skill level indicator */}
                <div className="flex justify-between text-xs text-white/60 mt-2">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default SkillsDisplay;