import React, { useEffect, useState } from "react";

const Countdown = () => {
  const numberFormat = (num) => {
    return num.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  };
  const timediff = Math.floor(
    new Date("January 06,2023 00:00:00").getTime() - new Date().getTime()
  );
  const [deadline, setDeadline] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [duration, setDuration] = useState(timediff);
  useEffect(() => {
    if (timediff > 0) {
      const timer = setTimeout(() => {
        setDuration(duration - 1000);
        setDeadline({
          days: numberFormat(Math.floor(duration / (1000 * 60 * 60 * 24))),
          hours: numberFormat(
            Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
          ),
          minutes: numberFormat(
            Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60))
          ),
          seconds: numberFormat(Math.floor((duration % (1000 * 60)) / 1000)),
        });
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [duration]);
  return (
    <div className="max-w-[300px] mx-auto flex flex-col items-center justify-center">
      <h3 className="text-center text-[20px] font-bold mb-[10px]">
        THỜI GIAN ĐĂNG KÝ ĐÓNG SAU
      </h3>
      <div className="flex items-center justify-center md:justify-start gap-x-[10px]">
        <Box>{deadline.days}</Box>
        <Box type="giờ">{deadline.hours}</Box>
        <Box type="phút ">{deadline.minutes}</Box>
        <Box type="giây">{deadline.seconds}</Box>
      </div>
    </div>
  );
};

const Box = ({ children, type = "ngày" }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[55px] h-[55px] font-bold rounded-[10px] flex items-center flex-col justify-center bg-red border border-yellow px-[6px] py-[15px] mb-[6px]">
        <h4 className="text-white font-semibold md:text-[36px] text-[32px] flex-1 leading-[1]">
          {children}
        </h4>
      </div>
      <span className="font-bold text-white capitalize">{type}</span>
    </div>
  );
};

export default Countdown;
