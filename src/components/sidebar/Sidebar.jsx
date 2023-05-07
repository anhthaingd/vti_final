import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import StoreIcon from "@mui/icons-material/Store";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import {
  InsertChartOutlined,
  PsychologyAltOutlined,
} from "@mui/icons-material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">logothai</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span onClick={(e) => navigate("/")}>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            <PermIdentityIcon className="icon" />
            <span onClick={(e) => navigate("/users")}>Users</span>
          </li>
          <li>
            <StoreIcon className="icon" />
            <span>Products</span>
          </li>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartOutlined className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Systems Health</span>
          </li>
          <li>
            <PsychologyAltOutlined className="icon" />
            <span>Logs</span>
          </li>
          <p className="title">USER</p>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
