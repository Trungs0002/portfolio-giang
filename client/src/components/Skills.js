import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Operations & Administration',
      skills: [
        { name: 'Transaction Reconciliation', level: 95 },
        { name: 'Payment Records & Document Management', level: 95 },
        { name: 'Partner Communication & Coordination', level: 92 },
        { name: 'Process Accuracy & Deadline Management', level: 94 }
      ]
    },
    {
      title: 'Digital & Business Tools',
      skills: [
        { name: 'Microsoft Excel / Word / PowerPoint', level: 92 },
        { name: 'Google Workspace', level: 95 },
        { name: 'Canva Design & Visual Communication', level: 88 },
        { name: 'Basic Data Organization & Reporting', level: 90 }
      ]
    },
    {
      title: 'Language & Certifications',
      skills: [
        { name: 'IELTS 7.0', desc: 'Academic English proficiency' },
        { name: 'MOS Office Certification', desc: 'Microsoft Office productivity skills' },
        { name: 'Professional English Communication', level: 90 },
        { name: 'Business Writing & Presentation', level: 88 }
      ]
    },
    {
      title: 'People & Coordination Skills',
      skills: [
        { name: 'Training Support & Knowledge Sharing', level: 92 },
        { name: 'Team Coordination & Progress Tracking', level: 93 },
        { name: 'Planning & Organizational Skills', level: 93 },
        { name: 'Problem-Solving Mindset', level: 92 }
      ]
    }
  ];

  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#f4f3f1]" 
      id="skills"
    >
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="font-body text-xs font-semibold text-[#7b5455] uppercase tracking-wider block">
            Capabilities
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1c1a] italic">Professional Skills</h2>
          <div className="w-12 h-[1px] bg-[#7b5455] mx-auto"></div>
          <p className="font-body text-base text-[#504444] max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my core operations capabilities, tool proficiencies, linguistic credentials, and collaborative leadership skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="glass-card p-6 rounded-2xl space-y-6 hover:shadow-[0_20px_50px_rgba(107,91,91,0.1)] transition-all duration-300 border border-[#7b5455]/5 flex flex-col h-full bg-[#ffffff]/40 backdrop-blur-sm"
            >
              <h3 className="font-display text-xl text-[#7b5455] border-b border-[#7b5455]/10 pb-4 italic font-medium">
                {cat.title}
              </h3>
              <div className="space-y-5 flex-grow">
                {cat.skills.map((skill, sIdx) => {
                  const isCert = !!skill.desc;
                  return (
                    <div key={sIdx} className="space-y-2">
                      {isCert ? (
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-[#7b5455] text-lg font-bold">verified</span>
                            <span className="font-body text-sm font-semibold text-[#1a1c1a]">{skill.name}</span>
                          </div>
                          <p className="font-body text-xs text-[#685b5c] pl-7">
                            {skill.desc}
                          </p>
                        </div>
                      ) : (
                        <>
                          <div className="flex justify-between text-xs font-body text-[#504444]">
                            <span className="font-semibold text-[#1a1c1a]">{skill.name}</span>
                            <span className="font-semibold text-[#7b5455]">{skill.level}%</span>
                          </div>
                          <div className="w-full bg-[#e3e2e0]/60 h-1 rounded-full overflow-hidden">
                            <div 
                              className="bg-[#7b5455] h-full rounded-full transition-all duration-1000 ease-out" 
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
