import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";

import Header from "../components/Header";

export default function Layout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
      <Outlet />
      </Box>
    </Box>
  );
}
