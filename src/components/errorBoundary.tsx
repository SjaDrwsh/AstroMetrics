
import { observer } from "mobx-react-lite";
import { Alert } from "@mui/material";
import React from "react";
import { errorBoundaryStore } from "../stores/errorBoundaryStore";

const ErrorBoundary = observer((props: React.PropsWithChildren<{}> )=>{
  const { error } = errorBoundaryStore;

  return <>
    {error && <Alert severity="error" variant="filled" >An error occurred: {error}</Alert>}
    {props.children}
  </>

});

export default ErrorBoundary;