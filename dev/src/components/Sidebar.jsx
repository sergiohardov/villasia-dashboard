import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setHeaderTitle, setActiveListItem } from "../store/global/slice";
import {
  Box,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const drawerWidth = 240;

const list = [
  {
    link: "/",
    text: "Home",
    icon: <HomeIcon />,
  },
  {
    link: "/locations",
    text: "Locations",
    icon: <LocationOnIcon />,
  },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const { activeListItem } = useSelector((state) => state.global);

  const handleClickListItem = (title, idx) => {
    dispatch(setHeaderTitle(title));
    dispatch(setActiveListItem(idx));
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {list.map((item, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.link}
                selected={activeListItem === idx}
                onClick={() => handleClickListItem(item.text, idx)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}
