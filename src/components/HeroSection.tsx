import React, { useState } from 'react';
import { Heart, Star, Sparkles, ArrowRight, Play, Download } from 'lucide-react';

export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden font-yuruka pt-4">

      <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 opacity-80"></div>
      
      <div className="absolute inset-0 backdrop-blur-md bg-white/20"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-pink-300/30 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-blue-300/50 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-pink-400/60 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
        
        <Heart className="absolute top-1/4 left-16 w-6 h-6 text-pink-300 animate-bounce opacity-60" style={{animationDelay: '0s'}} />
        <Star className="absolute top-1/2 right-16 w-4 h-4 text-purple-300 animate-pulse opacity-50" style={{animationDelay: '2s'}} />
        <Sparkles className="absolute bottom-1/3 left-1/2 w-5 h-5 text-blue-300 animate-bounce opacity-70" style={{animationDelay: '1.5s'}} />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center space-x-2 bg-white/40 backdrop-blur-md px-6 py-3 rounded-full shadow-lg mb-8 border border-pink-200/50 hover:bg-white/60 transition-all duration-300 transform hover:scale-105">
            <Heart className="w-5 h-5 text-pink-500 animate-pulse" />
            <span className="text-pink-600 font-medium">Selamat Datang di UwU World! ✨</span>
            <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
          </div>

          {/* Main Title - matching navbar logo gradient style */}
          <div className="relative mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 bg-clip-text text-transparent leading-tight mb-4">
              Halo みんな! 
            </h1>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Heart className="w-6 h-6 md:w-8 md:h-8 text-white animate-pulse" />
              </div>
            </div>
          </div>

          {/* Name/Brand */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 mb-4">
            私は <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Willy です</span> 
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Aku adalah seorang pengembang yang mencintai dunia teknologi dan seni. Di sini, aku ingin berbagi petualangan, kreasi, dan kebahagiaan bersama kalian semua! Mari kita ciptakan momen-momen indah bersama UwU App ini!
          </p>

          {/* Call to Action Buttons - matching navbar button style */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 hover:-translate-y-1"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center space-x-2">
                <Heart className="w-5 h-5 animate-pulse" />
                <a href="#project" className='scroll-smooth'>Mulai Petualangan UwU</a>
                <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </div>
              {/* Decorative sparkles */}
              <div className="absolute -top-1 -right-1">
                <Star className="w-4 h-4 text-yellow-300 animate-spin" />
              </div>
            </button>
            

            <button className="group bg-white/40 backdrop-blur-md text-gray-700 px-8 py-4 rounded-full font-semibold text-lg border border-blue-200/50 hover:bg-white/60 hover:border-blue-300 shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center space-x-2">
                <Download className="w-5 h-5 text-blue-500 group-hover:animate-bounce transition-all" />
                
                <a href='/download'>Download cv AKU uwu</a>
              </div>
            </button>
          </div>

          {/* Stats Section - matching navbar profile section style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group bg-white/40 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-pink-200/30 hover:bg-white/60 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-110">
                  <Heart className="w-5 h-5 text-white animate-pulse" />
                </div>
                <Sparkles className="w-4 h-4 text-yellow-400 animate-bounce" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-2">
                20+
              </div>
              <div className="text-gray-600 font-medium">Project succces</div>
            </div>
            
            <div className="group bg-white/40 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-purple-200/30 hover:bg-white/60 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-110">
                  <Star className="w-5 h-5 text-white animate-spin" />
                </div>
                <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent mb-2">
                20+
              </div>
              <div className="text-gray-600 font-medium">Customer Bahagia</div>
            </div>
            
            <div className="group bg-white/40 backdrop-blur-md rounded-2xl p-6 shadow-lg border border-blue-200/30 hover:bg-white/60 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center justify-center space-x-2 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-pink-500 rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all group-hover:scale-110">
                  <Sparkles className="w-5 h-5 text-white animate-bounce" />
                </div>
                <Star className="w-4 h-4 text-purple-400 animate-pulse" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-pink-600 bg-clip-text text-transparent mb-2">
                99.9%
              </div>
              <div className="text-gray-600 font-medium">Tingkat Keberhasilan</div>
            </div>
          </div>

          {/* Bottom decorative text */}
          <div className="mt-12 inline-flex items-center space-x-2 bg-white/30 backdrop-blur-md px-4 py-2 rounded-full border border-pink-200/30">
            <Heart className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="text-gray-600 text-sm font-medium">Made with lots of Care and love</span>
            <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
          </div>
        </div>
      </div>
    </section>
  );
}