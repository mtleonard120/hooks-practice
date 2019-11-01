import React from "react";

// packages

// hooks

// services

// components
import { Paper, Typography } from "@material-ui/core";

// styles
import styles from "./Demo.module.scss";

// utils

// types
export interface IDemoProps {
  title: string;
}

export const Demo: React.FC<IDemoProps> = props => {
  return (
    <Paper className={styles.content}>
      <Typography component="h2" variant="h6">
        {props.title}
      </Typography>
      {props.children}
    </Paper>
  );
};
