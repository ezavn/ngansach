import React from "react";
import Heading from "./common/Heading";
import Slider from "react-slick";

const ChallengeNProfit = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
  };
  return (
    <section className="bg-[url('../public/images/bg-green.png')] bg-center bg-no-repeat bg-cover py-section">
      <div className="page-container mb-section">
        <Heading data-aos="fade-down" data-aos-duration="1000">
          NHỮNG THÁCH THỨC KHI DOANH NGHIỆP <br /> KHÔNG LẬP NGÂN SÁCH
        </Heading>
        <div className="grid grid-cols-2 gap-x-[15px] md:gap-x-[25px] max-w-[720px] mx-auto mb-[45px]">
          <ChallengeItem
            data-aos="flip-left"
            data-aos-duration="1000"
            number="/icons/challenge-1.png"
          >
            Không chi theo kế hoạch mà chi theo cảm tính, thiếu cơ sở để tạo
            chuẩn mực đo lường thực thi, luôn có cảm giác bất an khi điều hành
            doanh nghiệp.
          </ChallengeItem>
          <ChallengeItem
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="200"
            number="/icons/challenge-2.png"
          >
            Không kiểm soát được dòng tiền để lên kế hoạch cho các hoạt động
            phát triển kinh doanh.
          </ChallengeItem>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-[50px] gap-x-[15px] md:gap-x-[25px]">
          <ChallengeItem
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="400"
            number="/icons/challenge-3.png"
          >
            Không phân bổ được nguồn lực phù hợp theo lộ trình phát triển cá
            nhân với lộ trình phát triển doanh n ghiệp.
          </ChallengeItem>
          <ChallengeItem
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="600"
            number="/icons/challenge-4.png"
          >
            Không tạo được sự rõ ràng minh bạch dẫn đến sự rạn nứt các mối quan
            hệ giữa các cổ đông, giữa các phòng ban với nhau.
          </ChallengeItem>
          <ChallengeItem
            data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="800"
            number="/icons/challenge-5.png"
          >
            Không có khả năng đánh giá được những cơ hội và thách thức khi tiếp
            cận bằng những con số cụ thể để ra quyết định trong thời gian nhanh
            nhất.
          </ChallengeItem>
        </div>
      </div>
      <div className="mx-[30px]">
        <Heading data-aos="fade-down" data-aos-duration="1000">
          LỢI ÍCH CỦA VIỆC LẬP & KIỂM SOÁT NGÂN SÁCH
        </Heading>
        <div className="hidden md:grid md:grid-cols-3 gap-x-[70px] max-w-[1000px] mx-auto mb-[70px]">
          <ProfitItem
            data-aos="zoom-in"
            data-aos-duration="1000"
            img="/icons/profit-1.png"
            desc="Các kênh tạo ra nguồn thu và kế hoạch chi để vận hành, phát triển kinh doanh dựa trên nguồn lực và mục tiêu doanh nghiệp."
          >
            Dự báo kế hoạch <br /> kinh doanh
          </ProfitItem>
          <ProfitItem
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="200"
            img="/icons/profit-2.png"
            desc="Phân bố nguồn lực Việc lập ngân sách thực thi theo kế hoạch được phân bổ nguồn lực một cách hợp lý về con người, vốn, tài sản để tối ưu hoá hiệu quả."
          >
            Phân bố <br /> nguồn lực
          </ProfitItem>
          <ProfitItem
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="400"
            img="/icons/profit-3.png"
            desc="Tăng tính cam kết, chịu trách nhiệm, giải quyết xung đột của đội ngũ thông qua ngân sách một cách minh bạch, rõ ràng."
          >
            Gắn kết đội <br /> ngũ thực thi <br /> xuất sắc
          </ProfitItem>
        </div>
        <div className="hidden md:grid md:grid-cols-2 gap-x-[70px] max-w-[666px] mx-auto">
          <ProfitItem
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="600"
            img="/icons/profit-4.png"
            desc="Tạo sự công bằng – ghi nhận đóng góp của từng phòng ban vào kết quả theo mục tiêu chung mà doanh nghiệp hướng đến."
          >
            Xây dựng chính sách dựa vào ngân sách của từng bộ phận - phòng ban
          </ProfitItem>
          <ProfitItem
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-delay="800"
            img="/icons/profit-5.png"
            desc="Tăng cao hiệu quả kiểm soát tỷ suất lợi nhuận theo từng nhóm ngành sản phẩm – dịch vụ, đồng thời có cơ sở ra quyết định nhanh khi tiếp cận cơ hội và thách thức trong thời kỳ Vuca."
          >
            Tạo ra thước đo chuẩn mực dựa vào ngân sách
          </ProfitItem>
        </div>
        <div className="block md:hidden">
          <Slider {...settings}>
            <ProfitItemMobile
              img="/icons/profit-1.png"
              desc="Các kênh tạo ra nguồn thu và kế hoạch chi để vận hành, phát triển kinh doanh dựa trên nguồn lực và mục tiêu doanh nghiệp."
            >
              Dự báo kế hoạch <br /> kinh doanh
            </ProfitItemMobile>
            <ProfitItemMobile
              img="/icons/profit-2.png"
              desc="Phân bố nguồn lực Việc lập ngân sách thực thi theo kế hoạch được phân bổ nguồn lực một cách hợp lý về con người, vốn, tài sản để tối ưu hoá hiệu quả."
            >
              Phân bố <br /> nguồn lực
            </ProfitItemMobile>
            <ProfitItemMobile
              img="/icons/profit-3.png"
              desc="Tăng tính cam kết, chịu trách nhiệm, giải quyết xung đột của đội ngũ thông qua ngân sách một cách minh bạch, rõ ràng."
            >
              Gắn kết đội <br /> ngũ thực thi <br /> xuất sắc
            </ProfitItemMobile>
            <ProfitItemMobile
              img="/icons/profit-4.png"
              desc="Tạo sự công bằng – ghi nhận đóng góp của từng phòng ban vào kết quả theo mục tiêu chung mà doanh nghiệp hướng đến."
            >
              Xây dựng chính sách dựa vào ngân sách của từng bộ phận - phòng ban
            </ProfitItemMobile>
            <ProfitItemMobile
              img="/icons/profit-5.png"
              desc="Tăng cao hiệu quả kiểm soát tỷ suất lợi nhuận theo từng nhóm ngành sản phẩm – dịch vụ, đồng thời có cơ sở ra quyết định nhanh khi tiếp cận cơ hội và thách thức trong thời kỳ Vuca."
            >
              Tạo ra thước đo chuẩn mực dựa vào ngân sách
            </ProfitItemMobile>
          </Slider>
        </div>
      </div>
    </section>
  );
};

const ChallengeItem = ({ number, children, ...props }) => {
  return (
    <div
      {...props}
      className="rounded-[10px] challenge-item px-[17px] pt-[24px] pb-[5px] relative h-auto md:h-[128px]"
    >
      <div className="absolute left-[50%] translate-x-[-50%] top-[-38px]">
        <img srcSet={`${number} 2x`} alt="" />
      </div>
      <p className="text-justify md:text-center text-[#1E1E1E] font-medium">
        {children}
      </p>
    </div>
  );
};

const ProfitItem = ({ img, children, desc, ...props }) => {
  return (
    <div
      {...props}
      className="bg-[url('../public/images/bg-grey.png')] bg-center bg-no-repeat bg-cover rounded-[10px] relative py-[30px] pl-[10px] pr-[8px]"
    >
      <div className="flex">
        <div className="w-[85px] flex-shrink-0"></div>
        <div className="flex-1 font-medium uppercase text-cream">
          {children}
        </div>
      </div>
      <p className="mt-[60px] text-justify">{desc}</p>
      <div className="absolute top-[-35px] left-[-45px] w-[140px]">
        <img srcSet={`${img} 2x`} alt="" />
      </div>
    </div>
  );
};

const ProfitItemMobile = ({ img, children, desc }) => {
  return (
    <div className="bg-[url('../public/images/bg-grey.png')] bg-center bg-no-repeat bg-cover rounded-[10px] py-[30px] pl-[10px] pr-[8px]">
      <div className="flex items-center gap-x-[15px]">
        <div className="w-[120px] flex-shrink-0">
          <div className="">
            <img srcSet={`${img} 2x`} alt="" />
          </div>
        </div>
        <div className="text-[18px] flex-1 font-medium uppercase text-cream">
          {children}
        </div>
      </div>
      <p className="mt-[30px] text-justify">{desc}</p>
    </div>
  );
};

export default ChallengeNProfit;
