import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>nayounsang1이 푼 백준 문제들</h1>
      <h3
        onClick={() => {
          window.open(
            "https://github.com/nayounsang/bojInfiniteScroll",
            "_blank"
          );
        }}
      >
        깃허브 레포지토리
      </h3>
    </div>
  );
};

export default Header;
