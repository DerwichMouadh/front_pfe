import React from "react";

function RowCard({ Icon, fullName, group, hours, bgColorOrange, bgColorBlue, bgColorYellow }) {
  return (
    <div className="flex space-x-4 items-center bg-myColors-300 rounded-2xl p-4 mt-4 hover:scale-95 hover:transition-transform hover:duration-200 hover:ease-in cursor-pointer">
      {bgColorBlue && <Icon className="h-8 w-8 rounded-full bg-blue-500 p-1" />}
      {bgColorOrange && <Icon className="h-8 w-8 rounded-full bg-orange-500 p-1" />}
      {bgColorYellow && <Icon className="h-8 w-8 rounded-full bg-yellow-500 p-1" />}
      <div className="flex-grow">
        <h2 className="text-base">{fullName}</h2>
        <h3 className=" font-light opacity-60 text-xs">{group}</h3>
      </div>
      <p>{hours} Goals</p>
    </div>
  );
}

export default RowCard;
