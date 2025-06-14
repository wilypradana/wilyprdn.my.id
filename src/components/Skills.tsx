import React, { useState } from 'react';
import { Heart, Star, Sparkles, Code, Palette, Server, Settings, ArrowRight } from 'lucide-react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const skills = [
    // Frontend Technologies
    {
      id: 1,
      name: "HTML",
      image: "HTML.png",
      category: "Frontend",
      level: 90,
      description: "Markup language for web structure"
    },
    {
      id: 2,
      name: "CSS",
      image: "css.png",
      category: "Frontend",
      level: 85,
      description: "Styling and responsive design"
    },
    
    {
      id: 4,
      name: "TypeScript",
      image: "TypeScript.png",
      category: "Frontend",
      level: 80,
      description: "Type-safe JavaScript development"
    },
    {
      id: 5,
      name: "React",
      image: "React.png",
      category: "Frontend",
      level: 85,
      description: "Component-based UI library"
    },
    {
      id: 6,
      name: "Next.js",
      image: "Next.js.png",
      category: "Frontend",
      level: 82,
      description: "Full-stack React framework"
    },
    {
      id: 7,
      name: "Vue.js",
      image: "Vue.png",
      category: "Frontend",
      level: 75,
      description: "Progressive JavaScript framework"
    },
    {
      id: 8,
      name: "Svelte",
      image: "Svelte.png",
      category: "Frontend",
      level: 70,
      description: "Compile-time optimized framework"
    },
    {
      id: 9,
      name: "Tailwind CSS",
      image: "Tailwindcss6.png",
      category: "Frontend",
      level: 90,
      description: "Utility-first CSS framework"
    },
    {
      id: 10,
      name: "HTMX",
      image: "htmx.png",
      category: "Frontend",
      level: 65,
      description: "Modern web interactions"
    },

    // Backend Technologies
    {
      id: 11,
      name: "Node.js",
      image: "Node.js.png",
      category: "Backend",
      level: 80,
      description: "JavaScript runtime for servers"
    },
    {
      id: 12,
      name: "Laravel",
      image: "Laravel.png",
      category: "Backend",
      level: 78,
      description: "PHP web application framework"
    },
    {
      id: 13,
      name: "Golang",
      image: "Golang.png",
      category: "Backend",
      level: 72,
      description: "Fast and efficient backend language"
    },

    // Tools & DevOps
    {
      id: 14,
      name: "Docker",
      image: "DockerLogo.png",
      category: "DevOps",
      level: 75,
      description: "Containerization platform"
    },
    {
      id: 15,
      name: "GitHub",
      image: "GitHub.png",
      category: "DevOps",
      level: 88,
      description: "Version control and collaboration"
    },
    {
      id: 16,
      name: "GitLab",
      image: "GitLab.png",
      category: "DevOps",
      level: 70,
      description: "DevOps lifecycle platform"
    },
    {
      id: 17,
      name: "Cloudflare",
      image: "Cloudflare.png",
      category: "DevOps",
      level: 68,
      description: "Web performance & security"
    },
    {
      id: 18,
      name: "Ubuntu",
      image: "Ubuntu.png",
      category: "DevOps",
      level: 80,
      description: "Linux operating system"
    },
    {
      id: 19,
      name: "Vite",
      image: "Vite.png",
      category: "DevOps",
      level: 85,
      description: "Fast build tool and dev server"
    },
    {
      id: 20,
      name: "Visual Studio Code",
      image: "VisualStudioCode.png",
      category: "DevOps",
      level: 95,
      description: "Code editor and IDE"
    },
    {
      id: 21,
      name: "VIM",
      image: "VIM.png",
      category: "DevOps",
      level: 60,
      description: "Terminal-based text editor"
    },

    // Design & Others
    {
      id: 22,
      name: "Figma",
      image: "Figma.png",
      category: "Design",
      level: 75,
      description: "UI/UX design and prototyping"
    },
    {
      id: 23,
      name: "Discord",
      image: "Discord.png",
      category: "Others",
      level: 90,
      description: "Community building and bots"
    },
    {
      id: 24,
      name: "Twitter/X",
      image: "X.png",
      category: "Others",
      level: 85,
      description: "Social media and networking"
    }
  ];

  const categories = ["All", "Frontend", "Backend", "DevOps", "Design", "Others"];

  const filteredSkills = activeCategory === "All" 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'Frontend':
        return <Palette className="w-4 h-4" />;
      case 'Backend':
        return <Server className="w-4 h-4" />;
      case 'DevOps':
        return <Settings className="w-4 h-4" />;
      case 'Design':
        return <Sparkles className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-yuruka ">
      {/* Background gradient - matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-200/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-blue-200/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Floating decorations */}
        <Heart className="absolute top-1/4 left-16 w-5 h-5 text-pink-300 animate-bounce opacity-60" style={{animationDelay: '0s'}} />
        <Star className="absolute top-1/2 right-16 w-4 h-4 text-purple-300 animate-pulse opacity-50" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute bottom-1/3 right-1/4 w-5 h-5 text-blue-300 animate-bounce opacity-70" style={{animationDelay: '1.5s'}} />
        <Code className="absolute top-1/3 left-1/3 w-4 h-4 text-green-300 animate-pulse opacity-60" style={{animationDelay: '1s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg mb-6 border border-pink-200/50">
            <Code className="w-5 h-5 text-purple-500 animate-pulse" />
            <span className="text-purple-600 font-medium">My UwU Skills ✨</span>
            <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Kemampuan KUwu
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Kumpulan skill yang dipelajari dengan penuh semangat dan cinta! 
            Setiap teknologi dipelajari dengan hati yang tulus dan dedikasi tinggi 💖
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/50 backdrop-blur-md text-gray-700 hover:bg-white/70 border border-pink-200/50'
              }`}
            >
              {getCategoryIcon(category)}
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className="group relative bg-white/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-pink-200/30 hover:border-pink-300/50 transition-all duration-300 hover:scale-105 p-6"
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Icon */}
              <div className="relative mb-4">
                <div className=" mx-auto bg-white/70 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
                  <img
                    src={"../public/icon/" + skill.image}
                    alt={skill.name}
                    className="w-52 h-52 object-contain transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `data:image/svg+xml;base64,${btoa(`
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                          viewBox="0 0 24 24" fill="none" stroke="currentColor"
                          stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                          <circle cx="8.5" cy="8.5" r="1.5"/>
                          <polyline points="21,15 16,10 5,21"/>
                        </svg>
                      `)}`;
                    }}
                  />

                </div>
                
                {/* Category Badge */}
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-400 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                  {getCategoryIcon(skill.category)}
                </div>
              </div>

              {/* Skill Info */}
              <div className="text-center">
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-purple-600 transition-colors mb-2">
                  {skill.name}
                </h3>
                
              
                {/* Description (shows on hover) */}
                <div className={`text-xs text-gray-600 leading-relaxed transition-all duration-300 ${
                  hoveredSkill === skill.id ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                } overflow-hidden`}>
                  {skill.description}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2">
                <Heart className="w-3 h-3 text-pink-400 animate-pulse opacity-60" />
              </div>
              
              <div className="absolute bottom-2 left-2">
                <Star className="w-3 h-3 text-yellow-400 animate-spin opacity-50" style={{animationDelay: '1s'}} />
              </div>

              {/* Hover Sparkle Effect */}
              <div className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${
                hoveredSkill === skill.id ? 'opacity-100' : 'opacity-0'
              }`}>
                <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 animate-bounce" />
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.slice(1).map((category, index) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const avgLevel = Math.round(categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length);
            
            return (
              <div key={category} className="bg-white/50 backdrop-blur-md rounded-2xl p-6 text-center border border-pink-200/30 hover:border-pink-300/50 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center mb-3">
                  {getCategoryIcon(category)}
                </div>
                <h4 className="font-bold text-gray-800 mb-2">{category}</h4>
                <p className="text-sm text-gray-600 mb-2">{categorySkills.length} Skills</p>
                <div className="text-xs text-purple-600 font-medium">Avg: {avgLevel}%</div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-pink-200/50 hover:bg-white/70 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
            <span className="text-gray-700 font-medium">aku akan terus belajar  </span>
            
            <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
          </div>
        </div>
      </div>
    </section>
  );
}