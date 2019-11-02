import { useEffect } from "react";

// hooks
import { useAxios } from "..";

// types
import { PokeResult } from "./pokeapi";

export const usePokemonFetch = (query: string) => {
  const [{ data, loading, error }, fetch] = useAxios<string, PokeResult>(
    "https://pokeapi.co/api/v2/pokemon/" + query.toLowerCase()
  );

  useEffect(() => {
    // prevent empty query calls
    if (query) {
      fetch();
    }
  }, [query, fetch]);

  return { data, error, loading };
};
