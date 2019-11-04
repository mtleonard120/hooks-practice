import React from "react";

export interface IDataProps {
  dataObj: any;
}

export const Data: React.FC<IDataProps> = props => (
  <pre>{JSON.stringify(props.dataObj, null, 2)}</pre>
);
