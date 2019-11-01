import React, { useState } from "react";

// hooks
import { usePokemonFetch, useDebounce } from "../../../../hooks";

// styles
import styles from "./DemoContent.module.scss";

// types
export interface IDemoContentProps {
  debounceDelay?: string;
}

export const DemoContent: React.FC<IDemoContentProps> = props => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, Number(props.debounceDelay) || 500);
  const { loading, error, data } = usePokemonFetch(debouncedQuery);

  return (
    <div className={styles.content}>
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
    </div>
  );
};
