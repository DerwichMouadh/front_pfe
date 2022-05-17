import React from "react";
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/outline";
import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";

function HomeContent() {
  return (
    <div className="bg-myColors-200 rounded-2xl grid grid-cols-3 gap-4 w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-2">
        <h1 className="text-center pb-4">Bar Chart Diagram</h1>
        <BarChart />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl">
      <h1 className="text-center pb-4">Doughnut Chart Diagram</h1>
        <DoughnutChart />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl">
      <h1 className="text-center pb-4">Pie Chart Diagram</h1>
        <PieChart />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-2">
      <h1 className="text-center pb-4">Line Chart Diagram</h1>
        <LineChart />
      </div>
    </div>
  );
}

export default HomeContent;
