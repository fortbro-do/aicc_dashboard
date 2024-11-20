import React, { useState, useEffect } from "react";
import DashboardAicc from "./DashboardAicc";
import DashboardDigitalContact from "./DashboardDigitalContact";
import DashboardMainCall from "./DashboardMainCall";

const DashboardSlider = () => {
  const pages = [
    <DashboardAicc key="DashboardAicc" />,
    <DashboardDigitalContact key="DashboardDigitalContact" />,
    <DashboardMainCall key="DashboardMainCall" />,
  ];
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [startX, setStartX] = useState(0);

  // 자동 재생
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(
      () => setCurrentPageIndex((prev) => (prev + 1) % pages.length),
      3000
    );
    return () => clearInterval(interval);
  }, [isPlaying, pages.length]);

  // 스와이프 처리
  const handleSwipe = (endX) => {
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      setCurrentPageIndex(
        (prev) => (prev + (diff > 0 ? 1 : -1) + pages.length) % pages.length
      );
    }
  };

  return (
    <div
      onMouseDown={(e) => setStartX(e.clientX)}
      onMouseUp={(e) => handleSwipe(e.clientX)}
      onTouchStart={(e) => setStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => handleSwipe(e.changedTouches[0].clientX)}
      className="relative flex flex-col items-center justify-center w-full h-full bg-gray-800"
      style={{ userSelect: "none" }}
    >
      {/* 현재 페이지 */}
      {pages[currentPageIndex]}

      {/* 재생/정지 버튼 */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsPlaying((prev) => !prev);
        }}
        className="absolute px-4 py-3 -translate-x-full left-full bottom-2 focus:outline-none"
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>
    </div>
  );
};

export default DashboardSlider;
