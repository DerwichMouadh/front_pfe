import React, { useState, useEffect } from "react";
import {
  ArrowCircleRightIcon,
  ArrowCircleDownIcon,
} from "@heroicons/react/solid";
import {
  UserIcon,
  UserAddIcon,
  ClipboardListIcon,
  ClipboardIcon,
  CalendarIcon,
  ClipboardCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  CogIcon,
} from "@heroicons/react/outline";
import {
  ArrowCircleDownIcon as ACDI,
  ArrowCircleUpIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
import Link from "next/link";
import axios from "axios";

function Sidebar({ token }) {
  const [open, setOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const [files, setFiles] = useState([]);
  let filtredFiles = [];

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

  filtredFiles = files.filter((file) => file.status === "In Progress");
  let num = filtredFiles.length;

  return (
    <div className="bg-myColors-100 p-4 pb-8 text-sm font-medium w-2/12 min-w-[200px] flex flex-col space-y-3 h-screen">
      <div className="px-4 pt-4 pb-10">
        <Link href="/Overview">
          <a className="text-2xl font-bold text-white font-fancy">DashAdmin</a>
        </Link>
      </div>
      <div className="flex-grow scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
          <Link href="/Overview">
            <a className="w-full">
              <SidebarRow Icon={ViewGridIcon} title="Overview" />
            </a>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="flex hover:rounded-2xl group hover:bg-myColors-300"
        >
          <a className="w-full">
            <SidebarRow
              Icon={UserIcon}
              title="Users"
              Plus={!open ? ArrowCircleRightIcon : ArrowCircleDownIcon}
            />
          </a>
        </div>
        <div className={`${open ? "block" : "hidden"} flex flex-col`}>
          <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
            <Link href="/Users/AddUser" className="">
              <a className="w-full">
                <SidebarRow Icon={UserAddIcon} title="Add User" color />
              </a>
            </Link>
          </div>
          <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
            <Link href="/Users/UserList">
              <a className="w-full">
                <SidebarRow Icon={ClipboardListIcon} title="User List" color />
              </a>
            </Link>
          </div>
        </div>
        <div className="flex pr-5 items-center hover:rounded-2xl mb-1 group hover:bg-myColors-300">
          <Link href="/FileRequest/FileRequestList">
            <a className="w-full relative">
              <SidebarRow Icon={ClipboardIcon} title="Files" />
            </a>
          </Link>
          <div className="text-center text-xs font-bold bg-myColors-600 rounded-full text-myColors-300 w-[16px] h-[16px]">
            {num}
          </div>
        </div>
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
          <Link href="/Schedule">
            <a className="w-full">
              <SidebarRow Icon={CalendarIcon} title="Schedule" />
            </a>
          </Link>
        </div>
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
          <Link href="/Teams/TeamsList">
            <a className="w-full">
              <SidebarRow Icon={UserGroupIcon} title="Teams" />
            </a>
          </Link>
        </div>
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300">
          <Link href="/Overview">
            <a className="w-full">
              <SidebarRow Icon={CogIcon} title="Settings" />
            </a>
          </Link>
        </div>
        <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
          <Link href="/Overview">
            <a className="w-full">
              <SidebarRow Icon={ViewGridIcon} title="Overview 0" />
            </a>
          </Link>
        </div>
        {openMore && (
          <div>
            <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
              <Link href="/Overview">
                <a className="w-full">
                  <SidebarRow Icon={ViewGridIcon} title="Overview 1" />
                </a>
              </Link>
            </div>
            <div className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 ">
              <Link href="/Overview">
                <a className="w-full">
                  <SidebarRow Icon={ViewGridIcon} title="Overview 2" />
                </a>
              </Link>
            </div>
            <div className="flex hover:rounded-2xl relative group hover:bg-myColors-300 ">
              <Link href="/Overview">
                <a className="w-full">
                  <SidebarRow Icon={ViewGridIcon} title="Overview 3" />
                </a>
              </Link>
            </div>
          </div>
        )}
        <div
          onClick={() => setOpenMore(!openMore)}
          className="flex hover:rounded-2xl mb-1 relative group hover:bg-myColors-300 "
        >
          <a className="w-full">
            {!openMore && <SidebarRow Icon={ACDI} title="See more" />}
            {openMore && (
              <SidebarRow Icon={ArrowCircleUpIcon} title="See less" />
            )}
          </a>
        </div>
      </div>
      <div className="bg-myColors-300 rounded-2xl p-3 text-white">
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
        <p>111</p>
      </div>
    </div>
  );
}

export default Sidebar;
