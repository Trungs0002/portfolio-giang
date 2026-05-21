import React from 'react';

const About = () => {
  const values = [
    {
      icon: 'account_tree',
      title: 'Operations Mindset',
      description: 'Streamlining processes for optimal efficiency and clarity.'
    },
    {
      icon: 'diversity_3',
      title: 'Coordination',
      description: 'Facilitating seamless communication across diverse teams.',
      offset: true
    },
    {
      icon: 'eco',
      title: 'Sustainability',
      description: 'Building brand value through ethical and sustainable practices.'
    },
    {
      icon: 'trending_up',
      title: 'Growth Strategy',
      description: 'Developing actionable plans aligned with long-term vision.',
      offset: true
    }
  ];

  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#f4f3f1]" 
      id="about"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display text-4xl text-[#1a1c1a]">About Me</h2>
          <div className="w-12 h-[1px] bg-[#7b5455]"></div>
          <p className="font-body text-base text-[#504444] leading-relaxed">
            I am a dedicated business student with a profound interest in the operational mechanics that drive successful organizations and the human resources that power them. My approach is rooted in structural thinking combined with a passion for sustainable brand development.
          </p>
          <p className="font-body text-base text-[#504444] leading-relaxed">
            I believe in creating value through meticulous coordination, empathetic leadership, and a steadfast commitment to continuous improvement. My goal is to contribute to environments that prioritize efficiency alongside human well-being.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((val, idx) => (
            <div 
              key={idx}
              className={`glass-card p-6 rounded-xl space-y-4 hover:shadow-[0_15px_50px_rgba(107,91,91,0.12)] transition-all duration-300 transform hover:-translate-y-1 ${
                val.offset ? 'sm:translate-y-8' : ''
              }`}
            >
              <span className="material-symbols-outlined text-[#7b5455] text-3xl">
                {val.icon}
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a]">{val.title}</h3>
              <p className="font-body text-sm text-[#504444] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
