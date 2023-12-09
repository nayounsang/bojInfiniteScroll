import React from "react";

interface proptype {
  hasNextPage: boolean | undefined;
  isFetching: boolean;
  status: "error" | "idle" | "loading" | "success";
}

const Status = ({ hasNextPage, isFetching,status }: proptype) => {
    if (status === "loading"){
        return <h2 className="loading">로딩중</h2>;
    } else if (status === "error"){
        return <h2>무엇인가 잘못됏어요</h2>
    }
  if (hasNextPage) {
    if (isFetching) {
      return <h2 className="loading">로딩중</h2>;
    } else {
      return <></>;
    }
  } else {
    return <h2>불러올 수 있는 문제가 없습니다.</h2>;
  }
};

export default Status;
