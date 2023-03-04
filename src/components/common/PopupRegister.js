import React, { useState } from "react";
import { usePopup } from "../../contexts/popupContext";
import Bx from "wow-bx24";

const PopupRegister = () => {
  let f_rid = "966";
  let f_source = "WEBFORM";
  const f_query = window.location.search;
  if (f_query !== null && f_query !== "") {
    const search_value = window.location.search;
    const params = new URLSearchParams(search_value);
    f_source = "3";
    f_rid = params.get("rid");
  }
  const $bx = new Bx();
  // const date = new Date().toLocaleDateString("vi-VI");
  const { show, setShow } = usePopup();
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    gender: "",
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    sourceId: f_source,
    rid: f_rid,
    title: "CRM_FORM_NS_20/05/2023",
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    $bx
      .call("crm.lead.add", {
        fields: {
          ...data,
          TITLE: data.title,
          NAME: data.name,
          EMAIL: [{ VALUE: data.email }],
          PHONE: [{ VALUE: data.phone, VALUE_TYPE: "WORK" }],
          POST: data.position,
          ASSIGNED_BY_ID: data.rid,
          SOURCE_ID: data.sourceId,
        },
      })
      .then((result) => {
        setLoad(false);
        alert("Đăng ký thành công!");
        $bx.call("crm.lead.productrows.set", {
          id: result.result,
          rows: [
            {
              PRODUCT_ID: 16544,
              PRICE: 0,
              QUANTITY: 1,
              TAX_INCLUDED: "Y",
              TAX_RATE: 8,
            },
          ],
        });
        setData({
          ...data,
          gender: "",
          name: "",
          email: "",
          phone: "",
          position: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoad(false);
        alert("Đăng ký thất bại");
        console.log(error);
      });
  };
  return (
    <div>
      {!!show && (
        <div className="bg-[rgba(0,0,0,0.3)] fixed inset-0 z-[9999999] py-[20px]">
          <div className="w-[320px] md:w-[520px] mx-auto h-[610px] md:h-[630px] bg-white rounded-[8px]">
            <div className="flex-1 px-[20px] pt-[30px] md:p-[50px] h-[100%] relative">
              <div
                onClick={() => setShow(false)}
                className="absolute top-[10px] md:top-[20px] right-[20px] z-20 w-[18px] h-[18px] cursor-pointer"
              >
                <img src="/icons/close-icon.png" alt="" />
              </div>
              <h3 className="text-[26px] font-bold leading-[1.2] text-center mb-[10px] md:mb-[20px] text-black">
                ĐĂNG KÝ THAM DỰ
              </h3>
              <div>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-y-[9px]">
                    <div>
                      <select
                        className="text-sm px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full h-[50px] text-[#77787B]"
                        id="gender"
                        name="gender"
                        onChange={handleChange}
                      >
                        <option>Chọn danh xưng (Anh/Chị)</option>
                        <option value="Ông">Anh</option>
                        <option value="Bà">Chị</option>
                      </select>
                    </div>
                    <div>
                      <input
                        className="px-[17px] rounded-[6px] bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px] border border-blue text-[#000]"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Nhập Họ và tên"
                        required
                        value={data.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px] text-[#000]"
                        id="email"
                        name="email"
                        placeholder="Nhập Email"
                        type="email"
                        value={data.email}
                        required
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px] text-[#000]"
                        id="phone"
                        name="phone"
                        placeholder="Nhập Số điện thoại"
                        type="phone"
                        required
                        value={data.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <input
                        className="px-[17px] rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[50px] text-[#000]"
                        id="position"
                        name="position"
                        placeholder="Nghề nghiệp/Chức vụ"
                        type="text"
                        value={data.position}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <textarea
                        className="rounded-[6px] border border-blue bg-white outline-none w-full placeholder:text-sm placeholder:text-[#77787B] h-[132px] p-[15px] resize-none text-[#000]"
                        id="message"
                        name="message"
                        placeholder="Để lại lời nhắn cho chúng tôi"
                        value={data.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="text-center mt-[20px]">
                    {load === false ? (
                      <button type="submit" className="btn-register">
                        ĐĂNG KÝ NGAY
                      </button>
                    ) : (
                      <button className="inline-flex items-center justify-center btn-register">
                        <svg
                          className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx={12}
                            cy={12}
                            r={10}
                            stroke="currentColor"
                            strokeWidth={4}
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        ĐANG GỬI
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopupRegister;
