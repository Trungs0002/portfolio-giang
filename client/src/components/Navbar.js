import React, { useState, useEffect } from 'react';

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Career', href: '#career', id: 'career' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Contact', href: '#contact', id: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#faf9f6]/70 backdrop-blur-md border-b border-[#685b5c]/10 shadow-[0_10px_40px_rgba(107,91,91,0.08)] transition-all duration-300 ease-in-out">
      <div className="flex justify-between items-center px-6 md:px-16 py-6 max-w-[1200px] mx-auto">
        <button 
          className="font-display text-2xl font-medium text-[#7b5455] tracking-tighter hover:opacity-80 transition-opacity duration-300 focus:outline-none" 
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Minh Giang
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`font-body text-base tracking-wide transition-all duration-300 hover:text-[#7b5455] ${
                activeSection === item.id 
                  ? 'text-[#7b5455] font-bold border-b-2 border-[#7b5455]' 
                  : 'text-[#685b5c]'
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a 
          className="hidden md:inline-flex items-center justify-center px-6 py-2 bg-[#7b5455] text-white rounded font-body text-sm hover:bg-[#603d3e] transition-colors shadow-[0_10px_40px_rgba(107,91,91,0.08)]" 
          href="#cv"
        >
          Download CV
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-[#7b5455] p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#faf9f6]/95 border-b border-[#685b5c]/10 px-6 py-6 space-y-4 shadow-[0_10px_40px_rgba(107,91,91,0.08)]">
          {navItems.map((item) => (
            <a
              key={item.id}
              className={`block font-body text-base py-2 border-b border-[#685b5c]/5 ${
                activeSection === item.id 
                  ? 'text-[#7b5455] font-bold' 
                  : 'text-[#685b5c]'
              }`}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            className="block text-center px-6 py-3 bg-[#7b5455] text-white rounded font-body text-sm hover:bg-[#603d3e] transition-colors" 
            href="#cv"
            onClick={() => setIsOpen(false)}
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
