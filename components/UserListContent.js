import React, { useEffect, useState } from "react";
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/outline";
import UserRow from "./UserRow";
import Pagination from "./Pagination";
import RhsServices from "../services/RhService";
function UserListContent() {
  const [rhs, setRhs] = useState([]);
  const getAll = () => {
    RhsServices.getAll()
      .then((res) => {
        console.log(res);
        setRhs(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 mb-24 -bottom-16 pt-16 pb-24 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <div className="flex-col space-y-2">
        {rhs?.map(({ _id, firstname, lastname, email, role, image }, i) => (
          <UserRow
            id={_id}
            getAll={getAll}
            key={_id}
            number={i}
            firstname={firstname}
            lastname={lastname}
            _id={_id}
            image={image}
            role={role}
          />
        ))}
      </div>
    </div>
  );
}
export default UserListContent;
