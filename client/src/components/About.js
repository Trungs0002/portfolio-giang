import React from 'react';

const About = () => {
  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#f4f3f1]" 
      id="about"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1c1a] italic">About Me</h2>
            <div className="w-12 h-[1px] bg-[#7b5455]"></div>
          </div>
          
          <blockquote className="font-display text-xl text-[#7b5455] italic font-light leading-relaxed border-l-2 border-[#7b5455]/30 pl-4 py-1">
            "I believe strong business performance depends on both effective systems and well-supported people."
          </blockquote>

          <div className="pt-6 border-t border-[#7b5455]/10 space-y-4">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#7b5455] text-xl">school</span>
              <span className="font-body text-sm text-[#504444] font-medium">Foreign Trade University (FTU)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#7b5455] text-xl">language</span>
              <span className="font-body text-sm text-[#504444] font-medium">English (Academic & Corporate Proficiency)</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#7b5455] text-xl">psychology</span>
              <span className="font-body text-sm text-[#504444] font-medium">Operations & Human Resources Focus</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-6 lg:pt-2">
          <p className="font-body text-lg md:text-xl text-[#3b3232] font-light leading-relaxed">
            As an International Business student, I am developing my career toward business operations and e-commerce operations, where accuracy, coordination, and process efficiency are essential. My experience in transaction reconciliation, partner communication, document management, and academic training has shaped my interest in how businesses operate smoothly behind the scenes.
          </p>
          <p className="font-body text-base md:text-lg text-[#504444] leading-relaxed">
            Alongside operations, I am also interested in human resources, especially training, coordination, and people operations, because I believe strong business performance depends on both effective systems and well-supported people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

