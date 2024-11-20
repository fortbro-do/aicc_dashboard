import React from "react";

function RowInfoBox({ title, number }) {
  let numberSize;
  let numberColor;
  switch (title) {
    case "1차 종결":
    case "수신율":
      numberColor = "text-[#0294ff]";
      numberSize = "text-[54px]";
      break;
    case "고객평점":
    case "S/L":
      numberColor = "text-[#e92900]";
      numberSize = "text-[54px]";
      break;
    case "상담대기":
      numberColor = "text-[#e92900]";
      numberSize = "text-[50px]";
      break;
    default:
      numberColor = "text-white";
      numberSize = "text-[50px]";
  }
  return (
    <>
      <div className="flex items-center justify-between w-full leading-tight">
        <p className="font-medium  text-white text-[34px]">{title}</p>

        <div className="grid  text-right text-[#e92900] leading-tight ">
          <p className={`${numberColor} ${numberSize} font-bold`}>{number}</p>
        </div>
      </div>
    </>
  );
}

export default RowInfoBox;
