import React, { useEffect, useMemo } from "react";
import useFetchProblem from "../hook/useFetchProblem";
import useIntersect from "../hook/useIntersect";
import Target from "./Target";
import Card from "./Card";
import Status from "./Status";

const ContentSection = () => {
  const { data, fetchNextPage, hasNextPage, isFetching,status } = useFetchProblem();

  const ref = useIntersect(async (entry, observer) => {
    observer.unobserve(entry.target);
    if (hasNextPage && !isFetching) {
      fetchNextPage();
    }
  });

  const cardDatas = useMemo(
    () => (data ? data.pages.map((e) => e.items).flat() : []),
    [data]
  );

 
  return (
    <div className="content-section">
      {cardDatas.map((e, i) => (
        <Card key={i} cardData={e}/>
       
      ))}
      <Status hasNextPage={hasNextPage} isFetching={isFetching} status={status}/>
      <Target divRef={ref} />
    
    </div>
  );
};

export default ContentSection;
