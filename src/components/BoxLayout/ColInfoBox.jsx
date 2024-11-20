import React from "react";

const ColInfoBox = ({ title, number, addNum }) => {
  const titleSize = title === "상담 완료" ? "text-[52px]" : "text-[38px]";
  const addNumDisplay = addNum ? "inline-block" : "hidden";
  const numberColor = title === "수신율" ? "text-[#0294ff]" : "text-[#e92900]";

  // const displayNumber =
  //   title === "상담 완료"
  //     ? (number + addNum).toLocaleString()
  //     : number.toLocaleString();
  const displayNumber =
    title === "상담 완료" ? number.toLocaleString() : number;

  function getIconSrc(title) {
    switch (title) {
      case "상담 완료":
        return "/assets/images/img_ConsultationCompleted.png";
      case "수신율":
        return "/assets/images/img_ReceptionRate.png";
      case "고객평점":
        return "/assets/images/img_CustomerRating.png";
      default:
        return "/assets/images/img_CustomerRating.png";
    }
  }

  return (
    <div>
      <div className="flex items-center gap-4 leading-tight">
        <p>
          <img
            src={getIconSrc(title)}
            alt={`${title} icon`}
            className="w-full"
          />
        </p>
        <p className={`w-full font-medium text-white ${titleSize} text-left`}>
          {title}
        </p>
      </div>
      <div className="grid text-right text-[#e92900] leading-tight mt-4">
        <p className={`${numberColor} text-[80px] font-bold`}>
          {displayNumber}
        </p>
        <p className={`addNum ${addNumDisplay} mt-2 text-[70px] font-semibold`}>
          (+{addNum})
        </p>
      </div>
    </div>
  );
};

export default ColInfoBox;
