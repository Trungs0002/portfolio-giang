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
            
            {/* LynkID - Ongoing Highlighted */}
            <div className="relative glass-card p-6 rounded-xl -ml-6 border border-[#7b5455]/10 shadow-[0_10px_40px_rgba(107,91,91,0.04)] bg-[#ffffff]/60">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#7b5455] rounded-full shadow-[0_0_10px_rgba(123,84,85,0.5)]"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2026 - PRESENT
              </span>
              <h3 className="font-display text-2xl text-[#1a1c1a] mb-1">Operations Intern</h3>
              <p className="font-body text-base text-[#685b5c] mb-4 font-semibold">
                LynkID Joint Stock Company (VPBank Ecosystem) — Operations Dept.
              </p>
              
              <div className="space-y-4 font-body text-sm text-[#504444] leading-relaxed mb-6">
                <div>
                  <strong className="text-[#7b5455]">Transaction Reconciliation &amp; Data Processing:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Reconciled transaction data across internal systems, payment gateways, and affiliate partner platforms to ensure accuracy and consistency.</li>
                    <li>Analyzed and matched large datasets, proactively identifying discrepancies, missing records, and transaction errors for timely follow-up.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Payment Records &amp; Partner Coordination:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Managed and prepared periodic payment records and supporting documents for a network of 100+ loyalty ecosystem partners.</li>
                    <li>Communicated and coordinated with partner representatives to resolve billing queries, document issues, and reconciliation differences.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Process Accuracy &amp; Operational Support:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Supported payment processing cycles with high attention to detail, accuracy, and deadline compliance.</li>
                    <li>Applied structured reporting and cross-team communication practices to improve document processing speed and operational efficiency.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Data Reconciliation
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Payment Records
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Partner Coordination
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Document Management
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Process Accuracy
                </span>
              </div>
            </div>

            {/* Teaching / Training - Ongoing Highlighted */}
            <div className="relative glass-card p-6 rounded-xl -ml-6 border border-[#7b5455]/10 shadow-[0_10px_40px_rgba(107,91,91,0.04)] bg-[#ffffff]/60">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#7b5455] rounded-full shadow-[0_0_10px_rgba(123,84,85,0.5)]"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - PRESENT
              </span>
              <h3 className="font-display text-2xl text-[#1a1c1a] mb-1">Academic Lead &amp; Group Trainer</h3>
              <p className="font-body text-base text-[#685b5c] mb-4 font-semibold">
                Independent Academic Support / University Study Groups
              </p>
              
              <div className="space-y-4 font-body text-sm text-[#504444] leading-relaxed mb-6">
                <div>
                  <strong className="text-[#7b5455]">Learning Plan Coordination:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Designed personalized academic plans for student groups, ensuring clear milestones, learning objectives, and progress tracking.</li>
                    <li>Organized study schedules, task distribution, and learning materials to help group members follow structured academic processes.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Performance Tracking &amp; Training Support:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Conducted regular assessments to measure learning progress, identify knowledge gaps, and adjust training methods accordingly.</li>
                    <li>Simplified complex academic concepts and business-related topics into practical, easy-to-understand learning content.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Team Communication &amp; Progress Management:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Coordinated communication among group members to maintain engagement, accountability, and consistent learning outcomes.</li>
                    <li>Supported learners through feedback, guidance, and follow-up actions to improve individual and group performance.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Training Support
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Progress Tracking
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Planning
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Team Coordination
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  People Development
                </span>
              </div>
            </div>

            {/* Secretary - Ongoing Highlighted */}
            <div className="relative glass-card p-6 rounded-xl -ml-6 border border-[#7b5455]/10 shadow-[0_10px_40px_rgba(107,91,91,0.04)] bg-[#ffffff]/60">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#7b5455] rounded-full shadow-[0_0_10px_rgba(123,84,85,0.5)]"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2020 - PRESENT
              </span>
              <h3 className="font-display text-2xl text-[#1a1c1a] mb-1">Class Secretary &amp; Event Coordinator</h3>
              <p className="font-body text-base text-[#685b5c] mb-4 font-semibold">
                High School for Social Sciences and Humanities &amp; Foreign Trade University
              </p>
              
              <div className="space-y-4 font-body text-sm text-[#504444] leading-relaxed mb-6">
                <div>
                  <strong className="text-[#7b5455]">Event Planning &amp; Execution:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Planned, managed, and executed class-level and department-scale events, ensuring activities were delivered on schedule and within budget.</li>
                    <li>Coordinated event timelines, task assignments, participant communication, and preparation processes.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Internal Coordination &amp; Administrative Support:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Served as the primary liaison between faculty, students, and organizing teams to ensure smooth information flow.</li>
                    <li>Managed administrative tasks, meeting updates, class announcements, and event-related documentation.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Problem Solving &amp; Operational Follow-up:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Identified and resolved operational bottlenecks during event preparation and academic activities.</li>
                    <li>Supported post-event follow-up, feedback collection, and process improvement for future activities.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Event Management
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Internal Communication
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Administration
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Coordination
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Problem Solving
                </span>
              </div>
            </div>

            {/* TA - Past Role */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] hover:shadow-[0_10px_40px_rgba(107,91,91,0.04)] rounded-xl transition-all duration-300 group">
              <div className="absolute -left-[14px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full group-hover:bg-[#7b5455] group-hover:shadow-[0_0_10px_rgba(123,84,85,0.5)] transition-all duration-300"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - 2025
              </span>
              <h3 className="font-display text-2xl text-[#1a1c1a] mb-1">English Teaching Assistant</h3>
              <p className="font-body text-base text-[#685b5c] mb-4 font-semibold">
                English Learning Classes
              </p>
              
              <div className="space-y-4 font-body text-sm text-[#504444] leading-relaxed mb-6">
                <div>
                  <strong className="text-[#7b5455]">Classroom Operations:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Managed classroom operations for groups of 2–18 students, including lesson preparation, learning activities, and class flow management.</li>
                    <li>Prepared teaching materials, practice exercises, and interactive activities to support effective learning experiences.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Student Records &amp; Progress Reporting:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Tracked attendance, graded assignments, and maintained student learning records with accuracy and consistency.</li>
                    <li>Reported regular student progress to teachers and parents, ensuring clear communication about learning outcomes and improvement areas.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Learning Support &amp; Communication:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Assisted students during class activities, clarified learning content, and supported classroom engagement.</li>
                    <li>Helped maintain an organized, supportive, and efficient learning environment.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs font-semibold">
                  Class Operations
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs font-semibold">
                  Student Records
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs font-semibold">
                  Progress Reporting
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs font-semibold">
                  Communication
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs font-semibold">
                  Learning Support
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
