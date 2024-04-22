import { useSelector } from "react-redux";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Header() {
  const { headerTitle } = useSelector((state) => state.global);

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          villasia. | {headerTitle}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
