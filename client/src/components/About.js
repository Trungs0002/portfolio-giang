import React from 'react';

const About = () => {
  const values = [
    {
      icon: 'account_tree',
      title: 'Vận hành & Đối soát',
      description: 'Đối chiếu và xử lý dữ liệu giao dịch đa nền tảng với tính chính xác tuyệt đối.'
    },
    {
      icon: 'public',
      title: 'Kinh doanh Quốc tế',
      description: 'Tư duy hệ thống toàn cầu, được đào tạo bài bản bằng Tiếng Anh tại Đại học Ngoại thương.',
      offset: true
    },
    {
      icon: 'diversity_3',
      title: 'Điều phối & Lãnh đạo',
      description: 'Bí thư Chi đoàn năng động, quản trị kế hoạch và điều phối hoạt động tập thể xuất sắc.'
    },
    {
      icon: 'receipt_long',
      title: 'Hồ sơ & Chứng từ',
      description: 'Khả năng quản lý và chuẩn bị hồ sơ thanh toán, làm việc với hơn 100+ đối tác chuyên nghiệp.',
      offset: true
    }
  ];

  return (
    <section 
      className="px-6 md:px-16 py-32 bg-[#f4f3f1]" 
      id="about"
    >
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 space-y-6">
          <h2 className="font-display text-4xl text-[#1a1c1a]">Giới Thiệu</h2>
          <div className="w-12 h-[1px] bg-[#7b5455]"></div>
          <p className="font-body text-base text-[#504444] leading-relaxed">
            Tôi là sinh viên năm cuối chuyên ngành Kinh doanh quốc tế tại **Trường Đại học Ngoại thương (FTU)** với tư duy hệ thống sắc bén và thế mạnh nổi bật trong mảng vận hành & đối soát dữ liệu.
          </p>
          <p className="font-body text-base text-[#504444] leading-relaxed">
            Bên cạnh khả năng xử lý hồ sơ chứng từ thanh toán chuyên nghiệp cho mạng lưới hơn 100+ đối tác, tôi còn sử dụng thành thạo tiếng Anh trong học tập và công việc, luôn chủ động và linh hoạt thích ứng trong môi trường doanh nghiệp năng động.
          </p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((val, idx) => (
            <div 
              key={idx}
              className={`glass-card p-6 rounded-xl space-y-4 hover:shadow-[0_15px_50px_rgba(107,91,91,0.12)] transition-all duration-300 transform hover:-translate-y-1 ${
                val.offset ? 'sm:translate-y-8' : ''
              }`}
            >
              <span className="material-symbols-outlined text-[#7b5455] text-3xl">
                {val.icon}
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a]">{val.title}</h3>
              <p className="font-body text-sm text-[#504444] leading-relaxed">
                {val.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
