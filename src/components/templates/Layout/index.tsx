import React from "react";
import { makeStyles } from "@material-ui/core";

import Footer from "components/Footer/Footer.js";
import Sidebar from "components/Sidebar/";
import Navbar from "components/Navbars/Navbar.js";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh",
  },
  mainPanel: {
    [theme.breakpoints.up("md")]: {
      width: `calc(100% - 260px)`,
    },
    overflow: "auto",
    position: "relative",
    float: "right",
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: "touch",
  },
  navBar: {
    marginBottom: "55px",
  },
}));

const Layout: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Sidebar />
      <div className={classes.mainPanel}>
        <div className={classes.navBar}>
          <Navbar />
        </div>
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
