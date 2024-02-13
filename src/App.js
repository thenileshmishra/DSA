import React from "react";
import Home from "./components/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
function App() {
  const theme = createTheme({});
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
