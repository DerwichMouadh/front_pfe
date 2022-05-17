import React from "react";
import Image from "next/image";
import { CogIcon, TrashIcon } from "@heroicons/react/solid";

function UserRow({ id, name, adress, section }) {
  return (
    <div className="flex items-center text-xs bg-myColors-300 py-1 rounded-xl hover:scale-105 hover:transition-transform hover:duration-200 hover:ease-in cursor-pointer">
      <h4 className="w-1/12 text-center">{id}</h4>
      <div className="w-4/12 flex items-center space-x-2">
        <Image
          alt=""
          src="https://e0.365dm.com/20/10/1600x900/skysports-kylian-mbappe-france_5138858.jpg?20201014223925"
          width={35}
          height={35}
          layout="fixed"
          className=" object-cover rounded-full"
        />
        <h4 className="">{name}</h4>
      </div>
      <h4 className="w-3/12">{adress}</h4>
      <h4 className="w-2/12">{section}</h4>
      <div className="w-2/12 flex -ml-2">
        <CogIcon className="h-9 w-9 hover:bg-myColors-200 text-myColors-600 p-2 rounded-xl" />
        <TrashIcon className="h-9 w-9 hover:bg-myColors-200 text-red-500 p-2 rounded-xl" />
      </div>
    </div>
  );
}

export default UserRow;
