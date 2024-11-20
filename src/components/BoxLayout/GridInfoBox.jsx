import React from "react";

const GridInfoBox = ({ title, number }) => {
  {
    return (
      <div
        className={`flex items-center justify-between leading-tight w-full h-full py-1
        ${title === "이석" || title === "후처리" ? "pl-4" : "pr-4"}
        ${title === "대기" || title === "이석" ? "py-2.5" : "py-0"}
        `}
      >
        <p className="font-normal text-white text-[40px]">{title}</p>

        <div className="grid leading-tight text-right">
          <p className="text-white text-[46px] font-bold">{number}</p>
        </div>
      </div>
    );
  }
};

export default GridInfoBox;
