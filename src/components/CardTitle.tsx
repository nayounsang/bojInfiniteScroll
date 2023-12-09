import React from "react";

interface proptype {
  main: string;
  sub: string | number;
}

const CardTitle = ({ main, sub }: proptype) => {
  return (
    <div>
      <p className="sub-title">{sub}</p>
      <h2 className="title">{main}</h2>
    </div>
  );
};

export default CardTitle;
