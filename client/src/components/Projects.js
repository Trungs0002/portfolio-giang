import React from 'react';

const Projects = () => {
  const projectList = [
    {
      title: 'LOOM Denim',
      category: 'Sustainable Fashion',
      description: 'A sustainable denim project focusing on circular economy principles and ethical supply chains.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlmFOCzATfSNwui5JEbsZspmsGNfIy9PNyAy4OolIDeR28277_m7riSQHepkuGsjd-htSQhqwxmUem9Q-6Zn9-2PQ7QjzA0QhEKM-ZuemK9CXtoVjq9NbYCUn1MIQ5-9Z3PM4RXl9DmBbI6ozr_aHtoNp8Lp6nxBnRYFC_Oo_iZMoePCAC6XtU4ch2UgxMkhchQ8ZD8YaDW1sBVuBYg7MS-DmYPHc--IKv2sVNpP4WIVz6qB7owvCO6I8quASF9h5l6Vsx0tGvrqm4',
      offset: false
    },
    {
      title: 'VinFast Case Study',
      category: 'Strategic Analysis',
      description: 'Comprehensive business analysis focusing on global expansion strategies and operational challenges.',
      fallbackText: 'VinFast',
      offset: true
    },
    {
      title: 'FreshBox Analysis',
      category: 'Business Operations',
      description: 'Analysis of logistics and operational efficiency for a local produce delivery service.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBUKFkq5Yd2h2pf_T-qig20bhRS62i-C9U6p6i3Heo65XYinjuSzdhGbBy4dXwMRhT4VxkZ1xjKIJcKXRq71uokdO6osXja62C7gfzNhkRNgGYrK4dSoMx9KVYoSdeXmadDBkmxGNT58GzqF4-GnyFnhGm6CcQc8NRXXdUxUYGCYFoyVM9ucGA43F7gADVqaNdr_opFbHXLOOJ1JaKdX4yu1DYNRjLFDOVhhQBKvwwrsGQ8U1UM0vVoTY5XF1IYjRXzaqvva58EQ7DO',
      offset: false
    }
  ];

  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#f4f3f1]" 
      id="projects"
    >
      <div className="max-w-[1200px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl text-[#1a1c1a]">Featured Projects</h2>
          <p className="font-body text-base text-[#504444] max-w-2xl mx-auto leading-relaxed">
            A selection of academic and personal projects demonstrating strategic analysis, operational planning, and brand development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((proj, idx) => (
            <div 
              key={idx}
              className={`group relative bg-[#faf9f6] rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(107,91,91,0.04)] hover:shadow-[0_20px_60px_rgba(107,91,91,0.12)] transition-all duration-500 transform hover:-translate-y-1 ${
                proj.offset ? 'md:translate-y-8' : ''
              }`}
            >
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#efeeeb] flex items-center justify-center">
                <div className="absolute inset-0 bg-[#7b5455]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {proj.image ? (
                  <img 
                    alt={`${proj.title} Thumbnail`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                    src={proj.image}
                  />
                ) : (
                  <span className="font-display text-3xl font-medium text-[#685b5c]/40 group-hover:scale-105 transition-transform duration-700">
                    {proj.fallbackText}
                  </span>
                )}
              </div>
              <div className="p-6 space-y-3">
                <span className="font-body text-xs font-semibold text-[#7b5455] uppercase tracking-wider">
                  {proj.category}
                </span>
                <h3 className="font-display text-xl text-[#1a1c1a]">{proj.title}</h3>
                <p className="font-body text-sm text-[#504444] leading-relaxed line-clamp-2">
                  {proj.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
