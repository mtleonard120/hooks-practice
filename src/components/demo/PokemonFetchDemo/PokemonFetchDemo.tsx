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
      <input
        type="text"
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
      <div>
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {data && <div>Pokemon Name: {data.name}</div>}
      </div>
    </Demo>
  );
};
