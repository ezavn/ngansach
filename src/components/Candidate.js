import React from "react";
import { usePopup } from "../contexts/popupContext";
import Heading from "./common/Heading";

const Candidate = () => {
  const { show, setShow } = usePopup();
  return (
    <section className="candidate bg-black pb-[70px] pt-[100px]">
      <div className="w-[250px] md:w-[390px] mx-auto">
        <Heading data-aos="fade-down" data-aos-duration="1000">
          ĐỐI TƯỢNG THAM GIA
        </Heading>
        <div className="flex gap-x-[30px] md:gap-x-[95px] items-start mb-[20px]">
          <CandidateItem
            data-aos="zoom-in"
            data-aos-duration="1000"
            img="/icons/candidate-1.png"
          >
            Chủ doanh nghiệp
          </CandidateItem>
          <CandidateItem
            data-aos="zoom-in"
            data-aos-duration="1000"
            img="/icons/candidate-2.png"
          >
            Trưởng bộ phận / <br /> phòng ban
          </CandidateItem>
        </div>
        <div className="text-center">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            className="btn-register"
            onClick={() => setShow(!show)}
          >
            ĐĂNG KÝ NGAY
          </a>
        </div>
      </div>
    </section>
  );
};

const CandidateItem = ({ img, children, ...props }) => {
  return (
    <div
      {...props}
      className="flex flex-col items-center justify-center gap-y-[12px]"
    >
      <img srcSet={`${img} 2x`} alt="" />
      <p className="text-center">{children}</p>
    </div>
  );
};

export default Candidate;
