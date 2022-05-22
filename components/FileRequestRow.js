import React from "react";
import Image from "next/image";
import { CheckCircleIcon, MinusCircleIcon, ExclamationCircleIcon, TrashIcon, ExternalLinkIcon } from "@heroicons/react/solid";
import RhsServices from "../services/RhService";
import Swal from "sweetalert2";
import Link from "next/link";

function FileRequestRow({ id, firstname, lastname, wording, status3, date }) {
  return (
    <div className="flex items-center text-xs bg-myColors-300 hover:bg-myColors-400 py-1 rounded-xl cursor-pointer">
      <h4 className="w-1/12 text-center">{id}</h4>
      <h4 className="w-2/12">{firstname} {lastname}</h4>
      <h4 className="w-3/12">{wording}</h4>
      <h4 className="w-2/12">{status3}</h4>
      <h4 className="w-2/12">{date}</h4>
      <div className="w-1/12 flex -ml-2">
        <ExternalLinkIcon className="h-9 w-9 hover:bg-myColors-200 text-stone-400 p-2 rounded-xl" />
        <TrashIcon className="h-9 w-9 hover:bg-myColors-200 text-sky-500 p-2 rounded-xl" onClick={(e) => deleteRh(id)} />
      </div>
      <div className="w-1/12 flex justify-center ml-2">
        {status3 === "Ready" && <CheckCircleIcon className="h-5 w-5 text-green-500" onClick={(e) => deleteRh(id)} />}
        {status3 === "Refused" && <MinusCircleIcon className="h-5 w-5 text-red-500" onClick={(e) => deleteRh(id)} />}
        {status3 === "In Progress" && <ExclamationCircleIcon className="h-5 w-5 text-yellow-500" onClick={(e) => deleteRh(id)} />}
      </div>
    </div>
  );
}

export default FileRequestRow