import { SearchIcon, ClockIcon } from "@heroicons/react/outline";
import { ClipboardCheckIcon, UserIcon } from "@heroicons/react/solid";
import React from "react";
import RowCard from "./RowCard";
import SmallSquare from "./SmallSquare";

function RightSidebar() {
  return (
    <div className="bg-myColors-100 text-white pt-6 pb-8 px-4 text-sm w-3/12 min-w-[200px] flex flex-col space-y-5 h-screen">
      <div className="flex h-11 cursor-pointer items-center rounded-xl bg-myColors-200 mb-6">
        <input
          className="pl-4 flex-grow h-full text-sm focus:ring-0 focus:border-0 font-normal rounded-bl-xl rounded-tl-xl text-white items-center bg-transparent outline-none border-0"
          type="text"
          placeholder="Find something..."
        />
        <SearchIcon className="h-10 w-10 px-2 hover:opacity-100 text-white opacity-60" />
      </div>
      <div className="flex-grow flex-col space-y-3">
        <h2 className="font-semibold text-xl font-fancy">Admin Panel</h2>
        <div className="flex-xol space-y-4 pt-1">
          <div className=" bg-myColors-300 group p-5 rounded-xl flex items-center space-x-6 cursor-pointer hover:bg-green-500">
            <div>
              <ClipboardCheckIcon className="h-10 w-10 text-green-500 bg-green-200 p-1 rounded-xl" />
            </div>
            <div className="flex-col space-y-1">
              <p className=" font-medium">Assign Projects</p>
              <p className="text-xs text-gray-500 group-hover:text-white">Assign projects to your teams</p>
            </div>
          </div>
          <div className=" bg-myColors-300 group p-5 rounded-xl flex items-center space-x-6 cursor-pointer hover:bg-violet-500">
            <div>
              <ClipboardCheckIcon className="h-10 w-10 text-violet-500 bg-violet-200 p-1 rounded-xl" />
            </div>
            <div className="flex-col space-y-1">
              <p className="font-medium">Assign Tasks</p>
              <p className="text-xs text-gray-500 group-hover:text-white">Assign tasks to your teams</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-col relative scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
        <h2 className="fixed bg-myColors-100 font-semibold text-xl w-full pb-4 z-50 font-fancy">Title 2</h2>
        <div className="pt-9">
          <div>
            <RowCard Icon={UserIcon} fullName="Mustapha El Masri" group="Makarem FC" hours="0" bgColorBlue bgColor="myColors-300" />
          </div>
          <div>
            <RowCard Icon={UserIcon} fullName="Karim Benzema" group="Real Madrid FC" hours="27" bgColorYellow bgColor="myColors-300" />
          </div>
          <div>
            <RowCard Icon={UserIcon} fullName="Karim Benzema" group="Real Madrid FC" hours="27" bgColorBlue bgColor="myColors-300" />
          </div>
          <div>
            <RowCard Icon={UserIcon} fullName="Karim Benzema" group="Real Madrid FC" hours="27" bgColorOrange bgColor="myColors-300" />
          </div>
          <div>
            <RowCard Icon={UserIcon} fullName="Karim Benzema" group="Real Madrid FC" hours="27" bgColorYellow bgColor="myColors-300" />
          </div>
          <div>
            <RowCard Icon={UserIcon} fullName="Karim Benzema" group="Real Madrid FC" hours="27" bgColorOrange bgColor="myColors-300" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default RightSidebar;
