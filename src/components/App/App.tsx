import React from "react";

// packages
import { Typography, Toolbar, AppBar } from "@material-ui/core";

// components
import { PokemonFetchDemo } from "../demo";

// styles
import styles from "./App.module.scss";

export const App: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography component="h1" variant="h6">
            React Hooks Practice
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={styles.main}>
        <PokemonFetchDemo />
      </div>
    </>
  );
};
