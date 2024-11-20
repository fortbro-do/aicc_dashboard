import React, { useState, useEffect, useMemo } from "react";
import "chart.js/auto";
import Header from "../../components/Header/Header";
import AverageBox from "../../components/AverageLayout/AverageBox";
import RowInfoBox from "../../components/BoxLayout/RowInfoBox";
import ColInfoBox from "../../components/BoxLayout/ColInfoBox";
import GridInfoBox from "../../components/BoxLayout/GridInfoBox";

const DashboardMainCall = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-3 pb-4 px-10 bg-[#333333]">
      <div className="flex-none">
        <Header title="대표전화 상담 현황" openStores={145} closeStores={21} />
      </div>
      <div className="grid grid-cols-[1fr_1fr] grid-rows-[0.7fr_1fr] gap-[10px] flex-grow ">
        <div className="grid gap-[10px]">
          <div className="grid grid-cols-[1fr_1.5fr] gap-[50px] p-5 px-9 bg-neutral-700 rounded-[30px] border border-[#595959] ">
            <ColInfoBox title="상담 완료" number={4934} addNum={121} />
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center h-full  py-3 px-11 bg-[#333333] rounded-[20px] font-medium">
                <RowInfoBox title="수신율" number="80%" />
              </div>
              <div className="flex items-center h-full  py-3 px-11 bg-[#333333] rounded-[20px] font-medium">
                <RowInfoBox title="S/L" number="66%" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_1.5fr] gap-[45px] p-5 px-9 bg-neutral-700 rounded-[30px] border border-[#595959] h-full">
          <div className="flex flex-col">
            <div className="flex items-center h-full border-b border-[#595959]">
              <RowInfoBox title="상담대기" number={15} />
            </div>
            <div className="flex items-center h-full border-b border-[#595959]">
              <RowInfoBox title="상담진행" number={139} />
            </div>
            <div className="flex items-center h-full ">
              <RowInfoBox title="대기시간" number="00:01" />
            </div>
          </div>
          <div className="flex flex-col gap-[10px]">
            <div className="h-full py-5 px-6 bg-[#333333] rounded-[20px] grid grid-cols-2">
              <div className="flex items-center border-r border-b border-[#737373]">
                <GridInfoBox title="로그인" number={21} />
              </div>
              <div className="flex items-center border-b border-[#737373] ">
                <GridInfoBox title="후처리" number={1} />
              </div>
              <div className="flex items-center border-r border-b border-[#737373] ">
                <GridInfoBox title="대기" number={3} />
              </div>
              <div className="flex items-center border-b  border-[#737373] ">
                <GridInfoBox title="이석" number={15} />
              </div>
              <div className="flex items-center  border-r border-[#737373] ">
                <GridInfoBox title="통화중" number={3} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow h-full col-span-full">
          <div className="grid h-full grid-cols-4 gap-[10px] flex-grow">
            <div className="py-6 px-[52px] bg-neutral-700 rounded-[30px] border border-[#595959] w-full h-full flex flex-col justify-center">
              <AverageBox
                title="일평균 건수"
                AValue={35}
                BValue={45}
                CValue={32}
              />
            </div>
            <div className="py-6 px-[52px] bg-neutral-700 rounded-[30px] border border-[#595959] w-full h-full flex flex-col justify-center">
              <AverageBox
                title="평균 상담시간"
                AValue={300}
                BValue={400}
                CValue={2}
              />{" "}
              {/* 초 단위 값 */}
            </div>
            <div className="py-6 px-[52px] bg-neutral-700 rounded-[30px] border border-[#595959] w-full h-full flex flex-col justify-center">
              <AverageBox
                title="최초반응시간"
                AValue={100}
                BValue={278}
                CValue={190}
              />{" "}
              {/* 초 단위 값 */}
            </div>
            <div className="py-6 px-[52px] bg-neutral-700 rounded-[30px] border border-[#595959] w-full h-full flex flex-col justify-center">
              <AverageBox
                title="미분류 건수"
                AValue={200}
                BValue={300}
                CValue={301}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainCall;
