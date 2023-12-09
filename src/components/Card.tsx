import React, { useState } from "react";
import { problemType } from "../util/type";
import { RANK, RANK_COLOR } from "../util/const";
import CardTitle from "./CardTitle";
import CardCheck from "./CardCheck";

interface proptype {
  cardData: problemType;
}

const Card = ({ cardData }: proptype) => {
  const lvName = RANK[cardData.level].name;
  const lvNum = RANK[cardData.level].value;
  const lvColor = RANK_COLOR[lvName as keyof typeof RANK_COLOR];

  const [isChecked, setChecked] = useState(true);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className="card-container">
      <CardTitle main={cardData.titleKo} sub={cardData.problemId} />
      <p>
        Level:
        <span style={{ color: lvColor }}>{` ${lvName} ${lvNum}`}</span>
      </p>
      <a href={`https://www.acmicpc.net/problem/${cardData.problemId}`}>
        문제 보러가기
      </a>
    </div>
  );
};

export default Card;
