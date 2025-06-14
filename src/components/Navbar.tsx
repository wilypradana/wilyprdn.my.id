import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Star, Sparkles, Home, FolderGit2, Library } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'project', label: 'Project', icon: FolderGit2 },
    { id: 'skills', label: 'Skills', icon: Library },
  ];

  const handleNavigate = (id) => {
    setActiveItem(id);
    setIsOpen(false); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Efek untuk auto-update item aktif saat scroll manual
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentSectionId = '';
      
      navItems.forEach(item => {
        const section = document.getElementById(item.id);
        if (section) {
          if (section.offsetTop <= scrollPosition) {
            currentSectionId = item.id;
          }
        }
      });

      if (currentSectionId) {
        setActiveItem(currentSectionId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className="relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 opacity-80 "></div>
      
      {/* Main navbar */}
      <div className="relative backdrop-blur-md bg-white/30 border-b border-pink-200/50 shadow-lg font-yuruka">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo section */}
            <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => handleNavigate('home')}>
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Heart className="w-5 h-5 text-white animate-pulse" />
                </div>
                <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-400 animate-bounce" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Willy
              </span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                   <button
                      key={item.id}
                      onClick={() => handleNavigate(item.id)}
                      className={`group relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
                        activeItem === item.id
                          ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg'
                          : 'text-gray-700 bg-gray-200 hover:bg-white/50 hover:text-pink-600'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <IconComponent className="w-4 h-4" />
                        <span className="font-medium">{item.label}</span>
                      </div>
                      {activeItem === item.id && (
                        <div className="absolute -top-1 -right-1">
                          <Star className="w-3 h-3 text-yellow-300 animate-spin" />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Profile section */}
            <a href="https://www.instagram.com/journeywily" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center">
              <div className="flex items-center space-x-3 bg-white/40 rounded-full px-4 py-2 hover:bg-white/60 transition-all duration-300 cursor-pointer group">
                <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <span className="text-white font-bold text-sm">I</span>
                </div>
                <span className="text-gray-700 font-medium">Instagram</span>
              </div>
            </a>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-white/40 hover:bg-white/60 transition-all duration-300 transform hover:scale-110"
              >
                {isOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/50 backdrop-blur-md border-t border-pink-200/50">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavigate(item.id)}
                    className={`group w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeItem === item.id
                        ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-white/60 hover:text-pink-600'
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                    {activeItem === item.id && (
                      <Star className="w-4 h-4 text-yellow-300 animate-spin ml-auto" />
                    )}
                  </button>
                );
              })}
              
              {/* Mobile profile section */}
              <div className="mt-4 pt-4 border-t border-pink-200/50">
                 <a href="https://www.instagram.com/journeywily" target="_blank" rel="noopener noreferrer">
                  <div className="flex items-center space-x-3 px-4 py-3 bg-white/40 rounded-xl">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white font-bold">I</span>
                    </div>
                    <div>
                      <p className="text-gray-700 font-medium">Instagram</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}