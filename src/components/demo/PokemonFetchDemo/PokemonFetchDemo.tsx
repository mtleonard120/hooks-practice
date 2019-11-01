import React, { useState } from "react";

// components
import { Demo } from "../../reusuables";
import { DemoContent } from "./DemoContent";
import { TextField } from "@material-ui/core";

// types
export interface IPokemonFetchDemoProps {}

export const PokemonFetchDemo: React.FC<IPokemonFetchDemoProps> = props => {
  const [delay, setDelay] = useState("500");

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

      <p>
        <strong>Adjustable Params</strong>
        <div>
          <TextField
            id="delay"
            label="Debounce Delay (ms)"
            margin="normal"
            onChange={e => setDelay(e.target.value)}
            type="number"
            variant="outlined"
            value={delay}
          />
        </div>
      </p>
      <strong>Demo</strong>
      <DemoContent debounceDelay={delay} />
    </Demo>
  );
};
