import React, { useRef, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import Header from "../../components/Header/Header";
import ColInfoBox from "../../components/BoxLayout/ColInfoBox";

const data = [
  { label: "문의제안", prev: 500, current: 30 },
  { label: "High Risk", prev: 200, current: 400 },
  { label: "불만", prev: 13, current: 8 },
  { label: "불만지표", prev: 151, current: 1200 },
  { label: "챗봇", prev: 583, current: 1000 },
  { label: "채팅", prev: 381, current: 483 },
  { label: "전화", prev: 213, current: 1142 },
];

const DashboardAicc = () => {
  const chartRef = useRef(null);

  const adjustOuterPoint = (prev, current) => {
    const logPrev = Math.log10(prev + 1); // 로그 변환 (0 방지)
    const logCurrent = Math.log10(current + 1);

    // 포인트 겹치지 않게
    if (logPrev > logCurrent) {
      return [logPrev, logCurrent - 0.1];
    } else {
      return [logPrev - 0.1, logCurrent];
    }
  };

  const chartData = {
    labels: data.map((item) => item.label),
    datasets: [
      {
        label: "당일",
        data: data.map((item) => adjustOuterPoint(item.prev, item.current)[1]),
        borderColor: "#E92A00",
        borderWidth: 2,
        pointBackgroundColor: "#E92A00",
        backgroundColor: "#E92A0066",
        pointRadius: 5,
        fill: true,
      },
      {
        label: "전일",
        data: data.map((item) => adjustOuterPoint(item.prev, item.current)[0]),
        borderColor: "#0295FF",
        borderWidth: 2,
        pointBackgroundColor: "#0295FF",
        backgroundColor: "#0295FF66",
        pointRadius: 5,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    },
    scales: {
      r: {
        pointLabels: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
          display: false,
          stepSize: undefined,
          count: 6,
          callback: (value) => value.toFixed(1),
        },
        min: 0,
        max: Math.ceil(
          Math.log10(
            Math.max(...data.map((item) => item.prev + item.current)) + 1
          )
        ),
        grid: {
          color: "#4b5563",
          lineWidth: 2,
        },
        angleLines: {
          color: "#4b5563",
          display: true,
        },
      },
    },
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
    animation: {
      animateScale: true,
      duration: 1500,
    },
  };

  const generateHtmlLabels = () => {
    const chartInstance = chartRef.current;

    if (chartInstance) {
      const chartArea = chartInstance.chartArea;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;

      const htmlLabelsDiv = document.getElementById("htmlLabels");
      const containerDiv = document.querySelector(".relative");

      if (htmlLabelsDiv && containerDiv) {
        const containerWidth = containerDiv.clientWidth;
        const containerHeight = containerDiv.clientHeight;

        const scales = chartInstance.scales.r;
        const labels = chartInstance.data.labels;

        htmlLabelsDiv.innerHTML = "";

        labels.forEach((label, index) => {
          const pointPosition = scales.getPointPositionForValue(
            index,
            scales.max
          );

          let labelX = pointPosition.x + (pointPosition.x - centerX) * 0.7;
          let labelY = pointPosition.y + (pointPosition.y - centerY) * 0.2;

          // 부모 div 밖으로 나가지 않도록
          labelX = Math.max(0, Math.min(containerWidth, labelX));
          labelY = Math.max(0, Math.min(containerHeight, labelY));

          const prevValue = data[index].prev;
          const currentValue = data[index].current;

          // HTML 라벨 생성
          const labelDiv = document.createElement("div");
          labelDiv.className = `absolute flex flex-col items-center space-y-1`;
          labelDiv.style.left = `${labelX}px`;
          labelDiv.style.top = `${labelY}px`;
          labelDiv.style.transform = "translate(-50%, -50%)";
          labelDiv.innerHTML = `
            <div class=" py-2 px-9 bg-[#333333] rounded-[10px] text-center text-white text-[28px] font-medium ">${label}</div>
            <div class="flex space-x-1">
              <span class="w-32 h-14 px-2.5 py-[3.50px] bg-[#0295FF] rounded-md justify-center items-center inline-flex text-right text-white text-4xl font-semibold " >${prevValue}</span>
              <span class="w-32 h-14 pl-[7px] pr-2.5 py-[3.50px] bg-[#E92A00] rounded-md justify-center items-center inline-flex text-right text-neutral-700 text-4xl font-semibold ">${currentValue}</span>
            </div>
          `;

          htmlLabelsDiv.appendChild(labelDiv);
        });
      }
    }
  };

  useEffect(() => {
    generateHtmlLabels();
    const chartInstance = chartRef.current?.chartInstance || chartRef.current;

    if (chartInstance) {
      chartInstance.update();
    }
  }, []);

  return (
    // 대시보드 차트
    <div className="w-full h-screen flex flex-col gap-3 pb-4 px-10 bg-[#333333]">
      <div className="flex-none">
        <Header title="AI Contact Center" openStores={145} closeStores={21} />
      </div>
      <div className="grid grid-cols-[1fr_3fr]   gap-[10px] flex-grow ">
        <div className="grid gap-[10px]">
          <div className="p-4 bg-neutral-700 rounded-[30px] border border-[#595959] h-full  ">
            <ColInfoBox title="상담 완료" number={4934} addNum={121} />
          </div>
          <div className="p-4 bg-neutral-700 rounded-[30px] border border-[#595959] h-full ">
            <ColInfoBox title="수신율" number="80.8%" />
          </div>
          <div className="p-4 bg-neutral-700 rounded-[30px] border border-[#595959] h-full ">
            <ColInfoBox title="고객평점" number="4.6점" />
          </div>
        </div>
        <div className="relative flex flex-col">
          <p className="absolute top-8 left-14 text-center text-white text-3xl font-semibold font-['Pretendard']">
            Daily 상담현황
          </p>
          <div className="bg-neutral-700  px-10 pt-24 pb-20  rounded-[30px] border border-[#595959] h-[100%]">
            <div className="relative w-full h-full">
              <div className="w-full h-full">
                <Radar
                  ref={chartRef}
                  data={chartData}
                  options={options}
                  className="scale-[0.9]  "
                />
                <div
                  id="htmlLabels"
                  className="absolute inset-0 z-10 pointer-events-none"
                ></div>
              </div>
              <div className="absolute bottom-0 right-0 text-white text-sm flex flex-col gap-2.5">
                <div className="flex items-center gap-2.5">
                  <span className="block h-3 bg-[#0294ff] rounded-full w-11"></span>
                  <span className="text-white text-[22px] font-semibold ">
                    전일
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="block h-3 bg-[#e92900] rounded-full w-11"></span>
                  <span className="text-white text-[22px] font-semibold ">
                    당일
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // 대시보드 차트
  );
};

export default DashboardAicc;
