import React, { useState } from "react";

// hooks
import { usePokemonFetch } from "../../../hooks";

// components
import { Demo } from "../../reusuables";

// styles
import styles from "./PokemonFetchDemo.module.scss";

// types
export interface IPokemonFetchDemoProps {}

export const PokemonFetchDemo: React.FC<IPokemonFetchDemoProps> = props => {
  const [query, setQuery] = useState("");
  const { loading, error, data } = usePokemonFetch(query);

  return (
    <Demo title="Fetching Hook">
      <p>
        In this demo, you can enter a query for a pokemon (names or numbers
        work).
      </p>
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
