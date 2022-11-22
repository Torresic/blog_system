import styled, { ThemeProvider } from "styled-components";
import { Home } from "../pages/Home";
import { CustomTheme } from "../theme/customTheme";
import { GlobalStyleTheme } from "../theme/globalStyleTheme";
import "./App.css";

export const App = () => {
  return (
    <>
      <GlobalStyleTheme />
      <ThemeProvider theme={CustomTheme}>
        <Home />
      </ThemeProvider>
    </>
  );
};
