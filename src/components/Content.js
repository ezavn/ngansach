import React from "react";
import { usePopup } from "../contexts/popupContext";
import Countdown from "./common/Countdown";
import Heading from "./common/Heading";
import Slider from "react-slick";

const Content = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  const { show, setShow } = usePopup();
  return (
    <section id="content" className="bg-black py-section">
      <div className="mx-[15px] md:mx-[30px]">
        <Heading data-aos="fade-down" data-aos-duration="1000">
          NỘI DUNG CHƯƠNG TRÌNH LẬP & KIỂM SOÁT NGÂN SÁCH
        </Heading>
        <div className="hidden md:grid grid-cols-5 gap-[20px]">
          <ContentItem data-aos="fade-up" data-aos-duration="1000" number="1">
            Tư duy việc lập và kiểm <br /> soát ngân sách tối ưu <br /> hiệu quả
            cho doanh <br />
            nghiệp
          </ContentItem>
          <ContentItem
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            number="2"
          >
            5 bước chuẩn bị quan <br /> trọng cho việc lập ngân <br /> sách
          </ContentItem>
          <ContentItem
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            number="3"
          >
            Thiết lập mục tiêu của <br /> doanh nghiệp và kế <br /> hoạch thực
            thi của từng <br />
            phòng ban
          </ContentItem>
          <ContentItem
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
            number="4"
          >
            Quy trình lập ngân sách <br /> tối ưu và dễ dàng phối <br /> hợp
            thực thi giữa các <br />
            phòng ban
          </ContentItem>
          <ContentItem
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
            number="5"
          >
            Lập ngân sách theo kế <br /> hoạch của từng phòng <br /> ban bằng
            cách biểu mẫu <br />
            tiêu chuẩn
          </ContentItem>
        </div>
        <div className="block md:hidden content-slide">
          <Slider {...settings}>
            <ContentItemMobile number="1">
              Tư duy việc lập và kiểm <br /> soát ngân sách tối ưu <br /> hiệu
              quả cho doanh <br />
              nghiệp
            </ContentItemMobile>
            <ContentItemMobile number="2">
              5 bước chuẩn bị quan <br /> trọng cho việc lập ngân <br /> sách
            </ContentItemMobile>
            <ContentItemMobile number="3">
              Thiết lập mục tiêu của <br /> doanh nghiệp và kế <br /> hoạch thực
              thi của từng <br />
              phòng ban
            </ContentItemMobile>
            <ContentItemMobile number="4">
              Quy trình lập ngân sách <br /> tối ưu và dễ dàng phối <br /> hợp
              thực thi giữa các <br />
              phòng ban
            </ContentItemMobile>
            <ContentItemMobile number="5">
              Lập ngân sách theo kế <br /> hoạch của từng phòng <br /> ban bằng
              cách biểu mẫu <br />
              tiêu chuẩn
            </ContentItemMobile>
          </Slider>
        </div>
        <div className="h-[1px] w-full bg-[rgba(255,255,255,0.12)] mt-[40px] mb-[40px] md:mb-[80px]"></div>
        <div className="flex flex-col-reverse md:flex-row items-center gap-x-[100px] mb-[50px]">
          <div className="cursor-pointer">
            <img
              className="ticket"
              onClick={() => setShow(!show)}
              src="/images/ticket2.png"
              alt=""
            />
          </div>
          <div className="relative">
            <p className="md:text-left text-center relative text-[20px] font-bold text-yellow border-b border-white pb-[25px] mb-[30px]">
              ĐĂNG KÝ THAM GIA CHƯƠNG TRÌNH <br />
              <span className="text-[32px] text-white">
                LẬP & KIỂM SOÁT NGÂN SÁCH
              </span>{" "}
              <br />
              ĐỂ BIẾT THÊM NHIỀU KIẾN THỨC HẤP DẪN
              <img
                className="arrow absolute top-[120px] left-[-14px] md:top-[55px] md:left-[-100px]"
                srcSet="/icons/arrow.png 2x"
                alt=""
              />
            </p>
            <ul className="list-content">
              <li>
                <span>01/</span> Chọn danh xưng (Anh/Chị)
              </li>
              <li>
                <span>02/</span> Nhập Họ và tên
              </li>
              <li>
                <span>03/</span> Nhập Email
              </li>
              <li>
                <span>04/</span> Nhập Số điện thoại
              </li>
              <li>
                <span>05/</span> Nghề nghiệp/Chức vụ
              </li>
              <li>
                <span>06/</span> Để lại lời nhắn cho chúng tôi
              </li>
            </ul>
            <img
              className="absolute top-[25px] md:right-[-100px]"
              src="/images/circle.png"
              alt=""
            />
          </div>
        </div>
        <Countdown></Countdown>
      </div>
    </section>
  );
};

const ContentItem = ({ number, children, ...props }) => {
  return (
    <div
      {...props}
      className="flex justify-evenly md:justify-start md:gap-x-[18px] items-start"
    >
      <div className="text-[128px] text-[#DAAD51] font-medium leading-[0.8]">
        {number}
      </div>
      <div>{children}</div>
    </div>
  );
};

const ContentItemMobile = ({ number, children }) => {
  return (
    <div className="flex justify-evenly md:justify-start md:gap-x-[18px] items-start">
      <div className="text-[128px] text-[#DAAD51] font-medium leading-[0.8]">
        {number}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Content;
