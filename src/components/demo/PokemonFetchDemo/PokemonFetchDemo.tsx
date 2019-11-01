import React, { useState } from "react";

// components
import { Demo } from "../../reusuables";
import { DemoContent } from "./DemoContent";

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
          <label htmlFor="delay">Debounce delay (in ms): </label>
          <input
            type="number"
            id="delay"
            onChange={e => setDelay(e.target.value)}
            value={delay}
          />
        </div>
      </p>
      <DemoContent debounceDelay={delay} />
    </Demo>
  );
};
