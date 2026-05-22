import React, { useState } from 'react';

const Projects = () => {
  const [showLoom, setShowLoom] = useState(false);
  const [showReconciliation, setShowReconciliation] = useState(false);

  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#f4f3f1]" 
      id="projects"
    >
      <div className="max-w-[1000px] mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase block">
            Portfolio & Projects
          </span>
          <h2 className="font-display text-4xl text-[#1a1c1a]">Featured Work</h2>
          <div className="w-12 h-[1px] bg-[#7b5455] mx-auto"></div>
        </div>

        <div className="space-y-16">
          {/* Project 1: LOOM Denim */}
          <div className="glass-card rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(107,91,91,0.05)] border border-[#7b5455]/10 max-w-4xl mx-auto bg-[#faf9f6]/80 backdrop-blur-md transition-all duration-300">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Part */}
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto w-full overflow-hidden relative bg-[#efeeeb] min-h-[320px] lg:min-h-full group">
                <div className="absolute inset-0 bg-[#7b5455]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {/* Fallback pattern */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7b5455]/20 to-[#6b8b80]/20 flex items-center justify-center p-8">
                  <div className="text-center space-y-2">
                    <span className="font-display text-3xl text-[#7b5455]/30 tracking-widest block font-bold select-none">LOOM</span>
                    <span className="font-body text-[10px] text-[#7b5455]/40 tracking-widest uppercase block select-none">DENIM &bull; EST. 2026</span>
                  </div>
                </div>
                <img 
                  alt="LOOM Denim Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 absolute inset-0 group-hover:scale-105" 
                  src="/loom.png"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Content Part */}
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="font-body text-xs font-bold text-[#7b5455] uppercase tracking-wider">
                      LOOM Sustainable Startup Project
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-[#7b5455] text-white shadow-sm tracking-wide uppercase">
                      Top 15 I-Impact Competition 2026
                    </span>
                  </div>
                  <h3 className="font-display text-3xl text-[#1a1c1a] leading-tight">
                    Project 1: LOOM Denim — Sustainable Fashion Branding Concept
                  </h3>
                </div>

                <div className="space-y-4 font-body text-[#504444] text-sm leading-relaxed">
                  <p>
                    LOOM is a sustainable denim startup project developed to promote circular fashion, responsible consumption, and social impact through redesigned denim products and online branding.
                  </p>
                  <p>
                    As part of the project, I contributed to idea development, financial planning, product development planning, progress management, visual direction, and structured pitching strategies for partners and stakeholders.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 pt-2 items-center">
                  <a 
                    href="https://loomdenim.vercel.app" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-sm font-semibold text-[#7b5455] hover:text-[#5c3e3f] flex items-center gap-1 transition-colors duration-300"
                  >
                    Visit LOOM Denim <span className="text-xs">&rarr;</span>
                  </a>
                  
                  <button 
                    onClick={() => setShowLoom(!showLoom)}
                    className="font-body text-sm font-semibold text-[#7b5455] hover:text-[#5c3e3f] flex items-center gap-1 transition-colors duration-300 focus:outline-none"
                  >
                    {showLoom ? 'Hide Case Study \u2191' : 'View Case Study \u2192'}
                  </button>
                </div>
              </div>
            </div>

            {/* Smooth Expanding Case Study Drawer */}
            <div 
              className={`transition-all duration-500 overflow-hidden border-[#7b5455]/10 ${
                showLoom ? 'max-h-[1000px] border-t opacity-100 bg-[#faf9f6]/40' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="p-8 lg:p-12 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* Project Overview */}
                  <div className="md:col-span-6 space-y-4">
                    <h4 className="font-display text-xl text-[#1a1c1a] border-b border-[#7b5455]/20 pb-2">
                      Project Overview
                    </h4>
                    <p className="font-body text-sm text-[#504444] leading-relaxed">
                      LOOM is a sustainable denim startup project that explores how redesigned denim products can support circular fashion and responsible consumption. The project combines product development, social impact thinking, visual branding, and digital communication to create a more meaningful fashion experience for young consumers.
                    </p>
                  </div>

                  {/* My Role */}
                  <div className="md:col-span-6 space-y-4">
                    <h4 className="font-display text-xl text-[#1a1c1a] border-b border-[#7b5455]/20 pb-2">
                      My Role
                    </h4>
                    <ul className="space-y-2.5 font-body text-sm text-[#504444]">
                      {[
                        "Contributed to idea development and brand concept refinement.",
                        "Supported financial planning and business model development.",
                        "Planned product development direction and project milestones.",
                        "Managed progress and coordinated team tasks during the project.",
                        "Supported visual direction for branding materials, pitch deck, and promotional content."
                      ].map((role, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="text-[#7b5455] mt-1 select-none text-xs">&bull;</span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Skills Used */}
                <div className="space-y-3 pt-4 border-t border-[#7b5455]/10">
                  <span className="font-body text-xs font-semibold text-[#7b5455] tracking-wider uppercase block">
                    Skills Used
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Branding", "Canva Design", "Research", "Financial Planning", 
                      "Product Planning", "Communication", "Progress Management"
                    ].map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3.5 py-1.5 bg-[#7b5455]/10 text-[#7b5455] rounded-full font-body text-xs font-semibold shadow-sm hover:bg-[#7b5455]/20 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Project 2: Operations & Reconciliation Case Study */}
          <div className="glass-card rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(107,91,91,0.05)] border border-[#7b5455]/10 max-w-4xl mx-auto bg-[#faf9f6]/80 backdrop-blur-md transition-all duration-300">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Image Part */}
              <div className="lg:col-span-5 aspect-[4/3] lg:aspect-auto w-full overflow-hidden relative bg-[#efeeeb] min-h-[320px] lg:min-h-full group">
                <div className="absolute inset-0 bg-[#7b5455]/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {/* Fallback pattern */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#7b5455]/20 to-[#4a6b82]/20 flex items-center justify-center p-8">
                  <div className="text-center space-y-2">
                    <span className="font-display text-3xl text-[#7b5455]/30 tracking-widest block font-bold select-none">LYNKID</span>
                    <span className="font-body text-[10px] text-[#7b5455]/40 tracking-widest uppercase block select-none">OPERATIONS &bull; RECONCILIATION</span>
                  </div>
                </div>
                <img 
                  alt="LynkID Operations Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 absolute inset-0 group-hover:scale-105" 
                  src="/lynkid.png"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>

              {/* Content Part */}
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2 items-center">
                    <span className="font-body text-xs font-bold text-[#7b5455] uppercase tracking-wider">
                      Operations Internship Case Study
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold bg-[#7b5455] text-white shadow-sm tracking-wide uppercase">
                      Practical Operations
                    </span>
                  </div>
                  <h3 className="font-display text-3xl text-[#1a1c1a] leading-tight">
                    Project 2: Operations & Reconciliation Case Study
                  </h3>
                  <p className="font-body text-xs font-semibold text-[#7b5455] leading-relaxed italic">
                    A practical operations experience focused on transaction reconciliation, payment records, partner coordination, and process accuracy.
                  </p>
                </div>

                <div className="space-y-4 font-body text-[#504444] text-sm leading-relaxed">
                  <p>
                    During my internship at LynkID, I supported back-end business operations related to transaction data checking, payment record preparation, partner documentation, and reconciliation follow-up. This experience helped me understand how accuracy, clear documentation, and timely coordination contribute to smooth business operations.
                  </p>
                </div>

                <div className="flex flex-wrap gap-6 pt-2 items-center">
                  <button 
                    onClick={() => setShowReconciliation(!showReconciliation)}
                    className="font-body text-sm font-semibold text-[#7b5455] hover:text-[#5c3e3f] flex items-center gap-1 transition-colors duration-300 focus:outline-none"
                  >
                    {showReconciliation ? 'Hide Case Study \u2191' : 'View Case Study \u2192'}
                  </button>
                </div>
              </div>
            </div>

            {/* Smooth Expanding Case Study Drawer */}
            <div 
              className={`transition-all duration-500 overflow-hidden border-[#7b5455]/10 ${
                showReconciliation ? 'max-h-[1200px] border-t opacity-100 bg-[#faf9f6]/40' : 'max-h-0 opacity-0 pointer-events-none'
              }`}
            >
              <div className="p-8 lg:p-12 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  {/* My Role */}
                  <div className="md:col-span-6 space-y-4">
                    <h4 className="font-display text-xl text-[#1a1c1a] border-b border-[#7b5455]/20 pb-2">
                      My Role
                    </h4>
                    <ul className="space-y-2.5 font-body text-sm text-[#504444]">
                      {[
                        "Reconciled transaction data across internal systems, payment gateways, and partner platforms.",
                        "Checked and matched records to identify discrepancies, missing information, and transaction errors.",
                        "Prepared periodic payment records and supporting documents for 100+ loyalty ecosystem partners.",
                        "Coordinated with partner representatives to resolve billing queries and document issues.",
                        "Supported deadline-based payment cycles with attention to accuracy and process consistency."
                      ].map((role, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <span className="text-[#7b5455] mt-1 select-none text-xs">&bull;</span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Learning */}
                  <div className="md:col-span-6 space-y-4">
                    <h4 className="font-display text-xl text-[#1a1c1a] border-b border-[#7b5455]/20 pb-2">
                      Key Learning
                    </h4>
                    <p className="font-body text-sm text-[#504444] leading-relaxed">
                      This experience showed me that strong operations depend on accurate data, organized records, clear communication, and consistent follow-up. It also strengthened my interest in business operations and e-commerce operations, especially the back-end processes that support customer and partner experience.
                    </p>
                  </div>
                </div>

                {/* Skills Demonstrated */}
                <div className="space-y-3 pt-4 border-t border-[#7b5455]/10">
                  <span className="font-body text-xs font-semibold text-[#7b5455] tracking-wider uppercase block">
                    Skills Demonstrated
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Data Reconciliation", "Payment Records", "Partner Coordination", 
                      "Document Management", "Process Accuracy", "Cross-team Communication"
                    ].map((skill, idx) => (
                      <span 
                        key={idx}
                        className="px-3.5 py-1.5 bg-[#7b5455]/10 text-[#7b5455] rounded-full font-body text-xs font-semibold shadow-sm hover:bg-[#7b5455]/20 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
