import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import AppTheme from './themes/AppTheme';
import MainRouter from "./router/MainRouter";
// import { Provider } from "react-redux";
function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={AppTheme}>
        <MainRouter />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
