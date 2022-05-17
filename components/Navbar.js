import {
  ChevronDownIcon,
  ChevronRightIcon,
  BellIcon
} from "@heroicons/react/solid";
import { MenuAlt1Icon, CogIcon } from "@heroicons/react/outline";
import React from "react";
import Image from "next/image";
import NavbarItem from "./NavbarItem";

function Navbar({ navBarTitle_1, navBarTitle_2 }) {
  return (
    <div className="flex items-center pt-6">
      <div className="flex flex-grow items-end space-x-2">
        <MenuAlt1Icon className="h-8 w-8 text-white mr-4" />
        <h3 className="font-semibold text-2xl text-white font-fancy">{navBarTitle_1}</h3>
        <ChevronRightIcon className=" text-white w-5 h-5" />
        <h4 className="text-myColors-600 font-semibold font-fancy">{navBarTitle_2}</h4>
      </div>
      <div className="flex space-x-1 ">
        
        <NavbarItem Icon={CogIcon} />
        <NavbarItem Icon={BellIcon} alert={true} />
        <div className="text-white flex space-x-2 items-center cursor-pointer pl-5 hover:opacity-80">
          <Image
            alt=""
            src="https://images2.minutemediacdn.com/image/fetch/w_850,h_560,c_fill,g_auto,f_auto/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2020%2F02%2F1192510411-850x560.jpeg"
            width={35}
            height={35}
            layout="fixed"
            className=" object-cover rounded-full"
          />
          <p className="">Admin</p>
          <ChevronDownIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
