import React, { useState } from "react";

//packages
import { Typography, Toolbar, AppBar, Paper } from "@material-ui/core";

// hooks
import { usePokemonFetch } from "../../hooks";

// styles
import styles from "./App.module.scss";

export const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const { loading, error, data } = usePokemonFetch(query);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h6">
            React Hook Practice
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.main}>
        <Paper className={styles.main}>
          <Typography component="h2" variant="h6">
            usePokemonFetch
          </Typography>

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
        </Paper>
      </div>
    </>
  );
};
