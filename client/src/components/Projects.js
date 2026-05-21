import React from 'react';

const Projects = () => {
  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#f4f3f1]" 
      id="projects"
    >
      <div className="max-w-[1000px] mx-auto space-y-16">
        <div className="text-center space-y-4">
          <h2 className="font-display text-4xl text-[#1a1c1a]">Dự Án Nổi Bật</h2>
          <div className="w-12 h-[1px] bg-[#7b5455] mx-auto"></div>
          <p className="font-body text-base text-[#504444] max-w-xl mx-auto leading-relaxed">
            Dự án nghiên cứu nổi bật về mô hình kinh tế tuần hoàn và chuỗi cung ứng thời trang bền vững.
          </p>
        </div>

        {/* Center Single Featured Project Card */}
        <div className="glass-card rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(107,91,91,0.05)] border border-[#7b5455]/10 grid grid-cols-1 lg:grid-cols-12 gap-0 max-w-4xl mx-auto group">
          {/* Image Part */}
          <div className="lg:col-span-6 aspect-[4/3] lg:aspect-auto w-full overflow-hidden relative bg-[#efeeeb] min-h-[300px]">
            <div className="absolute inset-0 bg-[#7b5455]/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
            <img 
              alt="LOOM Denim Thumbnail" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 absolute inset-0" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlmFOCzATfSNwui5JEbsZspmsGNfIy9PNyAy4OolIDeR28277_m7riSQHepkuGsjd-htSQhqwxmUem9Q-6Zn9-2PQ7QjzA0QhEKM-ZuemK9CXtoVjq9NbYCUn1MIQ5-9Z3PM4RXl9DmBbI6ozr_aHtoNp8Lp6nxBnRYFC_Oo_iZMoePCAC6XtU4ch2UgxMkhchQ8ZD8YaDW1sBVuBYg7MS-DmYPHc--IKv2sVNpP4WIVz6qB7owvCO6I8quASF9h5l6Vsx0tGvrqm4"
            />
          </div>
          {/* Content Part */}
          <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col justify-center space-y-4 bg-[#faf9f6]">
            <span className="font-body text-xs font-semibold text-[#7b5455] uppercase tracking-wider block">
              Sustainable Fashion & Circular Economy
            </span>
            <h3 className="font-display text-3xl text-[#1a1c1a] leading-tight">LOOM Denim</h3>
            <p className="font-body text-base text-[#504444] leading-relaxed">
              Dự án nghiên cứu thời trang bền vững tập trung vào việc áp dụng các nguyên tắc kinh tế tuần hoàn và xây dựng chuỗi cung ứng minh bạch, giảm thiểu tác động môi trường.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                Kinh Tế Tuần Hoàn
              </span>
              <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                Chuỗi Cung Ứng
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
