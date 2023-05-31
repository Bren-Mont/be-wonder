import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

import "./App.css";
import Home from "./Pages/Home";
import { customTheme } from "./shared/theme/constants";

const theme = createTheme(customTheme);
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
