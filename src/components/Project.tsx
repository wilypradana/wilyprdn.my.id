import React, { useState } from 'react';
import { Heart, Star, Sparkles, ExternalLink, Github, Eye, ArrowRight } from 'lucide-react';

export default function ProjectSection() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "vanleeuwenicecream.com",
      description: "slice web vanleeuwenicecream ",
      image: "https://ucarecdn.com/3d0a29c1-85cd-479f-8bdc-ab71accacf2c/vanluwen.png",
      tags: ["TailwindCSS"],
      demoUrl: "https://demotubberota.vercel.app/",
      githubUrl: "https://github.com/wilypradana/tubberota",
      category: "Landing Page"
    },
    {
      id: 2,
      title: "myrepublic slicing",
      description: "landing page myrepublic",
      image: "https://ucarecdn.com/25726bad-bd2e-443a-86bb-b4bb71b6358e/myrepublic.png",
      tags: ["TailwindCSS"],
      demoUrl: "https://myrepublic-rouge.vercel.app/",
      githubUrl: "https://github.com/wilypradana/myrepublic",
      category: "Landing Page"
    },
    {
      id: 3,
      title: "tebah buah",
      description: "Main game tebak buah",
      image: "https://ucarecdn.com/60a0112a-a493-4de9-b52d-77704f7d43ad/tebakbuah.png",
      tags: ["React", "TailwindCSS", "GAME"],
      demoUrl: "https://chosseafruitremake.vercel.app/",
      githubUrl: "https://github.com/wilypradana/chosseafruitremake",
      category: "Web App"
    },
    {
      id: 4,
      title: "healthcare landing page with AI",
      description: "chatbot landing page",
      image: "https://ucarecdn.com/24c53da8-bd8b-452d-bdda-e7aa346dda5b/healt.png",
      tags: ["React", "TailwindCSS", "OPENAI"],
      demoUrl: "https://healthwisehive.vercel.app/",
      githubUrl: "https://github.com/wilypradana/healtypublic",
      category: "Web App"
    },
  ];

  const categories = ["All", "Web App", "Landing Page"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="project" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-yuruka ">
      {/* Background gradient - matching other sections */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"></div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 bg-pink-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-purple-200/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 bg-blue-200/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        
        <Heart className="absolute top-1/4 left-16 w-5 h-5 text-pink-300 animate-bounce opacity-60" style={{animationDelay: '0s'}} />
        <Star className="absolute top-1/2 right-16 w-4 h-4 text-purple-300 animate-pulse opacity-50" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute bottom-1/3 right-1/4 w-5 h-5 text-blue-300 animate-bounce opacity-70" style={{animationDelay: '1.5s'}} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-white/60 backdrop-blur-md px-6 py-3 rounded-full shadow-lg mb-6 border border-pink-200/50">
            <Sparkles className="w-5 h-5 text-purple-500 animate-spin" />
            <span className="text-purple-600 font-medium">My UwU Projects ✨</span>
            <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent mb-4">
            Karya-Karya KUwu
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Kumpulan project yang dibuat dengan penuh cinta dan kebahagiaan! 
            Setiap karya memiliki sentuhan yang bikin hati adem 💖
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                  : 'bg-white/50 backdrop-blur-md text-gray-700 hover:bg-white/70 border border-pink-200/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg hover:shadow-xl border border-pink-200/30 hover:border-pink-300/50 transition-all duration-300 hover:scale-105"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* --- PERBAIKAN DIMULAI: Overlay buttons --- */}
                <div className={`absolute inset-0 flex items-center justify-center space-x-3 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {/* Tombol View diubah menjadi link ke Demo */}
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white transition-colors shadow-lg">
                    <Eye className="w-5 h-5 text-gray-700" />
                  </a>
                  {/* Tombol ExternalLink diubah menjadi link ke Demo */}
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white transition-colors shadow-lg">
                    <ExternalLink className="w-5 h-5 text-gray-700" />
                  </a>
                  {/* Tombol Github diubah menjadi link ke GitHub */}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white/90 backdrop-blur-md p-3 rounded-full hover:bg-white transition-colors shadow-lg">
                    <Github className="w-5 h-5 text-gray-700" />
                  </a>
                </div>
                {/* --- PERBAIKAN SELESAI --- */}

                <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md text-gray-700 px-3 py-1 rounded-full text-sm font-medium border border-pink-200/50">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
                    <Star className="w-4 h-4 text-yellow-400 animate-spin" style={{animationDelay: '0.5s'}} />
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gradient-to-r from-pink-100 to-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium border border-purple-200/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* --- PERBAIKAN DIMULAI: Action Buttons --- */}
                <div className="flex space-x-3">
                  {/* Tombol Live Demo diubah menjadi link */}
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white py-2 px-4 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                    <span>Live Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  {/* Tombol Code diubah menjadi link */}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-white/70 backdrop-blur-md text-gray-700 py-2 px-4 rounded-full font-medium border border-gray-200 hover:bg-white/90 transition-all duration-300 hover:scale-105 flex items-center justify-center">
                    <span>Code</span>
                  </a>
                </div>
                {/* --- PERBAIKAN SELESAI --- */}
              </div>

              {/* Decorative elements */}
              <div className="absolute top-2 right-2">
                <Sparkles className="w-4 h-4 text-purple-400 animate-bounce opacity-60" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a href='https://github.com/wilypradana' target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 bg-white/50 backdrop-blur-md px-8 py-4 rounded-full shadow-lg border border-pink-200/50 hover:bg-white/70 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group">
            <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
            <span className="text-gray-700 font-medium">Lihat Semua Project</span>
            <ArrowRight className="w-5 h-5 text-purple-500 group-hover:translate-x-1 transition-transform" />
            <Sparkles className="w-5 h-5 text-yellow-400 animate-spin" />
          </a>
        </div>
      </div>
    </section>
  );
}