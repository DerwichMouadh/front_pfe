import React from "react";
import Image from "next/image";
import { CheckCircleIcon, MinusCircleIcon, ExclamationCircleIcon, TrashIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import RhsServices from "../services/RhService";
import Swal from "sweetalert2";
import Link from "next/link";
import axios from "axios";


function FileRequestRow({ id, name, wording, status, date, token, getAll, number }) {
  const deleteFile = (id) => {

    const config = {
      method: "DELETE",
      url: `http://localhost:5000/filerequests/filerequest/${id}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios(config)
      .then((res) => {
        getAll();
      })
  }

  return (
    <div className="flex items-center text-xs bg-myColors-300 hover:bg-myColors-400 py-1 rounded-xl cursor-pointer">
      <h4 className="w-1/12 text-center">{number + 1}</h4>
      <h4 className="w-2/12">{name}</h4>
      <h4 className="w-3/12">{wording}</h4>
      <h4 className="w-2/12">{status}</h4>
      <h4 className="w-2/12">{date}</h4>
      <div className="w-1/12 flex -ml-2">
        <ExternalLinkIcon className="h-9 w-9 hover:bg-myColors-200 text-stone-400 p-2 rounded-xl" />
        <TrashIcon className="h-9 w-9 hover:bg-myColors-200 text-sky-500 p-2 rounded-xl" onClick={(e) => deleteFile(id)} />
      </div>
      <div className="w-1/12 flex justify-center ml-2">
        {status === "Ready" && <CheckCircleIcon className="h-5 w-5 text-green-500" />}
        {status === "Refused" && <MinusCircleIcon className="h-5 w-5 text-red-500" />}
        {status === "In Progress" && <ExclamationCircleIcon className="h-5 w-5 text-yellow-500" />}
      </div>
    </div>
  );
}

export default FileRequestRow