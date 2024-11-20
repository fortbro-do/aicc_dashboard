import React from "react";
import AverageGraph from "./AverageGraph";
import { formatTime } from "../../utils/formatTime";

const AverageBox = ({ title, AValue, BValue, CValue }) => {
  // '시간'이 포함된 경우에만 시간 형식 적용
  const isTimeData = title.includes("시간");

  // 초 단위 데이터를 MM:SS 형식으로 변환 (시간 데이터일 때만)
  const displayAValue = isTimeData ? formatTime(AValue) : AValue;
  const displayBValue = isTimeData ? formatTime(BValue) : BValue;
  const displayCValue = isTimeData ? formatTime(CValue) : CValue;

  return (
    <>
      <div className="grid leading-tight">
        <p className="text-center text-white text-[42px] font-medium">
          {title}
        </p>
        <p className="text-6xl font-bold text-center text-white mt-[7px] pb-7 border-b-2 border-[#595959]">
          {displayBValue}
        </p>
        <div className="grid text-[#e92900] leading-tight">
          <p className="font-bold">
            <AverageGraph
              AValue={AValue}
              BValue={BValue}
              CValue={CValue}
              isTimeData={isTimeData}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default AverageBox;
