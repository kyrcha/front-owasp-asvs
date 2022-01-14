import { Routes, Route } from "react-router-dom";
import useSWR from "swr";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/layout/Header";
import Home from "./screens/Home";
import Signup from "./screens/Signup";

// default theme
const theme = createTheme();

function App() {
  const { data, error } = useSWR("/heartbeat");

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
