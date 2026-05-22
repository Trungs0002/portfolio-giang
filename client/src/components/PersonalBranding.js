import React from 'react';

const PersonalBranding = () => {
  const mainColors = [
    { name: 'Cream', hex: '#faf9f6', border: 'border-gray-200' },
    { name: 'Beige', hex: '#f4f3f1', border: 'border-gray-300' },
    { name: 'Dark Brown', hex: '#7b5455', border: 'border-transparent' },
    { name: 'Denim Blue', hex: '#4a6b82', border: 'border-transparent' }
  ];

  const galleryItems = [
    {
      title: 'Personal Brand Identity Board',
      type: 'Branding guideline graphic',
      purpose: 'To define and present my personal brand identity across website, LinkedIn, and professional materials.',
      tools: 'Canva',
      image: '/brand-identity.png',
      fallbackGradient: 'from-[#7b5455]/20 to-[#f4f3f1]/40',
      fallbackText: 'Identity Board'
    },
    {
      title: 'LinkedIn Banner',
      type: 'Personal branding banner',
      purpose: 'To present my professional positioning as an International Business student and future operations professional.',
      tools: 'Canva',
      image: '/linkedin-banner.png',
      fallbackGradient: 'from-[#4a6b82]/20 to-[#faf9f6]/40',
      fallbackText: 'LinkedIn Banner'
    }
  ];

  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#faf9f6]" 
      id="branding"
    >
      <div className="max-w-[1000px] mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase block">
            07. Personal Branding Materials
          </span>
          <h2 className="font-display text-4xl text-[#1a1c1a]">Branding & Visuals</h2>
          <div className="w-12 h-[1px] bg-[#7b5455] mx-auto"></div>
          <p className="font-body text-base text-[#504444] max-w-xl mx-auto leading-relaxed">
            A collection of Canva-based visuals created for my Personal Brand, LOOM project, LinkedIn presence, and portfolio communication.
          </p>
        </div>

        {/* Visual Identity Mini-board */}
        <div className="glass-card rounded-2xl p-8 lg:p-12 shadow-[0_20px_60px_rgba(107,91,91,0.04)] border border-[#7b5455]/10 max-w-4xl mx-auto bg-[#ffffff]/60 backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Swatches and Button */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-body text-xs font-semibold text-[#7b5455] tracking-wider uppercase block">
                  Design Guidelines
                </span>
                <h3 className="font-display text-3xl text-[#1a1c1a] italic">Visual Identity</h3>
              </div>

              {/* Color Swatches Grid */}
              <div className="space-y-3">
                <span className="block font-body text-[11px] font-bold text-[#504444] tracking-wide uppercase">
                  Main Palette:
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {mainColors.map((color, idx) => (
                    <div key={idx} className="text-center space-y-1">
                      <div 
                        className={`w-full aspect-square rounded-lg shadow-sm border ${color.border}`} 
                        style={{ backgroundColor: color.hex }}
                      />
                      <span className="block font-body text-[10px] text-[#685b5c] font-medium leading-none">
                        {color.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Canva Link */}
              <div className="pt-2">
                <a 
                  href="https://www.canva.com/design/DAHKZr30jBo/LZFgt77DFFOqipfwUDXYCQ/edit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#7b5455] text-white rounded font-body text-xs font-bold hover:bg-[#603d3e] hover:shadow-md transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                  View my work on Canva
                </a>
              </div>
            </div>

            {/* Right: Identity Details */}
            <div className="lg:col-span-7 space-y-4 border-t lg:border-t-0 lg:border-l border-[#7b5455]/10 pt-6 lg:pt-0 lg:pl-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-body text-sm text-[#504444]">
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-[#7b5455] uppercase tracking-wide">
                    Tone & Vibe
                  </span>
                  <p className="text-sm">Clean, professional, minimal, warm</p>
                </div>
                <div className="space-y-1">
                  <span className="block text-xs font-bold text-[#7b5455] uppercase tracking-wide">
                    Design Style
                  </span>
                  <p className="text-sm">Soft layout, clear typography, portfolio-oriented visuals</p>
                </div>
                <div className="sm:col-span-2 space-y-1">
                  <span className="block text-xs font-bold text-[#7b5455] uppercase tracking-wide">
                    Purpose
                  </span>
                  <p className="text-sm leading-relaxed">
                    Build a consistent image across website, LinkedIn, project portfolio, and digital content.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-2xl overflow-hidden shadow-md border border-[#7b5455]/10 bg-[#ffffff]/40 flex flex-col group hover:shadow-lg transition-shadow duration-300"
            >
              {/* Thumbnail Frame */}
              <div className="aspect-[16/9] w-full overflow-hidden relative bg-[#efeeeb]">
                <div className="absolute inset-0 bg-[#7b5455]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {/* Fallback Graphic */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.fallbackGradient} flex items-center justify-center p-6`}>
                  <div className="text-center space-y-1">
                    <span className="font-display text-xl text-[#7b5455]/40 italic block select-none">
                      {item.fallbackText}
                    </span>
                    <span className="font-body text-[10px] text-[#7b5455]/50 tracking-widest uppercase block select-none">
                      {item.tools} Project
                    </span>
                  </div>
                </div>
                <img 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 absolute inset-0 group-hover:scale-105" 
                  src={item.image}
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Detailed Content */}
              <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="px-2.5 py-0.5 bg-[#7b5455]/10 text-[#7b5455] rounded text-[10px] font-bold uppercase tracking-wider block w-fit">
                    {item.type}
                  </span>
                  <h4 className="font-display text-lg text-[#1a1c1a] leading-snug">
                    {item.title}
                  </h4>
                  <p className="font-body text-xs text-[#504444] leading-relaxed">
                    {item.purpose}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 pt-2 border-t border-[#7b5455]/5">
                  <span className="material-symbols-outlined text-[#7b5455] text-sm">build</span>
                  <span className="font-body text-[10px] text-[#685b5c] font-semibold uppercase tracking-wider">
                    Tools: {item.tools}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PersonalBranding;
