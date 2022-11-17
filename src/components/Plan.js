import React from "react";
import Heading from "./common/Heading";

const Plan = () => {
  return (
    <section
      id="value"
      className="bg-black plan pt-[50px] pb-[20px] md:py-section"
    >
      <div className="page-container">
        <Heading data-aos="fade-down" data-aos-duration="1000">
          LẬP KẾ HOẠCH NGÂN SÁCH GIÚP DOANH NGHIỆP ĐẠT ĐƯỢC
        </Heading>
        <PlanItem
          img="/images/plan-1.png"
          desc="Thống nhất mục tiêu chung của doanh nghiệp Phân tích hiệu suất kinh doanh. Thông qua sự phân tích này để làm rõ những ưu điểm của quy trình hoạt động, những tồn tại cần cải thiện và nguyên nhân tạo ra để giúp chủ doanh nghiệp triển khai được mục tiêu chung của doanh nghiệp xuống từng phòng ban."
        ></PlanItem>
        <PlanItem
          reverse
          img="/images/plan-2.png"
          desc="Dự toán rủi ro Nhận diện rủi ro và thách thức có thể xảy ra do khách quan và chủ quan, nắm rõ năng lực tài chính khi tiến hành dự án, phát triển sản phẩm dịch vụ nhằm loại bỏ những yếu tố xấu, tập trung hơn vào các yếu tố tích cực. Giúp chủ doanh nghiệp có thể chủ động chuẩn bị các phương án đối phó với các tình huống xấu có thể xảy ra."
        ></PlanItem>
        <PlanItem
          img="/images/plan-3.png"
          desc="Chủ động dòng tiền Kế hoạch THU - CHI rõ được thiết lập giúp chủ doanh nghiệp dễ dàng quản lý dòng tiền, chi phí và kiểm soát hoạt động trong doanh nghiệp để tập trung vào việc tạo LỢI NHUẬN cao hơn, nhận được TIỀN MẶT lớn hơn và cuối cùng là tăng GIÁ TRỊ cho doanh nghiệp."
        ></PlanItem>
        <PlanItem
          reverse
          img="/images/plan-4.png"
          desc="Chủ động nguồn lực Đánh giá các nguồn lực thực hiện theo kế hoạch để tập trung sử dụng nguồn nhân lực, vật lực và tài lực vào phát triển một số điểm mạnh để tăng cường cạnh tranh, hạn chế đầu tư dàn trải, tránh lãng phí nguồn lực, hao mòn nhân tài."
        ></PlanItem>
        <PlanItem
          img="/images/plan-5.png"
          desc="Tạo bộ tiêu chuẩn về ngân sách Xây dựng lịch trình lập dự toán, đưa ra các hoạt động và công việc cụ thể cùng chi phí dự toán cho mỗi công việc. Tạo chuẩn mẫu biểu lập kế hoạch, đo lường thực tế để tạo cơ sở đánh giá hiệu suất của từng nguồn lực trong doanh nghiệp."
        ></PlanItem>
        <PlanItem
          reverse
          img="/images/plan-6.png"
          desc="Tạo gắn kết đội ngũ thực thi xuất sắc Hoà hợp được lợi ích cá nhân và lợi ích tập thể một cách minh bạch và rõ ràng. Thúc đẩy sự giao tiếp, phối hợp triển khai các chiến lược theo những giá trị văn hoá doanh nghiệp được thực thi một cách xuất sắc."
        ></PlanItem>
        <PlanItemMobile
          img="/images/plan-1.png"
          desc="Thống nhất mục tiêu chung của doanh nghiệp Phân tích hiệu suất kinh doanh. Thông qua sự phân tích này để làm rõ những ưu điểm của quy trình hoạt động, những tồn tại cần cải thiện và nguyên nhân tạo ra để giúp chủ doanh nghiệp triển khai được mục tiêu chung của doanh nghiệp xuống từng phòng ban."
        ></PlanItemMobile>
        <PlanItemMobile
          reverse
          img="/images/plan-2.png"
          desc="Dự toán rủi ro Nhận diện rủi ro và thách thức có thể xảy ra do khách quan và chủ quan, nắm rõ năng lực tài chính khi tiến hành dự án, phát triển sản phẩm dịch vụ nhằm loại bỏ những yếu tố xấu, tập trung hơn vào các yếu tố tích cực. Giúp chủ doanh nghiệp có thể chủ động chuẩn bị các phương án đối phó với các tình huống xấu có thể xảy ra."
        ></PlanItemMobile>
        <PlanItemMobile
          img="/images/plan-3.png"
          desc="Chủ động dòng tiền Kế hoạch THU - CHI rõ được thiết lập giúp chủ doanh nghiệp dễ dàng quản lý dòng tiền, chi phí và kiểm soát hoạt động trong doanh nghiệp để tập trung vào việc tạo LỢI NHUẬN cao hơn, nhận được TIỀN MẶT lớn hơn và cuối cùng là tăng GIÁ TRỊ cho doanh nghiệp."
        ></PlanItemMobile>
        <PlanItemMobile
          reverse
          img="/images/plan-4.png"
          desc="Chủ động nguồn lực Đánh giá các nguồn lực thực hiện theo kế hoạch để tập trung sử dụng nguồn nhân lực, vật lực và tài lực vào phát triển một số điểm mạnh để tăng cường cạnh tranh, hạn chế đầu tư dàn trải, tránh lãng phí nguồn lực, hao mòn nhân tài."
        ></PlanItemMobile>
        <PlanItemMobile
          img="/images/plan-5.png"
          desc="Tạo bộ tiêu chuẩn về ngân sách Xây dựng lịch trình lập dự toán, đưa ra các hoạt động và công việc cụ thể cùng chi phí dự toán cho mỗi công việc. Tạo chuẩn mẫu biểu lập kế hoạch, đo lường thực tế để tạo cơ sở đánh giá hiệu suất của từng nguồn lực trong doanh nghiệp."
        ></PlanItemMobile>
        <PlanItemMobile
          reverse
          img="/images/plan-6.png"
          desc="Tạo gắn kết đội ngũ thực thi xuất sắc Hoà hợp được lợi ích cá nhân và lợi ích tập thể một cách minh bạch và rõ ràng. Thúc đẩy sự giao tiếp, phối hợp triển khai các chiến lược theo những giá trị văn hoá doanh nghiệp được thực thi một cách xuất sắc."
        ></PlanItemMobile>
      </div>
    </section>
  );
};

const PlanItem = ({ img, desc, reverse }) => {
  return (
    <div
      className={`hidden md:flex flex-col-reverse md:flex-row items-center gap-x-[120px] ${
        reverse ? "flex-col md:flex-row-reverse gap-x-[20px]" : ""
      } mb-[30px] md:mb-0`}
    >
      <div data-aos="fade-left" data-aos-duration="1000" className="flex-1">
        <p className="text-justify">{desc}</p>
      </div>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="mb-[15px] md:mb-0 md:w-[580px] flex-shrink-0"
      >
        <img className="object-cover w-full" src={img} alt="" />
      </div>
    </div>
  );
};

const PlanItemMobile = ({ img, desc, reverse }) => {
  return (
    <div
      className={`flex md:hidden flex-col-reverse md:flex-row items-center gap-x-[120px] ${
        reverse ? "flex-col md:flex-row-reverse gap-x-[20px]" : ""
      } mb-[30px] md:mb-0`}
    >
      <div data-aos="fade-up" data-aos-duration="1000" className="flex-1">
        <p className="text-justify">{desc}</p>
      </div>
      <div
        data-aos="fade-down"
        data-aos-duration="1000"
        className="mb-[15px] md:mb-0 md:w-[580px] flex-shrink-0"
      >
        <img className="object-cover w-full" src={img} alt="" />
      </div>
    </div>
  );
};

export default Plan;
