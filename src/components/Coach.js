import React from "react";
import Heading from "./common/Heading";

const Coach = () => {
  return (
    <section
      id="coach"
      className="Coach bg-[url('../public/images/bg-green.png')] md:bg-[url('../public/images/bg-coach.png')] bg-center bg-no-repeat bg-cover py-section"
    >
      <div className="max-w-[1330px] mx-auto">
        <Heading data-aos="fade-down" data-aos-duration="1000">
          DIỄN GIẢ TẠI SỰ KIỆN
        </Heading>
        <div className="relative hidden md:flex">
          <div data-aos="fade-left" data-aos-duration="1000" className="flex-1">
            <p className="text-[25px] font-medium">COACH</p>
            <h3 className="text-[48px] font-medium leading-[1] mb-[15px]">
              <span className="text-[64px] font-black text-yellow">RITA</span>{" "}
              TÔ QUÝ NGỌC CHÂU
            </h3>
            <div className="content-1">
              <p className="line">
                <span className="text-greenLight">Top 8</span> Nhà huấn luyện
                Doanh nghiệp xuất sắc nhất Thế giới Tháng 8/2022 của hệ thống
                ActionCOACH
              </p>
              <div className="line">
                <h4 className="title">HỌC VỊ</h4> Đại học Kinh tế Thành phố Hồ
                Chí Minh - Chuyên ngành Tài chính kế toán.
              </div>
              <div className="line">
                <h4 className="title">KINH NGHIỆM</h4> 12 năm triển khai hệ
                thống phần mềm quản trị doanh nghiệp tại các Tập đoàn như Thành
                Thành Công Group, Nhà máy mía đường, Đại Việt, Nhiên Liệu Sài
                Gòn, Thanh niên Xung phong, Nhựa Đạt Hoà, Sonaderi... Tập đoàn
                đa quốc gia như: Meisheng, NTPM, Li&Fung...
              </div>
              <div className="line">
                <h4 className="title">TẦM NHÌN</h4>
                <p>Thế giới THỊNH VƯỢNG hơn khi PHỤ NỮ HẠNH PHÚC với 3 GIỎI:</p>
                <h5 className="italic title-sm">
                  "GIỎI VIỆC NƯỚC – GIỎI VIỆC NHÀ – GIỎI VIỆC YÊU THƯƠNG BẢN
                  THÂN"
                </h5>
              </div>
            </div>
            <div className="content-2">
              <h4 className="title">SỨ MỆNH</h4>
              <h5 className="title-sm">G - Growing leadership</h5>
              <p>
                Tôi giúp bạn phát triển kỹ năng lãnh đạo và trở thành nhà lãnh
                đạo truyền cảm hứng.
              </p>
              <h5 className="title-sm">R - Rule of game</h5>
              <p>
                Tôi giúp bạn biết cách thiết lập những luật chơi một cách tinh
                tế để tạo ra những kết quả kinh tế với quy mô mở rộng.
              </p>
              <h5 className="title-sm">E - Eco-system development</h5>
              <p>
                Tôi giúp bạn xây dựng và phát triển hệ sinh thái với hiệu suất
                vượt trội dựa vào nguồn lực, thời gian và năng lượng đang sở
                hữu.
              </p>
              <h5 className="title-sm">A - Abundant life</h5>
              <p>
                Tôi cùng bạn kiến tạo cuộc sống thịnh vượng cùng với đội ngũ,
                gia đình và cộng đồng.
              </p>
              <h5 className="title-sm"> T - Transfer generation</h5>
              <p>
                Tôi giúp bạn xây dựng mô hình chuyển giao thế hệ kế thừa luôn
                truyền thống và đổi mới theo thời đại.
              </p>
            </div>
            <div className="content-3">
              <h4 className="title">GIÁ TRỊ VĂN HÓA</h4>
              <ul>
                <li>
                  <span>L</span> - Love – Đam mê
                </li>
                <li>
                  <span>E</span> - Energy – Năng lượng
                </li>
                <li>
                  <span>A</span> - Adaptation – Thích nghi
                </li>
                <li>
                  <span>D</span> - Development – Phát triển
                </li>
                <li>
                  <span>E</span> - Enjoyment – Tận hưởng
                </li>
                <li>
                  <span>R</span> - Rich – Giàu có hạnh phúc
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1"></div>
          {/* <div className="absolute top-0 right-0">
            <img className="w-[700px]" src="/images/coach-rita.png" alt="" />
          </div> */}
        </div>
        <div className="flex flex-col items-center justify-center md:hidden">
          <div>
            <img className="w-[280px]" src="/images/coach-rita.png" alt="" />
          </div>
          <div className="flex-1 mx-[15px]">
            <p className="text-[22px] font-medium">COACH</p>
            <h3 className="text-[24px] font-medium leading-[1] mb-[15px]">
              <span className="text-[40px] font-black text-yellow">RITA</span>{" "}
              TÔ QUÝ NGỌC CHÂU
            </h3>
            <div className="content-1">
              <p className="line">
                <span className="text-greenLight">Top 8</span> Nhà huấn luyện
                Doanh nghiệp xuất sắc nhất Thế giới Tháng 8/2022 của hệ thống
                ActionCOACH
              </p>
              <div className="line">
                <h4 className="title">HỌC VỊ</h4> Đại học Kinh tế Thành phố Hồ
                Chí Minh - Chuyên ngành Tài chính kế toán.
              </div>
              <div className="line">
                <h4 className="title">KINH NGHIỆM</h4> 12 năm triển khai hệ
                thống phần mềm quản trị doanh nghiệp tại các Tập đoàn như Thành
                Thành Công Group, Nhà máy mía đường, Đại Việt, Nhiên Liệu Sài
                Gòn, Thanh niên Xung phong, Nhựa Đạt Hoà, Sonaderi... Tập đoàn
                đa quốc gia như: Meisheng, NTPM, Li&Fung...
              </div>
              <div className="line">
                <h4 className="title">TẦM NHÌN</h4>
                <p>Thế giới THỊNH VƯỢNG hơn khi PHỤ NỮ HẠNH PHÚC với 3 GIỎI:</p>
                <h5 className="italic title-sm">
                  "GIỎI VIỆC NƯỚC – GIỎI VIỆC NHÀ – GIỎI VIỆC YÊU THƯƠNG BẢN
                  THÂN"
                </h5>
              </div>
            </div>
            <div className="content-2">
              <h4 className="title">SỨ MỆNH</h4>
              <h5 className="title-sm">G - Growing leadership</h5>
              <p>
                Tôi giúp bạn phát triển kỹ năng lãnh đạo và trở thành nhà lãnh
                đạo truyền cảm hứng.
              </p>
              <h5 className="title-sm">R - Rule of game</h5>
              <p>
                Tôi giúp bạn biết cách thiết lập những luật chơi một cách tinh
                tế để tạo ra những kết quả kinh tế với quy mô mở rộng.
              </p>
              <h5 className="title-sm">E - Eco-system development</h5>
              <p>
                Tôi giúp bạn xây dựng và phát triển hệ sinh thái với hiệu suất
                vượt trội dựa vào nguồn lực, thời gian và năng lượng đang sở
                hữu.
              </p>
              <h5 className="title-sm">A - Abundant life</h5>
              <p>
                Tôi cùng bạn kiến tạo cuộc sống thịnh vượng cùng với đội ngũ,
                gia đình và cộng đồng.
              </p>
              <h5 className="title-sm"> T - Transfer generation</h5>
              <p>
                Tôi giúp bạn xây dựng mô hình chuyển giao thế hệ kế thừa luôn
                truyền thống và đổi mới theo thời đại.
              </p>
            </div>
            <div className="content-3">
              <h4 className="title">GIÁ TRỊ VĂN HÓA</h4>
              <ul>
                <li>
                  <span>L</span> - Love – Đam mê
                </li>
                <li>
                  <span>E</span> - Energy – Năng lượng
                </li>
                <li>
                  <span>A</span> - Adaptation – Thích nghi
                </li>
                <li>
                  <span>D</span> - Development – Phát triển
                </li>
                <li>
                  <span>E</span> - Enjoyment – Tận hưởng
                </li>
                <li>
                  <span>R</span> - Rich – Giàu có hạnh phúc
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coach;
