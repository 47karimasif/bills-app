import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home";
import NotFound from "../src/pages/notFound";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import Navbar from "../src/components/navbar";
import Bills from "./pages/bills";

import BillsContextProvider from "./context/billsContext";

const App = () => {
  console.log("rendering app js");
  const spinner = document.getElementById("spinner");
  const [loading, setLoading] = React.useState(true);

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <BillsContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:id" element={<Bills />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </BillsContextProvider>
    )
  );
};

export default App;
