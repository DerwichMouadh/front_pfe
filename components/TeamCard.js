import React, { useState } from "react";
import {
  UserGroupIcon,
  DotsVerticalIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/solid";
import Link from "next/link";

function TeamCard({ id, _id, name, employees, teamLeader, tasks }) {
  const [open1, setOpen1] = useState(false);
  return (
    <div className="relative bg-myColors-700 rounded-xl flex items-center justify-center space-x-6 cursor-pointer hover:bg-yellow-500">
      <div>
        <UserGroupIcon className="h-10 w-10 text-yellow-500 bg-yellow-200 p-2 rounded-xl" />
      </div>
      <div className="flex-col space-y-1">
        <p className=" text-xs">Team Name</p>
        <p className="  text-lg">{name}</p>
      </div>
      <DotsVerticalIcon
        onClick={() => setOpen1(!open1)}
        className="h-10 w-10 hover:text-yellow-500 hover:bg-white p-2 rounded-full absolute right-1 top-1"
      />
      {open1 && (
        <div className="absolute top-12 right-1 bg-myColors-300 rounded-lg p-1">
          <div className="flex items-center space-x-2 p-2 hover:bg-myColors-400 rounded-lg">
            <UserGroupIcon className="h-5 w-5" />
            <p>Members</p>
          </div>
          <Link href={"/Teams/TeamTasks/" + _id} key={_id}>
            <div className="flex items-center space-x-2 p-2 hover:bg-myColors-400 rounded-lg">
              <ClipboardCheckIcon className="h-5 w-5" />
              <p>Tasks</p>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TeamCard;
