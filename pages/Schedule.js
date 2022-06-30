import Head from "next/head";
import Image from "next/image";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import ScheduleContent from "../components/ScheduleContent";
import Sidebar from "../components/Sidebar";
import { requirePageAuth } from "../utils/auth";


function Schedule() {
  return (
    <div className='flex'><Head>
    <title>PFE</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
    <link href="https://cdn.syncfusion.com/ej2/20.1.55/material.css" rel="stylesheet"></link>
  </Head>


  <Sidebar />
  <div className=" bg-myColors-100 h-screen w-7/12 relative">
    <Navbar navBarTitle_1="Schedule" navBarTitle_2="" />
    <ScheduleContent />
  </div>
  <RightSidebar /></div>
  )
}

export const getServerSideProps = requirePageAuth;

export default Schedule