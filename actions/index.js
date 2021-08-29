import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const getBlogs = (url) => {
  return fetcher(url);
};

export const useGetBlogs = (initialData) => {
  return useSWR(`/api/blogs`, fetcher, { initialData });
};
