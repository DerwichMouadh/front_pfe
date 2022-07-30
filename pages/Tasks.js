import Head from "next/head";
import Image from "next/image";
import HomeContent from "../components/HomeContent";
import KanbanContent from "../components/KanbanContent";
import KanbanContent2 from "../components/KanbanContent2";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import ScheduleContent from "../components/ScheduleContent";
import Sidebar from "../components/Sidebar";
import { requirePageAuth } from "../utils/auth";
import { useEffect, useState } from "react";

function Tasks() {
  const [team1, setTeam1] = useState(true);
  const [team2, setTeam2] = useState(false);
  return (
    <div className="flex">
      <Head>
        <title>PFE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://cdn.syncfusion.com/ej2/20.1.55/material.css"
          rel="stylesheet"
        ></link>
      </Head>

      <Sidebar />
      <div className=" bg-myColors-100 h-screen w-7/12 relative">
        <Navbar navBarTitle_1="Tasks" navBarTitle_2="Team's tasks" />
        {/* <ScheduleContent /> */}
        <div className="my-2 py-4 w-full px-8 flex-col absolute space-x-2 top-[106px] rounded-2xl z-50 bg-myColors-200">
          <button
            className={`${
              team1 ? "bg-myColors-600" : "bg-myColors-500"
            } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
            onClick={() => {
              setTeam1(true);
              setTeam2(false);
            }}
          >
            Team Alpha
          </button>
          <button
            className={`${
              team2 ? "bg-myColors-600" : "bg-myColors-500"
            } text-white p-1 px-4  rounded-md hover:bg-myColors-600`}
            onClick={() => {
              setTeam2(true);
              setTeam1(false);
            }}
          >
            Team Beta
          </button>
        </div>
        {team1 && <KanbanContent />}
        {team2 && <KanbanContent2 />}
      </div>
      <RightSidebar />
    </div>
  );
}

export const getServerSideProps = requirePageAuth;

export default Tasks;