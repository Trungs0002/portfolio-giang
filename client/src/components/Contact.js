import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'success', 'error', null

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    
    // Simulate API Submission
    setStatus('success');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#ffffff]" 
      id="contact"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-4xl text-[#1a1c1a] mb-4">Contact Me</h2>
            <p className="font-body text-base text-[#504444] leading-relaxed">
              I am currently open to internship opportunities, professional collaborations, or conversations about operations, data reconciliations, and process optimization.
            </p>
          </div>
          
          <div className="space-y-6">
            <a className="flex items-center gap-4 group" href="mailto:minhgiang2357@gmail.com">
              <div className="w-12 h-12 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#7b5455] group-hover:bg-[#d4a5a5] group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <span className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase">Email</span>
                <span className="font-body text-base text-[#1a1c1a] group-hover:text-[#7b5455] transition-colors duration-300">
                  minhgiang2357@gmail.com
                </span>
              </div>
            </a>
            
            <a className="flex items-center gap-4 group" href="tel:0865112195">
              <div className="w-12 h-12 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#7b5455] group-hover:bg-[#d4a5a5] group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">phone</span>
              </div>
              <div>
                <span className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase">Phone Number</span>
                <span className="font-body text-base text-[#1a1c1a] group-hover:text-[#7b5455] transition-colors duration-300">
                  0865 112 195
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#7b5455]">
                <span className="material-symbols-outlined">cake</span>
              </div>
              <div>
                <span className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase">Date of Birth</span>
                <span className="font-body text-base text-[#1a1c1a]">
                  02/03/2005
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#7b5455]">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <span className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase">Location</span>
                <span className="font-body text-base text-[#1a1c1a]">
                  Hanoi, Vietnam
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#7b5455]">
                <span className="material-symbols-outlined">event_available</span>
              </div>
              <div>
                <span className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase">Availability</span>
                <span className="font-body text-base text-[#1a1c1a] leading-relaxed">
                  Open to internships, collaborations, and operations-related opportunities
                </span>
              </div>
            </div>
            
            <a className="flex items-center gap-4 group" href="https://www.linkedin.com/in/minh-giang-nguy%E1%BB%85n-a3780b410/" target="_blank" rel="noreferrer">
              <div className="w-12 h-12 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#7b5455] group-hover:bg-[#d4a5a5] group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">work</span>
              </div>
              <div>
                <span className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase">LinkedIn</span>
                <span className="font-body text-base text-[#1a1c1a] group-hover:text-[#7b5455] transition-colors duration-300">
                  linkedin.com/in/minh-giang-nguyen
                </span>
              </div>
            </a>

            <a className="flex items-center gap-4 group" href="https://www.facebook.com/nguyenminh.giang.395/" target="_blank" rel="noreferrer">
              <div className="w-12 h-12 rounded-full bg-[#f4f3f1] flex items-center justify-center text-[#7b5455] group-hover:bg-[#d4a5a5] group-hover:text-white transition-all duration-300">
                <span className="material-symbols-outlined">group</span>
              </div>
              <div>
                <span className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase">Facebook</span>
                <span className="font-body text-base text-[#1a1c1a] group-hover:text-[#7b5455] transition-colors duration-300">
                  facebook.com/nguyenminh.giang.395
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="glass-card p-8 rounded-xl relative overflow-hidden">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase mb-2" htmlFor="name">
                Name
              </label>
              <input 
                className="w-full bg-transparent border-0 border-b border-[#d4c2c2] px-0 py-2 focus:ring-0 focus:border-[#7b5455] outline-none transition-colors font-body text-base text-[#1a1c1a] placeholder-[#d4c2c2]/50" 
                id="name" 
                placeholder="Jane Doe" 
                type="text"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase mb-2" htmlFor="email">
                Email
              </label>
              <input 
                className="w-full bg-transparent border-0 border-b border-[#d4c2c2] px-0 py-2 focus:ring-0 focus:border-[#7b5455] outline-none transition-colors font-body text-base text-[#1a1c1a] placeholder-[#d4c2c2]/50" 
                id="email" 
                placeholder="jane@example.com" 
                type="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            
            <div>
              <label className="block font-body text-xs font-semibold text-[#504444] tracking-wider uppercase mb-2" htmlFor="message">
                Message
              </label>
              <textarea 
                className="w-full bg-transparent border-0 border-b border-[#d4c2c2] px-0 py-2 focus:ring-0 focus:border-[#7b5455] outline-none transition-colors font-body text-base text-[#1a1c1a] placeholder-[#d4c2c2]/50 resize-none" 
                id="message" 
                placeholder="Hello..." 
                rows="4"
                value={formData.message}
                onChange={handleInputChange}
              ></textarea>
            </div>

            {status === 'success' && (
              <p className="text-green-600 font-body text-sm">
                Thank you! Your message has been sent successfully.
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-600 font-body text-sm">
                Please fill in all fields before sending your message.
              </p>
            )}

            <button 
              className="w-full py-3 bg-transparent border border-[#7b5455] text-[#7b5455] rounded font-body text-sm font-semibold hover:bg-[#7b5455] hover:text-white transition-all duration-300" 
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
