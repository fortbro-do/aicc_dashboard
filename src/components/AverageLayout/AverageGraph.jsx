import React from "react";
import { formatTime } from "../../utils/formatTime";
const AverageGraph = ({ AValue, BValue, CValue, isTimeData }) => {
  // 초 단위로 계산하여 위치를 정렬
  const maxValue = Math.max(AValue, BValue, CValue);
  const maxPosition = 90;

  // 각 값의 위치 계산
  const calculatePosition = (value) => (value / maxValue) * maxPosition;

  const APosition = calculatePosition(AValue);
  const BPosition = calculatePosition(BValue);
  const CPosition = calculatePosition(CValue);

  // const shouldAddMargin = Math.abs(AValue - CValue) <= 2;
  const shouldAddMargin = isTimeData
    ? Math.abs(APosition - CPosition) <= 30 // 시간일 경우 APosition과 CPosition의 차이가 0 ~ 30
    : Math.abs(AValue - CValue) <= 5; // 숫자일 경우 5 이하 차이
  const todayValue = AValue < CValue;

  return (
    <div className="relative w-full min-h-[230px] h-full">
      {/* AValue 표시 */}
      <div
        className={`${
          shouldAddMargin ? "bottom-0" : "bottom-9"
        } block absolute text-center transform -translate-x-1/2 text-[#a6a6a6]`}
        style={{ left: `${APosition}%` }}
      >
        <div className="text-[32px]">▲</div>
        <span
          className={`${
            shouldAddMargin ? "mt-9" : "mt-0"
          } block text-center text-[#d9d9d9] text-[32px] font-medium`}
        >
          {isTimeData ? formatTime(AValue) : AValue}
        </span>
      </div>

      {/* BValue 표시 */}
      <div
        className="absolute text-center transform -translate-x-1/2 top-[42px] text-[#d9d9d9]"
        style={{ left: `${BPosition}%` }}
      >
        <span className="text-center text-[#d9d9d9] text-[32px] font-medium">
          {isTimeData ? formatTime(BValue) : BValue}
        </span>
        <div className="text-[32px]">▼</div>
      </div>

      {/* 기준선 */}
      <div className="absolute left-0 right-0 top-1/2">
        <div
          className={`${
            todayValue ? "bg-red-500" : "bg-blue-500"
          } h-[6px] w-full rounded-xl`}
        ></div>
      </div>

      {/* CValue 표시 */}
      <div
        className="absolute text-center transform -translate-x-1/2 bottom-9 text-[#ffcf02]"
        style={{ left: `${CPosition}%` }}
      >
        <div className="text-[32px]">▲</div>
        <span className="text-center text-[#ffcf02] text-[32px] font-medium">
          {isTimeData ? formatTime(CValue) : CValue}
        </span>
      </div>
    </div>
  );
};

export default AverageGraph;
