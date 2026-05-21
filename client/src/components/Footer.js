import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f4f3f1] border-t border-[#685b5c]/10 opacity-90 hover:opacity-100 transition-opacity duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center px-16 py-8 max-w-[1200px] mx-auto gap-8">
        <button 
          className="font-display text-2xl font-medium text-[#7b5455] focus:outline-none" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Minh Giang
        </button>
        
        <div className="flex items-center gap-6">
          <a className="font-body text-base text-[#685b5c] hover:text-[#7b5455] transition-all hover:translate-y-[-2px] duration-200" href="https://linkedin.com/in/minhgiang" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="font-body text-base text-[#685b5c] hover:text-[#7b5455] transition-all hover:translate-y-[-2px] duration-200" href="mailto:minhgiang2357@gmail.com">
            Email
          </a>
          <a className="font-body text-base text-[#685b5c] hover:text-[#7b5455] transition-all hover:translate-y-[-2px] duration-200" href="https://instagram.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        
        <p className="font-body text-sm text-[#685b5c]">
          © 2024 Nguyen Minh Giang. Crafted with meticulous attention to detail.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
