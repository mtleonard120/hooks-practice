import React, { useState } from "react";
import "./App.css";

//packages
import { Typography, Toolbar, AppBar } from "@material-ui/core";

// hooks
import { usePokemonFetch } from "./hooks";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const { loading, error, data } = usePokemonFetch(query);

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h6">
            React Hook Practice
          </Typography>
        </Toolbar>
      </AppBar>
      <input
        type="text"
        onChange={e => setQuery(e.target.value)}
        value={query}
      />
      <div>
        {error && <p>{error}</p>}
        {loading && <p>Loading...</p>}
        {data && <p>Pokemon Name: {data.name}</p>}
      </div>
    </div>
  );
};

export default App;
