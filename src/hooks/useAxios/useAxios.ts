// Usage examples

// ---- SIMPLE GET ----
// const [{ data, loading, error }, fetch] = useAxios<string>(
//   "https://pokeapi.co/api/v2/pokemon/" + query.toLowerCase()
// );

// ---- FULL CONFIG -----
// const config = useMemo((): AxiosRequestConfig => ({
//   url: "https://pokeapi.co/api/v2/pokemon/" + query.toLowerCase(),
//   method: "GET"
// }), [query]);
//
// const [{ data, loading, error }, fetch] = useAxios(config);

import { useState, useCallback } from "react";

// packages
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

// types
type IUseAxiosReturnType<T> = [
  {
    data?: T;
    error?: AxiosError<T>;
    loading?: boolean;
    response?: AxiosError<T> | AxiosResponse<T>;
  },
  () => void
];

export const useAxios = <
  ConfigType = AxiosRequestConfig,
  ResponseDataType = any
>(
  config: ConfigType
): IUseAxiosReturnType<ResponseDataType> => {
  type Response = AxiosResponse<ResponseDataType>;
  type Error = AxiosError<ResponseDataType>;

  const [data, setData] = useState<ResponseDataType>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>();
  const [response, setResponse] = useState<Response | Error>();

  const beginNewCall = useCallback(() => {
    setData(undefined);
    setError(undefined);
    setLoading(true);
    setResponse(undefined);
  }, []);

  const onSuccess = useCallback((res: Response) => {
    setData(res.data);
    setResponse(res);
  }, []);

  const onError = useCallback((res: Error) => {
    setError(res);
    setResponse(res);
  }, []);

  const onFinally = useCallback(() => {
    setLoading(false);
  }, []);

  const execute = useCallback(() => {
    beginNewCall();

    axios(config)
      .then(onSuccess)
      .catch(onError)
      .finally(onFinally);
  }, [config, beginNewCall, onSuccess, onError, onFinally]);

  return [{ data, error, loading, response }, execute];
};
