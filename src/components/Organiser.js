import React from "react";

const Organiser = () => {
  return (
    <section className="relative z-[10] organiser md:bg-[url('../public/images/organiser.png')] bg-[url('../public/images/organiser-mobile.png')] md:bg-center bg-no-repeat bg-cover py-[60px]">
      <div className="page-container">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-[35px] font-bold text-center leading-[1.2] mb-[20px]"
        >
          ĐƠN VỊ TỔ CHỨC
        </h2>
        <h3
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-[32px] font-semibold text-yellow text-center mb-[20px]"
        >
          ACTIONCOACH CBD FIRM
        </h3>
        <p className="text-justify md:text-center relative z-[12]">
          FIRM NHƯỢNG QUYỀN SỐ 1 ĐÔNG NAM Á ActionCOACH CBD Firm là văn phòng
          nhượng quyền của hệ thống ActionCOACH tại TP. HCM. Chúng tôi huấn
          luyện các chủ doanh nghiệp thông qua các hoạt động đồng hành, hướng
          dẫn, hỗ trợ, đặt câu hỏi và tạo động lực cho đến khi chủ doanh nghiệp
          tự tìm ra giải pháp cho thực trạng của doanh nghiệp mình. ActionCOACH
          CBD Firm cam kết mang lại những giá trị cao hơn sự đầu tư của Khách
          Hàng.
        </p>
        <img
          className="hidden md:block absolute z-[11] bottom-0 right-0 h-[300px]"
          src="/icons/cbd.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default Organiser;
