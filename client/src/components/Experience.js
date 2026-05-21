import React from 'react';

const Experience = () => {
  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#faf9f6]" 
      id="experience"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Education Section */}
        <div className="lg:col-span-5 space-y-12">
          <div>
            <h2 className="font-display text-4xl text-[#1a1c1a] mb-4">Education</h2>
            <div className="w-12 h-[1px] bg-[#7b5455]"></div>
          </div>
          <div className="relative pl-8 border-l border-[#7b5455]/20 space-y-12">
            
            {/* FTU */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] rounded-xl transition-all duration-300">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - 2027
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">
                Foreign Trade University (FTU)
              </h3>
              <p className="font-body text-base text-[#685b5c] mb-2 font-semibold font-body">
                Bachelor of International Business Administration
              </p>
              <p className="font-body text-sm text-[#504444] mb-3">
                High-Quality Program (100% taught in English)
              </p>
              <span className="inline-flex items-center px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                GPA: 3.66 / 4.0
              </span>
            </div>

            {/* IELTS */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] rounded-xl transition-all duration-300">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - 2025
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">
                Language Proficiency
              </h3>
              <p className="font-body text-base text-[#685b5c] mb-2 font-semibold">
                IELTS 7.0 (Certified by IDP)
              </p>
              <p className="font-body text-sm text-[#504444] leading-relaxed">
                Proficient in academic English and professional corporate communication in global environments.
              </p>
            </div>
            
          </div>
        </div>

        {/* Experience Section */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h2 className="font-display text-4xl text-[#1a1c1a] mb-4">Experience</h2>
            <div className="w-12 h-[1px] bg-[#7b5455]"></div>
          </div>
          <div className="relative pl-8 border-l border-[#7b5455]/20 space-y-12">
            
            {/* LynkID */}
            <div className="relative glass-card p-6 rounded-xl -ml-6 border border-[#7b5455]/10 shadow-[0_10px_40px_rgba(107,91,91,0.04)]">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#7b5455] rounded-full shadow-[0_0_10px_rgba(123,84,85,0.5)]"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2026 - Present
              </span>
              <h3 className="font-display text-2xl text-[#1a1c1a] mb-1">Operations Intern</h3>
              <p className="font-body text-base text-[#685b5c] mb-4 font-semibold">
                LynkID Joint Stock Company (VPBank Ecosystem) — Operations Dept.
              </p>
              
              <div className="space-y-4 font-body text-sm text-[#504444] leading-relaxed mb-6">
                <div>
                  <strong className="text-[#7b5455]">Financial Reconciliation &amp; Multi-Platform Data Processing:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Responsible for reconciling transaction data across internal systems, payment gateways, and affiliate partners.</li>
                    <li>Analyzed and matched large datasets to ensure consistency, proactively identifying discrepancies or transaction errors.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Payment Records &amp; Partner Relations:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Managed and prepared periodic payment records for a network of 100+ loyalty ecosystem partners.</li>
                    <li>Actively communicated and coordinated with partner representatives to resolve billing queries and document discrepancies.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Process Optimization &amp; Key Results:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Disbursed payment records with absolute accuracy and strictly met deadlines for 100+ loyalty partners every cycle.</li>
                    <li>Effectively applied Horenso principles in cross-team reporting to optimize document processing speed.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Data Reconciliation
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Document Management
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Horenso
                </span>
              </div>
            </div>

            {/* Teaching / Training */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] rounded-xl transition-all duration-300">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - Present
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">Academic Lead &amp; Group Trainer</h3>
              <ul className="list-disc pl-5 mt-3 space-y-1 font-body text-sm text-[#504444] leading-relaxed mb-4">
                <li>Designed personalized academic plans for groups of 3-5 students, ensuring milestones and learning outcomes.</li>
                <li>Conducted monthly assessments to measure performance and adapt pedagogical methods.</li>
                <li>Simplified complex academic concepts and business processes into easily digestible learning modules.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Training
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Roadmapping
                </span>
              </div>
            </div>

            {/* TA */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] rounded-xl transition-all duration-300">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - 2025
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">English Teaching Assistant</h3>
              <ul className="list-disc pl-5 mt-3 space-y-1 font-body text-sm text-[#504444] leading-relaxed mb-4">
                <li>Managed classroom operations for classes of 12-18 students, preparing materials and assets to guarantee optimal learning experiences.</li>
                <li>Tracked attendance, graded assignments, and reported regular student progress to teachers and parents.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Class Operations
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Progress Reporting
                </span>
              </div>
            </div>

            {/* Secretary */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] rounded-xl transition-all duration-300">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2020 - Present
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">Class Secretary &amp; Event Coordinator</h3>
              <p className="font-body text-sm text-[#685b5c] mb-3">High School for Social Sciences and Humanities &amp; Foreign Trade University</p>
              <ul className="list-disc pl-5 space-y-1 font-body text-sm text-[#504444] leading-relaxed mb-4">
                <li>Planned, managed, and executed class/department-scale events and programs on-schedule and within budget.</li>
                <li>Served as the primary liaison between faculty and students, swiftly resolving operational bottlenecks.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Event Management
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Communications
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
