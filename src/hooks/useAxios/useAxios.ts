import { useState } from "react";

// packages
import axios from "axios";

// types
export interface IUseAxiosProps {
  url: string;
  method: "get" | "post";
  //   data?: T;
}

// THIS HOOK KINDA SUCKS AS_IS NEEDS SOME WORK

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
