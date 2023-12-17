import { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Link } from "@mui/material";
import { NavLink } from "react-router-dom";
// import { MyThemeContext } from "../context/MyThemeContext";

export default function NavBar() {
  // const { theme } = useContext(MyThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <nav>
          <Link
            component={NavLink}
            to="/"
            color="inherit"
            sx={{ p: 1, cursor: "pointer" }}
          >
            Home
          </Link>
          <Link
            component={NavLink}
            to="/Nicole"
            color="inherit"
            sx={{ p: 1, cursor: "pointer" }}
          >
            Nicole's Page
          </Link>
          <Link
            component={NavLink}
            to="/dash"
            color="inherit"
            sx={{ p: 1, cursor: "pointer" }}
          >
            Dashboard
          </Link>
          <Link
            component={NavLink}
            to="/about"
            color="inherit"
            sx={{ p: 1, cursor: "pointer" }}
          >
            About
          </Link>
          <Link
            component={NavLink}
            to="/posts"
            color="inherit"
            sx={{ p: 1, cursor: "pointer" }}
          >
            Posts
          </Link>
          <Link
            component={NavLink}
            to="/MUIDemo"
            color="inherit"
            sx={{ p: 1, cursor: "pointer" }}
          >
            MUIDemo
          </Link>
          <Link
            component={NavLink}
            to="/login"
            color="inherit"
            sx={{ p: 1, cursor: "pointer" }}
          >
            Login
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}
