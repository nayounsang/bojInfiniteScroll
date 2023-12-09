import React from "react";

interface proptype {
  isChecked: boolean;
  handleCheckboxChange: () => void;
}

const CardCheck = ({ isChecked, handleCheckboxChange }: proptype) => {
  return (
    <div className="check-box">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <p>스포일러 방지하기</p>
      </label>
    </div>
  );
};

export default CardCheck;
