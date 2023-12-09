import React from "react";

interface proptype{
    divRef: React.RefObject<HTMLDivElement>;
}

const Target = ({divRef}:proptype) => {
  return <div className="target" ref={divRef}></div>;
};

export default Target;
