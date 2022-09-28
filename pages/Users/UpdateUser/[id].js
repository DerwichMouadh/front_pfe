import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../../../components/Navbar";
import Sidebar from "../../../components/Sidebar";
import UpdateUserContent from "../../../components/UpdateUserContent";
import RightSidebar from "../../../components/RightSidebar";
import { requirePageAuth } from "../../../utils/auth";

function UpdateUser({ token }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(id);
  return (
    <div className="flex">
      <Head>
        <title>PFE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Sidebar />
      <div className="bg-myColors-100 h-screen w-7/12 relative">
        <Navbar navBarTitle_1="Users" navBarTitle_2="Update User" />
        <UpdateUserContent id={id} token={token} />
      </div>
      <RightSidebar />
    </div>
  );
}
export const getServerSideProps = requirePageAuth;

export default UpdateUser;