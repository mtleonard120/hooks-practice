import { useState, useEffect } from "react";

// packages
import axios, { AxiosResponse } from "axios";

export const usePokemonFetch = (query: string) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const beginNewCall = () => {
    setLoading(true);
    setData(undefined);
    setError(undefined);
  };

  const onSuccess = (res: AxiosResponse) => {
    console.log(res.data);
    setData(res.data);
  };

  const onError = (res: AxiosResponse) => {
    const code = res.request.status;
    const message = code === 404 ? "No Pokemon Found" : "Something went wrong";
    setError(message);
  };

  const onFinally = () => {
    setLoading(false);
  };

  // Make the fetch every time we have an updated query
  useEffect(() => {
    if (!query) {
      return;
    }

    beginNewCall();

    axios
      .get("https://pokeapi.co/api/v2/pokemon/" + query.toLowerCase())
      .then(onSuccess)
      .catch(onError)
      .finally(onFinally);
  }, [query]);

  return { error, loading, data };
};
