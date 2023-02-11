import React from "react";

const Heading = ({ children, className = "", props }) => {
  return (
    <h2
      {...props}
      // data-aos="fade-down"
      // data-aos-duration="1000"
      className={`text-[24px] md:text-[35px] font-bold text-center leading-[1.2] mb-[45px] uppercase ${className}`}
    >
      {children}
    </h2>
  );
};

export default Heading;
