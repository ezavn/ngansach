import React, { useState } from "react";
import { usePopup } from "../contexts/popupContext";

const Header = () => {
  const { show, setShow } = usePopup();
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="header bg-[rgba(2,38,24)] relative">
      <div className="page-container flex justify-between items-center py-[10px]">
        <div>
          <img srcSet="/images/logo.png 2x" alt="" />
        </div>
        <div className="hidden md:flex nav items-center gap-x-[40px]">
          <a
            className="font-bold transition-all opacity-80 hover:opacity-100"
            href="#content"
          >
            NỘI DUNG
          </a>
          <a
            className="font-bold transition-all opacity-80 hover:opacity-100"
            href="#value"
          >
            GIÁ TRỊ
          </a>
          <a
            className="font-bold transition-all opacity-80 hover:opacity-100"
            href="#coach"
          >
            DIỄN GIẢ
          </a>
        </div>
        <a
          className="!hidden btn-register md:!inline-flex"
          onClick={() => setShow(!show)}
        >
          ĐĂNG KÝ NGAY
        </a>
        <div className="block md:hidden">
          <img
            onClick={() => setOpenMenu(!openMenu)}
            className="w-[40px] h-[40px]"
            src={`${
              openMenu ? "/icons/close-menu.png" : "/icons/hamburger.png"
            }`}
            alt=""
          />
        </div>
      </div>
      {openMenu ? (
        <div className="absolute bg-[rgba(2,38,24)] top-[100%] left-0 right-0 py-[30px] z-[99]">
          <div className="flex flex-col nav items-center gap-y-[20px]">
            <a className="font-bold" href="#content">
              NỘI DUNG
            </a>
            <a className="font-bold" href="#value">
              GIÁ TRỊ
            </a>
            <a className="font-bold mb-[20px]" href="#coach">
              DIỄN GIẢ
            </a>
          </div>
          <div className="text-center">
            <a className="btn-register" onClick={() => setShow(!show)}>
              ĐĂNG KÝ NGAY
            </a>
          </div>
        </div>
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
