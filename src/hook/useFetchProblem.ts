import axios from "axios";
import { QueryFunctionContext, useInfiniteQuery } from "react-query";
import { DIRECTION, MY_ID, SORT, TEST_URL } from "../util/const";
import { resDataType } from "../util/type";

const queryKey = ["problems"];

interface fetchDatatype extends resDataType {
  nextCursor: number | undefined;
}

const fetchProblem = async (
  key: string[],
  pageParam: number
): Promise<fetchDatatype> => {
  const res = await axios.get("https://solved.ac/api/v3/search/problem", {
    params: {
      query: encodeURIComponent(`@${MY_ID}`),
      direction: DIRECTION,
      page: pageParam,
      sort: SORT,
    },
  });
  const data: resDataType = res.data();
  return data.items.length > 0
    ? { ...data, nextCursor: pageParam + 1 }
    : { ...data, nextCursor: undefined };
};

const testFetchProblem = async (
  key: string[],
  pageParam: number
): Promise<fetchDatatype> => {
  const res = await axios.get(TEST_URL(pageParam));
  const data: resDataType = res.data;
  // console.log('myfetchdata',data);
  return data.items.length > 0
    ? { ...data, nextCursor: pageParam + 1 }
    : { ...data, nextCursor: undefined };
};

const useFetchProblem = () => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery(
    queryKey,
    ({ pageParam = 1 }: QueryFunctionContext) =>
      testFetchProblem(queryKey, pageParam),
    {
      getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
    }
  );
  console.log(status);
  return {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  };
};

export default useFetchProblem;
