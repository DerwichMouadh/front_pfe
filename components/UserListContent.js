import React from "react";
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/outline";
import UserRow from "./UserRow";
import Pagination from "./Pagination";

function UserListContent() {
  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div className="flex">
        <h4 className="w-1/12 text-center">Id</h4>
        <h4 className="w-4/12">Name</h4>
        <h4 className="w-3/12">Adress</h4>
        <h4 className="w-2/12">Section</h4>
        <h4 className="w-2/12">Actions</h4>
      </div>
      <div className="h-[1px] w-full bg-white mb-4"></div>
      <div className="flex-col space-y-2">
        <UserRow
          id="1"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
        <UserRow
          id="2"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
        <UserRow
          id="3"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
        <UserRow
          id="4"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
        <UserRow
          id="5"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
        <UserRow
          id="6"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
        <UserRow
          id="7"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
        <UserRow
          id="8"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
        <UserRow
          id="9"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
        <UserRow
          id="10"
          name="Kylian Mbappe"
          adress="kylian7@gmail.com"
          section="Real Madrid FC"
        />
      </div>
      <div className="">
        <Pagination />
      </div>
    </div>
  );
}

export default UserListContent;
