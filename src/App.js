import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import NotFound from "../src/pages/notFound";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Navbar from "../src/components/navbar";

import BillsContextProvider from "./context/billsContext";

const App = () => {
  return (
    <BillsContextProvider>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </BillsContextProvider>
  );
};

export default App;
