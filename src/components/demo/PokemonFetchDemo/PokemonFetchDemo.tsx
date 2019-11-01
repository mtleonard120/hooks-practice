import React, { useState } from "react";

// hooks
import { usePokemonFetch, useDebounce } from "../../../hooks";

// components
import { Demo } from "../../reusuables";

// types
export interface IPokemonFetchDemoProps {}

export const PokemonFetchDemo: React.FC<IPokemonFetchDemoProps> = props => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);
  const { loading, error, data } = usePokemonFetch(debouncedQuery);

  return (
    <Demo title="Debounced Fetching">
      <p>
        In this demo, you can enter a query for a pokemon (names or numbers
        work). There are two hooks being shown off here:
      </p>
      <ul>
        <li>
          Fetching hook: hits the pokemon api upon an update in the query input,
          returning an object with a loading flag, an error message, and data.
        </li>
        <li>
          Debounce hook: tracks a state value which may update frequently and
          only updates itself after the tracked value has stopped updating for
          some time.
        </li>
      </ul>
      <div>
        <label htmlFor="pokemonQuery">Pokemon Query: </label>
        <input
          type="text"
          id="pokemonQuery"
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
      </div>
      <div>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {data && <div>Pokemon Name: {data.name}</div>}
      </div>
    </Demo>
  );
};
