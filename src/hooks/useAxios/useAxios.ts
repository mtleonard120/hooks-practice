import { useState } from "react";

// packages
import axios from "axios";

// types
export interface IUseAxiosProps<T = any> {
  url: string;
  method: "get" | "post";
  data?: T;
}

export const useAxios = (props: IUseAxiosProps) => {
  const { url, method } = props;
  const [response, setResponse] = useState();
  const [isLoading, setIsLoading] = useState(!!response);

  if (response) {
    return { response, isLoading };
  }

  if (method === "get") {
    axios
      .get(url)
      .then(res => {
        setResponse(res);
      })
      .finally(() => setIsLoading(false));
  }

  return { response, isLoading };
};
