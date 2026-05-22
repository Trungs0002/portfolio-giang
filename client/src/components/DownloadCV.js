import React from 'react';

const DownloadCV = () => {
  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#f4f3f1]" 
      id="cv"
    >
      <div className="max-w-[1000px] mx-auto bg-[#d4a5a5]/30 rounded-2xl p-12 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(107,91,91,0.05)] border border-[#7b5455]/10">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#faf9f6] rounded-full blur-3xl opacity-50 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#7b5455] rounded-full blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>
        
        <div className="relative z-10 space-y-6">
          <h2 className="font-display text-4xl text-[#5d3a3b]">Want to know more?</h2>
          <p className="font-body text-base md:text-lg text-[#504444] max-w-xl mx-auto leading-relaxed">
            Download my full curriculum vitae to explore my academic background, complete experience history, and detailed skill set.
          </p>
          <div className="pt-4">
            <a 
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#7b5455] text-white rounded font-body text-sm font-semibold hover:bg-[#603d3e] hover:shadow-lg hover:-translate-y-1 transition-all duration-300" 
              href="https://drive.google.com/file/d/1ceRcqw78qt12A-C8zacXC_YymwKe1H4s/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <span className="material-symbols-outlined">download</span>
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;
