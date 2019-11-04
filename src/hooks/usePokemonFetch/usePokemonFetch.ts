import { useEffect } from "react";

// packages
import useAxios from "axios-hooks";

// types
import { PokeResult } from "./pokeapi";
import { AxiosError } from "axios";

export interface IPokeFetchResult {
  data?: PokeResult;
  error?: AxiosError<any>;
  loading: boolean;
}

export const usePokemonFetch = (query: string): IPokeFetchResult => {
  const [{ data, loading, error }, fetch] = useAxios<PokeResult | undefined>(
    "https://pokeapi.co/api/v2/pokemon/" + query.toLowerCase(),
    {
      manual: true
    }
  );

  useEffect(() => {
    // prevent empty query calls
    if (query) {
      fetch();
    }
  }, [query, fetch]);

  return { data, error, loading };
};
