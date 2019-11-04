import React, { useState } from "react";

// hooks
import {
  usePokemonFetch,
  useDebounce,
  IPokeFetchResult
} from "../../../../hooks";

// styles
import { TextField } from "@material-ui/core";

// types
export interface IDemoContentProps {
  debounceDelay?: string;
}

// helpers
const PokeFetchResult = ({ data, error, loading }: IPokeFetchResult) => {
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        data && <div>Pokemon Found: {data.name}</div>
      )}
    </div>
  );
};

export const DemoContent: React.FC<IDemoContentProps> = props => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(
    query,
    props.debounceDelay ? Number(props.debounceDelay) : 500
  );
  const fetchState = usePokemonFetch(debouncedQuery);

  return (
    <div>
      <div>
        <TextField
          id="pokemonQuery"
          label="Pokemon Query"
          margin="normal"
          onChange={e => setQuery(e.target.value)}
          type="text"
          variant="outlined"
          value={query}
        />
      </div>
      <PokeFetchResult {...fetchState} />
    </div>
  );
};
