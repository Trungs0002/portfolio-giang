import React from 'react';

const About = () => {
  const values = [
    {
      icon: 'account_tree',
      title: 'Operations & Reconciliations',
      description: 'Reconciling and processing transaction data across multiple platforms with absolute precision.'
    },
    {
      icon: 'public',
      title: 'International Business',
      description: 'Systematic global mindset, fully educated in English at Foreign Trade University (FTU).',
      offset: true
    },
    {
      icon: 'diversity_3',
      title: 'Coordination & Leadership',
      description: 'Dynamic Class Secretary with excellent event management and collective coordination skills.'
    },
    {
      icon: 'receipt_long',
      title: 'Records & Documents',
      description: 'Capable of managing and preparing payment records for a network of 100+ professional partners.',
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
            I am a senior student majoring in International Business at <strong className="font-semibold text-[#1a1c1a]">Foreign Trade University (FTU)</strong>, equipped with a systematic mindset and a strong track record in operations and data reconciliations.
          </p>
          <p className="font-body text-base text-[#504444] leading-relaxed">
            Alongside my professional capability in managing transaction records and payment documents for a network of 100+ partners, I possess high English proficiency in both academic and corporate environments, combined with proactive problem-solving agility.
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
