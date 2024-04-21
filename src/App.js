import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { GlobalProvider } from "./contexts/GlobalState";
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import InfoPage from "./pages/InfoPage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navigation />
        {/* Adjust the main content box's padding based on screen size */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: {
              xs: 1,
              sm: 2,
              md: 5,
              lg: 5,
            },
            ml: {
              lg: 28,
            },
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/info" element={<InfoPage />} />
          </Routes>
        </Box>
      </Router>
    </GlobalProvider>
  );
}

export default App;
