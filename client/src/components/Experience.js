import React from 'react';

const Experience = () => {
  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#faf9f6]" 
      id="experience"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        
        {/* Education Section */}
        <div>
          <h2 className="font-display text-4xl text-[#1a1c1a] mb-12">Education</h2>
          <div className="relative pl-8 border-l border-[#7b5455]/20 space-y-12">
            
            {/* Timeline Item */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2020 - Present
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">
                Bachelor of Business Administration
              </h3>
              <p className="font-body text-base text-[#685b5c] mb-3">
                Major in Operations &amp; HR Management
              </p>
              <p className="font-body text-sm text-[#504444] leading-relaxed">
                Focus on sustainable business practices, organizational behavior, and strategic supply chain management.
              </p>
            </div>
            
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <h2 className="font-display text-4xl text-[#1a1c1a] mb-12">Experience</h2>
          <div className="relative pl-8 border-l border-[#7b5455]/20 space-y-12">
            
            {/* Experience Card Item 1 */}
            <div className="relative glass-card p-6 rounded-xl -ml-6 border border-[#7b5455]/10">
              <div className="absolute -left-[26px] top-8 w-3 h-3 bg-[#7b5455] rounded-full shadow-[0_0_10px_rgba(123,84,85,0.5)]"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2022 - 2023
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">Team Leader</h3>
              <p className="font-body text-base text-[#685b5c] mb-4">University Business Project</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Leadership
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Project Management
                </span>
              </div>
            </div>

            {/* Experience Hover Item 2 */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] rounded-xl transition-all duration-300">
              <div className="absolute -left-[26px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2021 - 2022
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">Class Secretary</h3>
              <p className="font-body text-base text-[#685b5c] mb-4">Academic Administration</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Coordination
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Communication
                </span>
              </div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
