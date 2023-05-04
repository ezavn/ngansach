import React from "react";

const Hero = () => {
  return (
    <section className="hero bg-[url('../public/images/ns-mobile-hero.png')] md:bg-[url('../public/images/ns-pc-hero.png')] bg-center bg-no-repeat bg-cover">
      <div className="page-container relative h-[1300px] md:h-[730px]">
        <img
          className="hidden md:inline-block absolute right-[40px] top-[85px] w-[60px] h-[60px] gold"
          srcSet="/icons/gold.png 2x"
          alt=""
        />
        <img
          className="hidden md:inline-block absolute bottom-[30px] left-[20px] gold2"
          srcSet="/icons/gold2.png 2x"
          alt=""
        />
        <div className="absolute right-[40px] md:right-0 bottom-[-87px] md:bottom-[-88px] w-[300px] md:w-[700px]">
          <img
            className="hidden md:block"
            srcSet="/images/slogan.png 2x"
            alt=""
          />
          <img
            className="inline-block md:hidden"
            srcSet="/images/slogan-mb.png 2x"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
