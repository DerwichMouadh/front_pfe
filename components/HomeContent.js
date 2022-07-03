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
  const [users, setUsers] = useState([]);

  let filtredFilesInProgress = [];
  let filtredFilesReady = [];
  let filtredFilesRefused = [];

  let filtred1825 = [];
  let filtred2635 = [];
  let filtredsup35 = [];

  let totalFemaleTab = [];
  let totalMaleTab = [];

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

  useEffect(() => {
    getallUsers();
  }, []);

  const getallUsers = () => {
    const config = {
      method: "GET",
      url: `http://localhost:5000/users/`,
      // headers: {
      //   Authorization: `Bearer ${token}`,
      // },
    };
    axios(config)
      .then(({ status, data }) => {
        if (status === 200) {
          setUsers(data.data);
          console.log(users);
        }
      })
      .catch((err) => {
        console.error("err", err);
      });
  };

  filtredFilesInProgress = files.filter(
    (file) => file.status === "In Progress"
  );
  filtredFilesReady = files.filter((file) => file.status === "Ready");
  filtredFilesRefused = files.filter((file) => file.status === "Refused");

  let numInProgress = filtredFilesInProgress.length;
  let numReady = filtredFilesReady.length;
  let numRefused = filtredFilesRefused.length;

  totalFemaleTab = users.filter((user) => user.gender === "Female");
  totalMaleTab = users.filter((user) => user.gender === "Male");

  let totalFemale = totalFemaleTab.length;
  let totalMale = totalMaleTab.length;

  let totalFemalePer = (100 * totalFemale) / (totalFemale + totalMale);
  let totalMalePer = (100 * totalMale) / (totalFemale + totalMale);


  filtred1825 = users.filter((user) => {
    let convDate = new Date(user.date_of_birth)
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const userYear = convDate.getFullYear()
    let age = parseInt(currentYear) - parseInt(userYear)
    return (age > 17 && age < 25)
  });
  filtred2635 = users.filter((user) => {
    let convDate = new Date(user.date_of_birth)
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const userYear = convDate.getFullYear()
    let age = parseInt(currentYear) - parseInt(userYear)
    return (age > 24 && age < 35)
  });
  filtredsup35 = users.filter((user) => {
    let convDate = new Date(user.date_of_birth)
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const userYear = convDate.getFullYear()
    let age = parseInt(currentYear) - parseInt(userYear)
    return (age > 34)
  });

  let total1825 = filtred1825.length;
  let total2635 = filtred2635.length;
  let totalsup35 = filtredsup35.length;

  let total1825per = 100 * total1825 / (total1825 + total2635 + totalsup35);
  let total2635per = 100 * total2635 / (total1825 + total2635 + totalsup35);
  let totalsup35per = 100 * totalsup35 / (total1825 + total2635 + totalsup35);

  return (
    <div className="bg-myColors-200 rounded-2xl grid grid-cols-6 gap-4 w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3">
        <h1 className="text-center pb-4">Bar Chart Diagram</h1>
        {/* <BarChart /> */}
        <BarChart
          numInProgress={numInProgress}
          numReady={numReady}
          numRefused={numRefused}
        />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-3">
        <h1 className="text-center pb-4">User persentage by age</h1>
        <DoughnutChart
          total1825={total1825}
          total2635={total2635}
          totalsup35={totalsup35}
        />
        <div className="flex justify-evenly pt-6">
          <div className="flex-col text-center">
            <p className=" font-semibold">{total1825per.toString().substring(0, 5)}%</p>
            <p className=" text-sm text-myColors-600">18-24</p>
          </div>
          <div className="flex-col text-center">
            <p className=" font-semibold">{total2635per.toString().substring(0, 5)}%</p>
            <p className=" text-sm text-myColors-600">25-34</p>
          </div>
          <div className="flex-col text-center">
            <p className=" font-semibold">{totalsup35per.toString().substring(0, 5)}%</p>
            <p className=" text-sm text-myColors-600">35+</p>
          </div>
        </div>
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-2">
        <h1 className="text-center pb-4">User persentage by gender</h1>
        <PieChart totalFemale={totalFemale} totalMale={totalMale} />
        <div className="flex justify-evenly">
          <div className="flex-col text-center">
            <p className=" font-semibold">{totalMalePer.toString().substring(0, 5)}%</p>
            <p className=" text-sm text-myColors-600">Male</p>
          </div>
          <div className="flex-col text-center">
            <p className=" font-semibold">{totalFemalePer.toString().substring(0, 5)}%</p>
            <p className=" text-sm text-myColors-600">Female</p>
          </div>
        </div>
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-4">
        <h1 className="text-center pb-4">Line Chart Diagram</h1>
        <LineChart
          numInProgress={numInProgress}
          numReady={numReady}
          numRefused={numRefused}
        />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-4">
        <h1 className="text-center pb-4">Radar Chart Diagram</h1>
        <RadarChart
          numInProgress={numInProgress}
          numReady={numReady}
          numRefused={numRefused}
        />
      </div>
      <div className="bg-myColors-700 p-4 rounded-2xl col-span-2">
        <h1 className="text-center pb-4">Pie Chart Diagram</h1>
        <PieChart totalFemale={totalFemale} totalMale={totalMale} />
      </div>
    </div>
  );
}

export default HomeContent;
