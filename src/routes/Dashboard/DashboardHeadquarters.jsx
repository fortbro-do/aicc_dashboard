import React from "react";
import Header from "../../components/Header/Header";

function DashboardHeadquarters() {
  const headData = [
    {
      id: "head",
      channel: "채널",
      division: "구분",
      entire: "전체",
      headOffice: "본사",
      evclub: "EV클럽",
      universe: "유니버스",
      ematicon: "이마티콘",
      emart: "이마트",
      traderas: "TRADERAS",
      nobrand: "노브랜드",
      everyday: "에브리데이",
    },
  ];
  // 필요한 값을 기반으로 동적 changeValue를 생성하는 함수
  function calculateChangeValue(totalValue, comparisonValue) {
    return totalValue - comparisonValue;
  }

  // comparisonValue를 사용하여 callData 초기화
  const callData = [
    [
      {
        id: "call",
        channel: "전화",
        division: "요청",
        entire: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 120) },
        ],
        headOffice: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 130) },
        ],
        evclub: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 140) },
        ],
        universe: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 150) },
        ],
        ematicon: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 160) },
        ],
        emart: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 170) },
        ],
        traderas: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 180) },
        ],
        nobrand: [
          { totalValue: 0 },
          { changeValue: calculateChangeValue(0, 0) },
        ],
        everyday: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 190) },
        ],
      },
      {
        id: "call1",
        division: "수신",
        entire: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
        headOffice: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
        evclub: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
        universe: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
        ematicon: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
        emart: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
        traderas: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
      },
      {
        id: "call2",
        division: "수신율",
        entire: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
        headOffice: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
        evclub: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
        universe: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
        ematicon: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
        emart: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
        traderas: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
      },
      {
        id: "call3",
        division: "상담건수",
        entire: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
        headOffice: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
        evclub: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
        universe: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
        ematicon: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
        emart: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
        traderas: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
      },
      {
        id: "call4",
        division: "상담시간",
        entire: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
        headOffice: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
        evclub: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
        universe: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
        ematicon: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
        emart: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
        traderas: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
      },
      {
        id: "call5",
        division: "후처리시간",
        entire: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
        headOffice: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
        evclub: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
        universe: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
        ematicon: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
        emart: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
        traderas: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
      },
      {
        id: "call6",
        division: "SL",
        entire: [
          { totalValue: 65 },
          { changeValue: calculateChangeValue(65, 70) },
        ],
        headOffice: [
          { totalValue: 65 },
          { changeValue: calculateChangeValue(65, 70) },
        ],
        evclub: [
          { totalValue: 65 },
          { changeValue: calculateChangeValue(65, 70) },
        ],
        universe: [
          { totalValue: 65 },
          { changeValue: calculateChangeValue(65, 70) },
        ],
        ematicon: [
          { totalValue: 65 },
          { changeValue: calculateChangeValue(65, 70) },
        ],
        emart: [
          { totalValue: 65 },
          { changeValue: calculateChangeValue(65, 70) },
        ],
        traderas: [
          { totalValue: 65 },
          { changeValue: calculateChangeValue(65, 70) },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: 65 },
          { changeValue: calculateChangeValue(65, 70) },
        ],
      },
    ],
  ];
  const digtalData = [
    [
      {
        id: "digtal",
        channel: "디지털",
        division: "챗봇",
        entire: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 120) },
        ],
        headOffice: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        evclub: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        universe: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        ematicon: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        emart: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 170) },
        ],
        traderas: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
      },
      {
        id: "digtal1",
        division: "채팅",
        entire: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
        headOffice: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        evclub: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        universe: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        ematicon: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        emart: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 228) },
        ],
        traderas: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        nobrand: [
          { totalValue: 577 },
          { changeValue: calculateChangeValue(577, 805) },
        ],
        everyday: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
      },
      {
        id: "digtal2",
        division: "상담건수",
        entire: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
        headOffice: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        evclub: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        universe: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        ematicon: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        emart: [
          { totalValue: 55 },
          { changeValue: calculateChangeValue(55, 10) },
        ],
        traderas: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
      },
      {
        id: "digtal3",
        division: "음성이관",
        entire: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
        headOffice: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        evclub: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        universe: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        ematicon: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        emart: [
          { totalValue: 555 },
          { changeValue: calculateChangeValue(555, 600) },
        ],
        traderas: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
      },
      {
        id: "digtal4",
        division: "상담시간",
        entire: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
        headOffice: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        evclub: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        universe: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        ematicon: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        emart: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 200) },
        ],
        traderas: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
      },
      {
        id: "digtal5",
        division: "최초반응",
        entire: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
        headOffice: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        evclub: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        universe: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        ematicon: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        emart: [
          { totalValue: 220 },
          { changeValue: calculateChangeValue(220, 250) },
        ],
        traderas: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
      },
      {
        id: "digtal6",
        division: "고객평점",
        entire: [
          { totalValue: 4.2 },
          { changeValue: calculateChangeValue(4.2, 3.3) },
        ],
        headOffice: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        evclub: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        universe: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        ematicon: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        emart: [
          { totalValue: 4.2 },
          { changeValue: calculateChangeValue(4.2, 3.3) },
        ],
        traderas: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        nobrand: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
        everyday: [
          { totalValue: "-" },
          { changeValue: calculateChangeValue("-") },
        ],
      },
    ],
  ];

  const head = headData[0];

  function formatValue(value, division, isChangeValue = false) {
    const numericValue = Number(value); // 값을 숫자로 변환

    if (isNaN(numericValue)) {
      return "-"; // 값이 숫자로 변환되지 않을 경우 "-" 반환
    }

    let formattedValue;

    if (division === "수신율" || division === "SL") {
      formattedValue = `${Math.abs(numericValue)}%`;
    } else if (
      division === "상담시간" ||
      division === "후처리시간" ||
      division === "최초반응"
    ) {
      const minutes = String(Math.floor(Math.abs(numericValue) / 60)).padStart(
        2,
        "0"
      );
      const seconds = String(Math.abs(numericValue) % 60).padStart(2, "0");
      formattedValue = `${minutes}:${seconds}`;
    } else if (division === "고객평점") {
      formattedValue = Math.abs(numericValue).toFixed(1);
    } else {
      formattedValue = Math.abs(numericValue);
    }

    // Tailwind CSS 조건부 클래스 설정
    const valueClass = isChangeValue
      ? numericValue > 0
        ? "text-[#e92900]" // 양수: 빨간색
        : numericValue < 0
        ? "text-[#0294ff]" // 음수: 파란색
        : "text-white" // 값이 0일 때: 흰색
      : "text-white";

    // isChangeValue가 true인 경우에만 화살표 표시
    return (
      <span className={`flex items-center justify-center gap-1 ${valueClass}`}>
        {isChangeValue && (
          <span className="text-[10px]">
            {numericValue > 0 ? "▲" : numericValue < 0 ? "▼" : ""}
          </span>
        )}
        {formattedValue}
      </span>
    );
  }

  return (
    <div className="w-full min-h-screen flex flex-col  px-10 bg-[#333333]">
      <Header title="본부별 상담 현황" openStores={145} closeStores={21} />
      <div className="grid flex-grow grid-cols-1">
        <div className="grid gap-[10px] w-full mt-3 pb-6 border-b-2 border-[#595959]">
          <table>
            <colgroup>
              <col className="w-[60px]" />
              <col className="w-[142px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
            </colgroup>
            <thead>
              <tr key={head.id}>
                <th className="p-0 pb-5 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className=" bg-neutral-700 rounded-[10px]">
                    {head.channel}
                  </div>
                </th>
                <th className="p-0 pb-5 pl-3 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className=" bg-neutral-700 rounded-tl-[10px] rounded-bl-[10px] ">
                    {head.division}
                  </div>
                </th>
                <th className="p-0 pb-5  pr-3 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]  ">
                  <div className=" bg-neutral-700 rounded-tr-[10px] rounded-br-[10px] w-full relative">
                    <span className="absolute top-2 left-0 bg-[#595959] w-[1px] h-[calc(100%-16px)]"></span>
                    {head.entire}
                  </div>
                </th>
                <th className="p-0 pb-5 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className=" bg-neutral-700 rounded-tl-[10px] rounded-bl-[10px]">
                    {head.headOffice}
                  </div>
                </th>
                <th className="p-0 pb-5 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className="relative bg-neutral-700">
                    <span className="absolute top-2 left-0 bg-[#595959] w-[1px] h-[calc(100%-16px)]"></span>
                    {head.evclub}
                  </div>
                </th>
                <th className="p-0 pb-5 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className="relative bg-neutral-700">
                    <span className="absolute top-2 left-0 bg-[#595959] w-[1px] h-[calc(100%-16px)]"></span>
                    {head.universe}
                  </div>
                </th>
                <th className="p-0 pb-5 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className="relative bg-neutral-700">
                    <span className="absolute top-2 left-0 bg-[#595959] w-[1px] h-[calc(100%-16px)]"></span>
                    {head.ematicon}
                  </div>
                </th>
                <th className="p-0 pb-5 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className="relative bg-neutral-700">
                    <span className="absolute top-2 left-0 bg-[#595959] w-[1px] h-[calc(100%-16px)]"></span>
                    {head.emart}
                  </div>
                </th>
                <th className="p-0 pb-5 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className="relative bg-neutral-700">
                    <span className="absolute top-2 left-0 bg-[#595959] w-[1px] h-[calc(100%-16px)]"></span>
                    {head.traderas}
                  </div>
                </th>
                <th className="p-0 pb-5 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className="relative bg-neutral-700">
                    <span className="absolute top-2 left-0 bg-[#595959] w-[1px] h-[calc(100%-16px)]"></span>
                    {head.nobrand}
                  </div>
                </th>
                <th className="p-0 pb-5 text-white text-2xl font-normal font-['Pretendard'] leading-[50.40px]">
                  <div className=" bg-neutral-700 rounded-tr-[10px] rounded-br-[10px] relative">
                    <span className="absolute top-2 left-0 bg-[#595959] w-[1px] h-[calc(100%-16px)]"></span>

                    {head.everyday}
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {callData[0].map((call, index) => (
                <tr key={`call-${index}`}>
                  {index === 0 && (
                    <td
                      rowSpan={7}
                      className="text-white text-[28px] font-medium font-['Pretendard'] leading-[30.80px] bg-neutral-700 rounded-[10px] text-center "
                    >
                      <div
                        className="m-auto my-0"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "upright",
                        }}
                      >
                        {call.channel}
                      </div>
                    </td>
                  )}
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] pl-3 align-bottom ">
                    <div
                      className={`py-1 border-neutral-700  ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      {call.division}
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] pr-3 border-l border-neutral-700  align-bottom">
                    <div
                      className={` grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(call.entire[0]?.totalValue, call.division)}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          call.entire[1]?.changeValue,
                          call.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px]  align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          call.headOffice[0]?.totalValue,
                          call.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          call.headOffice[1]?.changeValue,
                          call.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(call.evclub[0]?.totalValue, call.division)}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          call.evclub[1]?.changeValue,
                          call.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          call.universe[0]?.totalValue,
                          call.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          call.universe[1]?.changeValue,
                          call.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          call.ematicon[0]?.totalValue,
                          call.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          call.ematicon[1]?.changeValue,
                          call.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(call.emart[0]?.totalValue, call.division)}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          call.emart[1]?.changeValue,
                          call.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          call.traderas[0]?.totalValue,
                          call.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          call.traderas[1]?.changeValue,
                          call.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          call.nobrand[0]?.totalValue,
                          call.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          call.nobrand[1]?.changeValue,
                          call.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        call.division === "SL" ? "border-b-0" : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          call.everyday[0]?.totalValue,
                          call.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          call.everyday[1]?.changeValue,
                          call.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid gap-[10px] w-full pb-12 pt-6 ">
          <table>
            <colgroup>
              <col className="w-[60px]" />
              <col className="w-[142px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
              <col className="w-[170px]" />
            </colgroup>
            <tbody>
              {digtalData[0].map((digtal, index) => (
                <tr key={`digtal-${index}`}>
                  {/* 첫 번째 항목에만 rowspan을 적용한 channel 열 표시 */}
                  {index === 0 && (
                    <td
                      rowSpan={7}
                      className="text-white text-[28px] font-medium font-['Pretendard'] leading-[30.80px] bg-neutral-700 rounded-[10px] text-center "
                    >
                      <div
                        className="m-auto my-0"
                        style={{
                          writingMode: "vertical-rl",
                          textOrientation: "upright",
                        }}
                      >
                        {digtal.channel}
                      </div>
                    </td>
                  )}
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] pl-3 align-bottom">
                    <div
                      className={` py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      {digtal.division}
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] pr-3 border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          digtal.entire[0]?.totalValue,
                          digtal.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          digtal.entire[1]?.changeValue,
                          digtal.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] align-bottom ">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          digtal.headOffice[0]?.totalValue,
                          digtal.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          digtal.headOffice[1]?.changeValue,
                          digtal.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          digtal.evclub[0]?.totalValue,
                          digtal.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          digtal.evclub[1]?.changeValue,
                          digtal.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          digtal.universe[0]?.totalValue,
                          digtal.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          digtal.universe[1]?.changeValue,
                          digtal.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom ">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          digtal.ematicon[0]?.totalValue,
                          digtal.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          digtal.ematicon[1]?.changeValue,
                          digtal.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          digtal.emart[0]?.totalValue,
                          digtal.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          digtal.emart[1]?.changeValue,
                          digtal.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          digtal.traderas[0]?.totalValue,
                          digtal.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          digtal.traderas[1]?.changeValue,
                          digtal.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          digtal.nobrand[0]?.totalValue,
                          digtal.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          digtal.nobrand[1]?.changeValue,
                          digtal.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                  <td className="p-0 m-0 text-white text-[22px] font-normal font-['Pretendard'] leading-[43.56px] border-l border-neutral-700 align-bottom">
                    <div
                      className={`grid grid-cols-2 gap-2 px-2 py-1 border-neutral-700 ${
                        digtal.division === "고객평점"
                          ? "border-b-0"
                          : "border-b"
                      }`}
                    >
                      <span>
                        {formatValue(
                          digtal.everyday[0]?.totalValue,
                          digtal.division
                        )}
                      </span>
                      <span className="flex items-center justify-center gap-1">
                        {formatValue(
                          digtal.everyday[1]?.changeValue,
                          digtal.division,
                          true
                        )}
                      </span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardHeadquarters;
