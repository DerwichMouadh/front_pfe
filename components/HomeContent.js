import React, { useState, useEffect } from "react";
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/outline";
import axios from "axios";
import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import LineChart from "./Charts/LineChart";
import PieChart from "./Charts/PieChart";
import RadarChart from "./Charts/RadarChart";

function HomeContent() {
  const [files, setFiles] = useState([]);
  let filtredFilesInProgress = [];
  let filtredFilesReady = [];
  let filtredFilesRefused = [];

  useEffect(() => {
    getallInProgress();
  }, []);

  const getallInProgress = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/filerequests/inprogress`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setFiles(data.data);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  filtredFilesInProgress = files.filter((file) => file.status === "In Progress");
  filtredFilesReady = files.filter((file) => file.status === "Ready");
  filtredFilesRefused = files.filter((file) => file.status === "Refused");

  let numInProgress = filtredFilesInProgress.length
  let numReady = filtredFilesReady.length
  let numRefused = filtredFilesRefused.length

  return (
    <div className="bg-myColors-200 rounded-2xl grid grid-cols-6 gap-4 w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3">
        <h1 className="text-center pb-4">Bar Chart Diagram</h1>
        {/* <BarChart /> */}
        <BarChart  numInProgress={numInProgress} numReady={numReady} numRefused={numRefused} />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3">
        <h1 className="text-center pb-4">Doughnut Chart Diagram</h1>
        <DoughnutChart numInProgress={numInProgress} numReady={numReady} numRefused={numRefused} />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-2">
        <h1 className="text-center pb-4">Pie Chart Diagram</h1>
        <PieChart numInProgress={numInProgress} numReady={numReady} numRefused={numRefused} />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-4">
        <h1 className="text-center pb-4">Line Chart Diagram</h1>
        <LineChart numInProgress={numInProgress} numReady={numReady} numRefused={numRefused} />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-4">
        <h1 className="text-center pb-4">Radar Chart Diagram</h1>
        <RadarChart numInProgress={numInProgress} numReady={numReady} numRefused={numRefused} />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-2">
        <h1 className="text-center pb-4">Pie Chart Diagram</h1>
        <PieChart numInProgress={numInProgress} numReady={numReady} numRefused={numRefused} />
      </div>
    </div>
  );
}

export default HomeContent;
