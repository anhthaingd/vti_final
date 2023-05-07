import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  MenuItem,
  MenuList,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import { useNavigate } from "react-router-dom";
import "./header.css";
const Header = () => {
  const [value, setValue] = useState();
  const [username, setUsername] = useState("");

  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  const navigation = useNavigate();
  const comeLogin = () => {
    navigation("/login");
  };
  const comeSignin = () => {
    navigation("/register");
  };

  useEffect(() => {
    if (localStorage.getItem("username")) {
      setUsername(localStorage.getItem("username"));
    }
  }, [username]);
  const navigate = useNavigate();
  const btnLogout = () => {
    navigate("/login")
    localStorage.removeItem("username")
    localStorage.removeItem("token")
  }
  const viewProfile = () => {
    navigate("/profile")

  }
  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970" }}>
        <Toolbar>
          <AddBusinessRoundedIcon 
          sx={{ transform: "scale(2)" }}
          onClick={(e)=> navigate("/")} />
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="View Group" onClick={()=> navigate("/viewGroup")}/>
              <Tab label="Add Group" />
            </Tabs>
            {username ? (
              <>
                <MenuItem sx={{ marginLeft: "auto" }} variant="contained">
                  <div className="dropdown">
                    <div className="dropbtn">hello, {username}</div>
                    <div className="dropdown-content">
                      <button type="" onClick={viewProfile}>View Profile</button>
                      <button type="text" onClick={btnLogout}>Logout</button>
                    </div>
                  </div>
                </MenuItem>
              </>
            ) : (
              <>
                {" "}
                <Button
                  sx={{ marginLeft: "auto" }}
                  variant="contained"
                  onClick={comeLogin}
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: "10px" }}
                  variant="contained"
                  onClick={comeSignin}
                >
                  SignUp
                </Button>
              </>
            )}
          </>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
