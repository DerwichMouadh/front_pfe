import Head from "next/head";
import Image from "next/image";
import HomeContent from "../components/HomeContent";
import Navbar from "../components/Navbar";
import RightSidebar from "../components/RightSidebar";
import Sidebar from "../components/Sidebar";


function Dashboard() {
  return (
    <div className='flex'><Head>
    <title>PFE</title>
    <meta name="description" content="Generated by create next app" />
    <link rel="icon" href="/favicon.ico" />
    <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
  </Head>


  <Sidebar />
  <div className=" bg-myColors-100 h-screen w-7/12 relative">
    <Navbar navBarTitle_1="Dashboard" navBarTitle_2="" />
    <HomeContent />
  </div>
  <RightSidebar /></div>
  )
}

export default Dashboard