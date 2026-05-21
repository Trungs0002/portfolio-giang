import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center hero-gradient px-6 md:px-16 py-32 overflow-hidden" 
      id="home"
    >
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="font-body text-sm font-semibold text-[#7b5455] tracking-widest uppercase">
              Portfolio & Curriculum Vitae
            </h2>
            <h1 className="font-display text-5xl md:text-7xl text-[#7b5455] leading-[1.1] tracking-tight">
              Nguyen Minh
              <span className="block italic mt-3 md:mt-5">Giang</span>
            </h1>
          </div>
          <p className="font-body text-lg md:text-xl text-[#504444] max-w-lg leading-relaxed">
            International Business (FTU) | Operations & Reconciliations | Academic Tutoring & Training
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              className="inline-flex items-center justify-center px-8 py-3 bg-[#7b5455] text-white rounded font-body text-sm hover:bg-[#603d3e] transition-colors shadow-sm" 
              href="#cv"
            >
              View CV
            </a>
            <a 
              className="inline-flex items-center justify-center px-8 py-3 bg-transparent border border-[#d4c2c2] text-[#7b5455] rounded font-body text-sm hover:bg-[#efeeeb] transition-colors" 
              href="#projects"
            >
              See Projects
            </a>
            <a 
              className="inline-flex items-center justify-center px-8 py-3 text-[#685b5c] hover:text-[#7b5455] rounded font-body text-sm transition-colors underline underline-offset-4" 
              href="#contact"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:ml-auto">
          {/* Editorial Frame */}
          <div className="absolute inset-0 border border-[#d4a5a5] rounded-xl translate-x-4 translate-y-4 z-0"></div>
          <div className="relative z-10 w-full h-full rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(107,91,91,0.12)]">
            <img 
              alt="Nguyen Minh Giang Portrait" 
              className="w-full h-full object-cover" 
              src="/Avatar.png"
            />
          </div>
          {/* Decorative Blur */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#d4a5a5] rounded-full blur-3xl opacity-30 z-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
