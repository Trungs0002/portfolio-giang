import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f4f3f1] border-t border-[#7b5455]/10 py-16 px-6 md:px-16">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Branding & Tagline */}
        <div className="space-y-4">
          <button
            onClick={scrollToTop}
            className="font-display text-3xl font-medium text-[#7b5455] hover:text-[#5c3e3f] transition-colors focus:outline-none text-left"
          >
            Nguyen Minh Giang
          </button>
          <p className="font-body text-sm text-[#504444] font-medium tracking-wide uppercase">
            Future Operations Professional
          </p>
          <p className="font-body text-xs text-[#685b5c] pt-4">
            &copy; 2026 Nguyen Minh Giang. All rights reserved.
          </p>
        </div>

        {/* Right Side: Quick Links */}
        <div className="grid grid-cols-2 gap-8 md:justify-items-end">
          {/* Column 1: Get in Touch */}
          <div className="space-y-3">
            <span className="block font-body text-xs font-semibold text-[#7b5455] tracking-wider uppercase">
              Get in Touch
            </span>
            <ul className="space-y-2">
              <li>
                <a 
                  className="font-body text-sm text-[#685b5c] hover:text-[#7b5455] transition-colors duration-200" 
                  href="mailto:minhgiang2357@gmail.com"
                >
                  minhgiang2357@gmail.com
                </a>
              </li>
              <li>
                <a 
                  className="font-body text-sm text-[#685b5c] hover:text-[#7b5455] transition-colors duration-200" 
                  href="tel:0865112195"
                >
                  0865 112 195
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Connect & Resources */}
          <div className="space-y-3">
            <span className="block font-body text-xs font-semibold text-[#7b5455] tracking-wider uppercase">
              Connect & Resources
            </span>
            <ul className="space-y-2">
              <li>
                <a 
                  className="font-body text-sm text-[#685b5c] hover:text-[#7b5455] transition-colors duration-200 block" 
                  href="https://www.linkedin.com/in/minh-giang-nguy%E1%BB%85n-a3780b410/" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  className="font-body text-sm text-[#685b5c] hover:text-[#7b5455] transition-colors duration-200 block" 
                  href="https://www.facebook.com/nguyenminh.giang.395/" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <button 
                  onClick={scrollToTop}
                  className="font-body text-sm text-[#685b5c] hover:text-[#7b5455] transition-colors duration-200 block text-left" 
                >
                  Back to Portfolio
                </button>
              </li>
              <li>
                <a 
                  className="font-body text-sm text-[#685b5c] hover:text-[#7b5455] transition-colors duration-200 block font-semibold" 
                  href="https://drive.google.com/file/d/1ceRcqw78qt12A-C8zacXC_YymwKe1H4s/view?usp=sharing" 
                  target="_blank" 
                  rel="noreferrer"
                >
                  View CV / Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
