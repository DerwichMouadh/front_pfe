import React, { useState, useEffect } from "react";
import RhService from "../services/RhService";

function ProfileUserContent({ _id }) {
  const [rh, setRh] = useState([]);
  const getById = () => {
    RhService.getById(_id)
      .then((res) => {
        console.log(res.data.data);
        console.log("profileUser: " + _id);
        setRh(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getById();
  }, [_id]);

  return (
    <div className="bg-myColors-200 flex-col rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden text-sm">
      {/* <div>id: {_id}</div>
      <div>{rh.firstname}</div> */}
      <div className="bg-red-100 flex space-x-4 text-black">
        <div className="bg-red-800 rounded-full w-14 h-14"></div>

        <div className="bg-yellow-500">
          <div className="flex space-x-2 items-center">
            <div className="">Kylian Mbappe</div>
            <div className="">active</div>
          </div>
          <div>Employee ID: #123456</div>
        </div>

        <div className="bg-yellow-800 flex space-x-2">
          <div className="w-1 h-full bg-green-800"></div>
          <div className="">
            <div className="flex space-x-2">
              <div>x</div>
              <div>Designation:</div>
              <div>React JS Developer</div>
            </div>
            <div className="flex space-x-2">
              <div>x</div>
              <div>Last Login:</div>
              <div>5 min. ago</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-200 flex-grow justify-end items-center flex space-x-2">
          <div className="bg-blue-500">Message</div>
          <div className="bg-blue-400">Edit Profile</div>
        </div>
      </div>
      <div className="bg-red-200 flex space-x-4">
        <div>About</div>
        <div>Applications</div>
        <div>Teams</div>
        <div>Connenctions</div>
      </div>
      <div className="bg-red-300 flex justify-between">
        <div className="bg-red-400 flex-grow">Personal Information</div>
        <div className="bg-red-500 flex-grow">Personal Information</div>
      </div>
    </div>
  );
}

export default ProfileUserContent;
