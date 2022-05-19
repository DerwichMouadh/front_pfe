import React from "react";
import Image from "next/image";
import { CogIcon, TrashIcon } from "@heroicons/react/solid";
import RhsServices from "../services/RhService";
import Swal from "sweetalert2";
import Link from "next/link";

function UserRow({ id , _id, firstname, lastname, email, number, image , getAll}) {
  const deleteRh = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        RhsServices.remove(id).then((res) => {
          console.log(res);
          getAll();
        });

        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <div className="flex items-center text-xs bg-myColors-300 hover:bg-myColors-400 py-1 rounded-xl cursor-pointer">
      <h4 className="w-1/12 text-center">{number+1}</h4>
      <div className="w-4/12 flex items-center space-x-2">
        <img
          alt=""
          src={
            "http://localhost:5000/getImage/"+image
                                  
          }
          width={35}
          height={35}
          layout="fixed"
          className=" object-cover rounded-full"
        />
        <h4 className="">{firstname}</h4>
      </div>
      <h4 className="w-3/12">{lastname}</h4>
      <h4 className="w-2/12">{_id}</h4>
      <div className="w-2/12 flex -ml-2">
        <Link href={"/Users/UpdateUser/" + _id} key={_id}>
          <a>
          <CogIcon className="h-9 w-9 hover:bg-myColors-200 text-myColors-600 p-2 rounded-xl" />
          </a>
        </Link>
        <TrashIcon className="h-9 w-9 hover:bg-myColors-200 text-red-500 p-2 rounded-xl"  onClick={(e) => deleteRh(id)}/>
      </div>
    </div>
  );
}

export default UserRow;