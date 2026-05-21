import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Nghiệp Vụ & Vận Hành',
      skills: [
        { name: 'Quản lý hồ sơ & chứng từ thanh toán', level: 95 },
        { name: 'Quản trị quan hệ đối tác', level: 92 },
        { name: 'Tổ chức & điều phối sự kiện', level: 90 },
        { name: 'Sử dụng tiếng Anh chuyên môn', level: 90 }
      ]
    },
    {
      title: 'Công Cụ & Nền Tảng',
      skills: [
        { name: 'Microsoft PowerPoint / Excel / Word', level: 92 },
        { name: 'Google Workspace', level: 95 },
        { name: 'Canva (Thiết kế & Sáng tạo)', level: 88 }
      ]
    },
    {
      title: 'Tư Duy & Kỹ Năng Mềm',
      skills: [
        { name: 'Chủ động trong công việc', level: 95 },
        { name: 'Tư duy tổ chức & sắp xếp công việc', level: 93 },
        { name: 'Tư duy giải quyết vấn đề', level: 92 },
        { name: 'Khả năng học hỏi & thích nghi nhanh', level: 95 }
      ]
    }
  ];

  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#faf9f6]" 
      id="skills"
    >
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl text-[#1a1c1a]">Năng Lực Chuyên Môn</h2>
          <div className="w-12 h-[1px] bg-[#7b5455] mx-auto"></div>
          <p className="font-body text-base text-[#504444] max-w-2xl mx-auto leading-relaxed">
            Tổng quan các kỹ năng nghiệp vụ vận hành, thành thạo công cụ văn phòng và các khía cạnh tư duy giải quyết vấn đề cốt lõi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="glass-card p-8 rounded-xl space-y-6 hover:shadow-[0_15px_50px_rgba(107,91,91,0.12)] transition-shadow duration-300"
            >
              <h3 className="font-display text-xl text-[#7b5455] border-b border-[#7b5455]/10 pb-4">
                {cat.title}
              </h3>
              <div className="space-y-6">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-2">
                    <div className="flex justify-between text-sm font-body text-[#504444]">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-[#e3e2e0] h-1.5 rounded-full overflow-hidden">
                      <div 
                        className="bg-[#7b5455] h-full rounded-full transition-all duration-1000 ease-out" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
