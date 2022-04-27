import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsActions } from "../redux/news/actions";

export const useTasks = () => {
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(newsActions.fetchAsync());
  }, [dispatch]);

  const { data, isFetching, error } = useSelector((state: any) => state.news);

  return {
    data,
    isFetching,
    error,
  };
};
