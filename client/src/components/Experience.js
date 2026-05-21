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
            <h2 className="font-display text-4xl text-[#1a1c1a] mb-4">Học Vấn</h2>
            <div className="w-12 h-[1px] bg-[#7b5455]"></div>
          </div>
          <div className="relative pl-8 border-l border-[#7b5455]/20 space-y-12">
            
            {/* FTU */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - 2027
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">
                Trường Đại học Ngoại thương (FTU)
              </h3>
              <p className="font-body text-base text-[#685b5c] mb-2 font-semibold">
                Quản trị Kinh Doanh Quốc Tế
              </p>
              <p className="font-body text-sm text-[#504444] mb-2">
                Chương trình Chất lượng cao giảng dạy 100% bằng tiếng Anh
              </p>
              <span className="inline-flex items-center px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                GPA: 3.66 / 4.0
              </span>
            </div>

            {/* IELTS */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - 2025
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">
                Chứng Chỉ Tiếng Anh
              </h3>
              <p className="font-body text-base text-[#685b5c] mb-2">
                IELTS 7.0 (Certified by IDP)
              </p>
              <p className="font-body text-sm text-[#504444] leading-relaxed">
                Sử dụng thành thạo tiếng Anh học thuật và giao tiếp thương mại trong môi trường làm việc quốc tế.
              </p>
            </div>
            
          </div>
        </div>

        {/* Experience Section */}
        <div className="lg:col-span-7 space-y-12">
          <div>
            <h2 className="font-display text-4xl text-[#1a1c1a] mb-4">Kinh Nghiệm</h2>
            <div className="w-12 h-[1px] bg-[#7b5455]"></div>
          </div>
          <div className="relative pl-8 border-l border-[#7b5455]/20 space-y-12">
            
            {/* LynkID */}
            <div className="relative glass-card p-6 rounded-xl -ml-6 border border-[#7b5455]/10 shadow-[0_10px_40px_rgba(107,91,91,0.04)]">
              <div className="absolute -left-[26px] top-8 w-3 h-3 bg-[#7b5455] rounded-full shadow-[0_0_10px_rgba(123,84,85,0.5)]"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2026 - Hiện tại
              </span>
              <h3 className="font-display text-2xl text-[#1a1c1a] mb-1">Thực tập sinh Vận hành</h3>
              <p className="font-body text-base text-[#685b5c] mb-4 font-semibold">
                Công ty Cổ phần LynkID (Hệ sinh thái VPBank) — Phòng Vận hành
              </p>
              
              <div className="space-y-4 font-body text-sm text-[#504444] leading-relaxed mb-6">
                <div>
                  <strong className="text-[#7b5455]">Đối soát tài chính &amp; Xử lý dữ liệu đa nền tảng:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Thực hiện quy trình đối soát dữ liệu giao dịch từ hệ thống nội bộ, các cổng thanh toán và đối tác liên kết.</li>
                    <li>Phân tích và đối chiếu các tệp dữ liệu lớn để đảm bảo tính đồng nhất, kịp thời phát hiện sai sót và giao dịch lỗi.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Quản lý hồ sơ thanh toán &amp; Quan hệ đối tác:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Đối soát và chuẩn bị hồ sơ thanh toán định kỳ cho mạng lưới 100+ đối tác trong hệ sinh thái Loyalty.</li>
                    <li>Trực tiếp làm việc với đại diện đối tác để làm rõ sai lệch số liệu và đảm bảo thanh toán đúng hạn.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-[#7b5455]">Tối ưu hóa &amp; Kết quả:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1">
                    <li>Hoàn thành đúng hạn 100% hồ sơ thanh toán mỗi kỳ đối soát với tỷ lệ chính xác tuyệt đối.</li>
                    <li>Áp dụng nguyên tắc Horenso hiệu quả, giúp giảm đáng kể thời gian chờ đợi xử lý hồ sơ.</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Đối Soát Dữ Liệu
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Quản Lý Hồ Sơ
                </span>
                <span className="px-3 py-1 bg-[#7b5455]/10 text-[#7b5455] rounded font-body text-xs font-semibold">
                  Horenso
                </span>
              </div>
            </div>

            {/* Teaching / Training */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] rounded-xl transition-all duration-300">
              <div className="absolute -left-[26px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - Hiện tại
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">Quản lý nhóm học tập &amp; Đào tạo</h3>
              <ul className="list-disc pl-5 mt-3 space-y-1 font-body text-sm text-[#504444] leading-relaxed mb-4">
                <li>Thiết lập lộ trình đào tạo cá nhân hóa cho nhóm 3-5 học viên, đảm bảo mục tiêu đầu ra đúng kế hoạch.</li>
                <li>Xây dựng hệ thống đánh giá định kỳ để đo lường sự tiến bộ, điều chỉnh linh hoạt phương pháp giảng dạy.</li>
                <li>Có khả năng đơn giản hóa các khái niệm, quy trình phức tạp giúp học viên tiếp thu tối ưu nhất.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Đào Tạo
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Lập Lộ Trình
                </span>
              </div>
            </div>

            {/* TA */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] rounded-xl transition-all duration-300">
              <div className="absolute -left-[26px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2023 - 2025
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">Trợ giảng Tiếng Anh</h3>
              <ul className="list-disc pl-5 mt-3 space-y-1 font-body text-sm text-[#504444] leading-relaxed mb-4">
                <li>Quản lý vận hành lớp học sĩ số 12-18 học viên, chuẩn bị học liệu đảm bảo trải nghiệm tốt nhất.</li>
                <li>Theo dõi chuyên cần, chấm bài và cập nhật báo cáo tiến độ học tập định kỳ cho phụ huynh.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Vận Hành Lớp Học
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Báo Cáo Tiến Độ
                </span>
              </div>
            </div>

            {/* Secretary */}
            <div className="relative p-6 -ml-6 hover:bg-[#f4f3f1] rounded-xl transition-all duration-300">
              <div className="absolute -left-[26px] top-8 w-3 h-3 bg-[#faf9f6] border-2 border-[#7b5455] rounded-full"></div>
              <span className="font-body text-xs font-semibold text-[#7b5455] tracking-widest uppercase mb-2 block">
                2020 - Hiện tại
              </span>
              <h3 className="font-display text-xl text-[#1a1c1a] mb-1">Bí thư Chi đoàn &amp; Điều phối hoạt động</h3>
              <p className="font-body text-sm text-[#685b5c] mb-3">Trường THPT Chuyên KHXH&NV &amp; Trường Đại học Ngoại thương</p>
              <ul className="list-disc pl-5 space-y-1 font-body text-sm text-[#504444] leading-relaxed mb-4">
                <li>Quản trị, xây dựng kế hoạch và trực tiếp điều phối sự kiện quy mô lớp/khoa đúng tiến độ và ngân sách.</li>
                <li>Đóng vai trò cầu nối thông tin giữa nhà trường và sinh viên; giải quyết nhanh các vấn đề phát sinh.</li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Điều Phối Sự Kiện
                </span>
                <span className="px-3 py-1 bg-[#e3e2e0] text-[#504444] rounded font-body text-xs">
                  Truyền Thông
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
