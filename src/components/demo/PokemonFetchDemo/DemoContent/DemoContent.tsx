import React, { useState } from "react";

// hooks
import { usePokemonFetch, useDebounce } from "../../../../hooks";

// styles
import { TextField } from "@material-ui/core";

// types
export interface IDemoContentProps {
  debounceDelay?: string;
}

export const DemoContent: React.FC<IDemoContentProps> = props => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(
    query,
    props.debounceDelay ? Number(props.debounceDelay) : 500
  );
  const { loading, error, data } = usePokemonFetch(debouncedQuery);

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
      <div>
        {error && <div>Error: {error.message}</div>}
        {loading && <div>Loading...</div>}
        {data && <div>Pokemon Found: {data.name}</div>}
      </div>
    </div>
  );
};
