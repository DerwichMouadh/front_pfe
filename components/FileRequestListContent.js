import React from "react";
import FileRequestRow from "./FileRequestRow";

function FileRequestListContent() {
  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 mb-24 -bottom-16 pt-16 pb-24 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden text-xs">
      <div className="flex-col space-y-2">
        <FileRequestRow
          id="123"
          wording="Certificate of attendance"
          status3="In Progress"
          date="May 22, 2022"
          firstname="Karim"
          lastname="Benzema"
        />
        <FileRequestRow
          id="456"
          wording="Certificate of registration"
          status3="Refused"
          date="May 20, 2022"
          firstname="David"
          lastname="Alaba"
        />
        <FileRequestRow
          id="789"
          wording="Certificate of attendance"
          status3="Ready"
          date="May 15, 2022"
          firstname="Vini"
          lastname="JR"
        />
      </div>
    </div>
  );
}

export default FileRequestListContent;
