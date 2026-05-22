import React from 'react';

const CareerDirection = () => {
  const directions = [
    {
      icon: 'insights',
      title: 'Business Operations',
      desc1: 'I aim to develop as an operations professional who helps businesses manage workflows, records, internal coordination, and process accuracy.',
      desc2: 'I am interested in roles that require systematic thinking, attention to detail, and cross-functional communication.'
    },
    {
      icon: 'storefront',
      title: 'E-commerce Operations',
      desc1: 'I am interested in how online businesses manage product information, customer inquiries, transaction data, payment flows, and partner coordination.',
      desc2: 'My goal is to understand how digital businesses operate efficiently from the back-end to the customer experience.'
    },
    {
      icon: 'diversity_3',
      title: 'People Operations & Training',
      desc1: 'In addition to business operations, I am interested in human resources from an operational perspective, especially training, team coordination, and performance support.',
      desc2: 'My experience as an academic lead and trainer has helped me understand how planning and communication can improve people’s performance.'
    }
  ];

  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#faf9f6]" 
      id="career"
    >
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="font-body text-xs font-semibold text-[#7b5455] uppercase tracking-wider block">
            Future Path
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1c1a] italic">Career Direction</h2>
          <div className="w-12 h-[1px] bg-[#7b5455] mx-auto"></div>
          <p className="font-body text-base text-[#504444] max-w-2xl mx-auto leading-relaxed">
            My professional aspirations and focal points, combining systematic operational thinking with human-centric development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {directions.map((dir, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 rounded-2xl hover:shadow-[0_20px_60px_rgba(107,91,91,0.12)] transition-all duration-500 transform hover:-translate-y-1.5 border border-[#7b5455]/5 flex flex-col justify-between h-full bg-[#ffffff]/50 backdrop-blur-sm group"
            >
              <div className="space-y-6">
                <div className="w-12 h-12 rounded-xl bg-[#7b5455]/5 flex items-center justify-center border border-[#7b5455]/10 group-hover:bg-[#7b5455]/10 group-hover:border-[#7b5455]/20 transition-all duration-500">
                  <span className="material-symbols-outlined text-[#7b5455] text-2xl">
                    {dir.icon}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-[#1a1c1a] italic">{dir.title}</h3>
                <div className="space-y-4">
                  <p className="font-body text-base text-[#3b3232] leading-relaxed font-light">
                    {dir.desc1}
                  </p>
                  <p className="font-body text-sm text-[#504444] leading-relaxed">
                    {dir.desc2}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerDirection;
