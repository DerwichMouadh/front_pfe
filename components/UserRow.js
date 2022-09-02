import React from "react";
import Image from "next/image";
import {
  PencilAltIcon,
  TrashIcon,
  ExternalLinkIcon,
  CheckCircleIcon,
  LockClosedIcon,
  LockOpenIcon,
} from "@heroicons/react/solid";
import RhsServices from "../services/RhService";
import Swal from "sweetalert2";
import Link from "next/link";
import { requirePageAuth } from "../utils/auth";
import axios from "axios";

function UserRow({
  id,
  _id,
  firstname,
  lastname,
  date_of_birth,
  gender,
  role,
  email,
  location,
  designation,
  status,
  number,
  image,
  getAll,
  token,
  ...section
}) {
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
        const config = {
          method: "DELETE",
          url: `http://localhost:5000/users/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        axios(config).then((res) => {
          getAll();
        });
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  //////
  console.log("yyyyyyyyy" + section);

  const updateStatusToApproved = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const config = {
          method: "PUT",
          url: `http://localhost:5000/users/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { status: "Approved" },
        };
        axios(config).then((res) => {
          getAll();
        });
        Swal.fire(
          "Approved!",
          "Your employee account has been approved.",
          "success"
        );
      }
    });
  };

  const updateStatusToPending = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Pending it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const config = {
          method: "PUT",
          url: `http://localhost:5000/users/user/${id}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
          data: { status: "Pending" },
        };
        axios(config).then((res) => {
          getAll();
        });
        Swal.fire("Pending!", "Your employee account is pending.", "success");
      }
    });
  };

  return (
    <div className="flex items-center text-xs bg-myColors-300 hover:bg-myColors-400 py-1 rounded-xl ">
      <h4 className="w-1/12 text-center">{number}</h4>
      <div className="w-3/12 flex items-center space-x-2">
        <img
          alt=""
          src={"http://localhost:5000/getImage/" + image}
          width={35}
          height={35}
          layout="fixed"
          className=" object-cover rounded-full"
        />
        <h4 className="">
          {firstname} {lastname}
        </h4>
      </div>
      <h4 className="w-3/12">{designation}</h4>
      <div className="w-3/12 flex items-center space-x-2">
        <div className="">
          {firstname === "Admin" && <h4 className="">-</h4>}
          {firstname !== "Admin" && <h4 className="">{status}</h4>}
        </div>
        {firstname === "Admin" && <></>}
        {firstname !== "Admin" && (
          <h4 className="">
            <div className="relative group">
              {status === "Pending" && (
                <div onClick={(e) => updateStatusToApproved(id)}>
                  <LockClosedIcon className="h-5 w-5 cursor-pointer text-red-500" />
                  <p className="hidden text-xs mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
                    Approved!
                  </p>
                </div>
              )}
              {status === "Approved" && (
                <div onClick={(e) => updateStatusToPending(id)}>
                  <LockOpenIcon className="h-5 w-5 cursor-pointer text-green-500" />
                  <p className="hidden text-xs mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
                    Pending!
                  </p>
                </div>
              )}
            </div>
          </h4>
        )}
      </div>
      <div className="w-2/12 flex">
        <Link href={"/Users/ProfileUser/" + _id} key={_id}>
          <div className="relative group">
            <a>
              <ExternalLinkIcon className="h-9 w-9 hover:bg-myColors-200 text-yellow-500 p-2 rounded-xl cursor-pointer" />
            </a>
            <p className="hidden text-xs z-50 mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
              Profile!
            </p>
          </div>
        </Link>
        <Link href={"/Users/UpdateUser/" + _id} key={_id}>
          <div className="relative group">
            <a>
              <PencilAltIcon className="h-9 w-9 hover:bg-myColors-200 text-blue-500 p-2 rounded-xl cursor-pointer" />
            </a>
            <p className="hidden text-xs z-50 mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
              Assign!
            </p>
          </div>
        </Link>
        <div className="relative group">
          <TrashIcon
            className="h-9 w-9 hover:bg-myColors-200 text-red-500 p-2 rounded-xl cursor-pointer"
            onClick={(e) => deleteRh(id)}
          />
          <p className="hidden text-xs z-50 mt-2 group-hover:block absolute bg-white text-myColors-100 px-2 rounded">
            Delete!
          </p>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = requirePageAuth;

export default UserRow;
