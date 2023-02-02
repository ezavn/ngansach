import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-black py-[50px]">
      <div className="flex flex-col justify-between md:flex-row page-container">
        <div className="">
          <img srcSet="/icons/logo-footer.png 2x" alt="" />
          <p className="text-justify">
            ActionCOACH là thương hiệu huấn luyện doanh{" "}
            <br className="hidden md:block" /> nghiệp hàng đầu thế giới, được
            Brad Sugars thành <br className="hidden md:block" /> lập năm 1993
            tại Brisbane, Australia trong thời{" "}
            <br className="hidden md:block" /> điểm khái niệm về huấn luyện
            doanh nghiệp còn <br className="hidden md:block" /> khá lạ lẫm đối
            với các quốc gia trên thế giới.
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-bold mt-[40px] mb-[15px]">
            THÔNG TIN LIÊN HỆ
          </h3>
          <p className="text-[18px] font-semibold mb-[10px]">
            ActionCOACH CBD FIRM
          </p>
          <p className="text-[18px] font-semibold mb-[10px]">
            Firm Huấn luyện doanh nghiệp số <br /> 1 Việt Nam
          </p>
          <p className="text-[18px] mb-[10px]">
            Địa chỉ: Tầng 15, Tháp B, Toà Nhà Viettel, <br /> 285 CMT8, P.12,
            Q.10, TP.HCM
          </p>
          <p className="text-[18px] mb-[10px]">
            Email: info@actioncoachcbd.com
          </p>
          <p className="text-[18px] mb-[10px]">
            Hotline: <span className="font-semibold">1800 8087</span>
          </p>
        </div>
        <div>
          <h3 className="text-[24px] font-bold mt-[40px] mb-[15px]">FANPAGE</h3>
          <a
            href="https://www.facebook.com/Rita-Toquyngocchaucom-Nh%C3%A0-hu%E1%BA%A5n-luy%E1%BB%87n-doanh-nghi%E1%BB%87p-101483091323484"
            target="_blank"
            rel="noreferrer"
          >
            <img className="md:w-[380px]" src="/images/fanpage.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
