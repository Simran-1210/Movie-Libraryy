import React from "react";
import "./nominationCounter.scss";
const NominationCounter = (props) => {
  return (
    <p className="nominationCounter">
      <span> Your PlayList : {props.nominationList.length}</span>
    </p>
  );
};

export default NominationCounter;
