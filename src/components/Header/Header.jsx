import React, { useState, useEffect } from "react";

function Header({ title, openStores, closeStores }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  // 매초마다 현재 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

  // 날짜와 시간을 포맷하는 함수
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"][date.getDay()];
    return `${year}. ${month}. ${day} (${dayOfWeek})`;
  };

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}: ${minutes}: ${seconds} `;
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col items-center col-span-full">
        <h2 className="w-[700px] py-4 px-28 text-center text-neutral-800 text-5xl font-bold bg-[#ffcf02] rounded-bl-[40px] rounded-br-[40px]">
          {title}
        </h2>

        <div className="flex items-center justify-between w-full pt-5">
          <div className="flex items-center">
            <p className="flex items-center gap-2 text-white text-[26px] font-normal">
              <span>
                <img src="/assets/images/img_Clock.png" alt="Clock icon" />
              </span>
              <span>{formatDate(currentTime)}</span>
              <span className="tabular-nums">{formatTime(currentTime)}</span>
              <span>명절연휴</span>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <p className="h-[51px] pl-1.5 pr-5 py-[5px] rounded-[30px] border border-[#4d4d4d] flex justify-start items-center gap-[11px]">
              <span className="px-3.5 py-1.5 h-[41px] bg-[#f2f2f2] rounded-[20px] text-neutral-800 text-[22px] font-semibold">
                영업
              </span>
              <span className="text-white text-3xl font-bold flex justify-start items-center gap-[11px]">
                {openStores}
                <span className="text-[#d9d9d9] text-xl font-normal">
                  (EM 11 TR 3)
                </span>
              </span>
            </p>

            <p className="h-[51px] pl-1.5 pr-5 py-[5px] rounded-[30px] border border-[#4d4d4d] flex justify-start items-center gap-[11px]">
              <span className="px-3.5 py-1.5 h-[41px] bg-neutral-800 rounded-[20px] text-white text-[22px] font-semibold">
                휴업
              </span>
              <span className="text-white text-3xl font-bold flex justify-start items-center gap-[11px]">
                {closeStores}
                <span className="text-[#d9d9d9] text-xl font-normal">
                  (EM 11 TR 3)
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
