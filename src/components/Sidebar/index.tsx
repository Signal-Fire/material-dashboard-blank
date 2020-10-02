import React from "react";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

import {
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  background: {
    position: "absolute",
    zIndex: 1,
    height: "100%",
    width: "100%",
    "&:after": {
      position: "absolute",
      zIndex: "3",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      background: "#192a56",
      opacity: ".7",
    },
  },
  item: {
    position: "relative",
    display: "block",
    "&:hover,&:focus,&:visited,&": {
      color: "#FFF",
    },
  },
  itemLink: {
    margin: "10px 15px 0",
    position: "relative",
    padding: "10px 5px",
  },
  itemIcon: {
    width: "24px",
    height: "30px",
    float: "left",
    marginRight: "15px",
  },
  itemText: {
    margin: "0",
    lineHeight: "30px",
    fontSize: "16px",
  },
  sidebarWrapper: {
    position: "relative",
    height: "calc(100vh)",
    width: "260px",
    zIndex: 4,
  },
});

const Sidebar: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <Hidden smDown>
        <Drawer anchor="left" variant="permanent" open>
          <div className={classes.sidebarWrapper}>
            <List>
              <NavLink to="/" className={classes.item} activeClassName="active">
                <ListItem button className={classes.itemLink}>
                  <DashboardIcon className={classNames(classes.itemIcon)} />
                  <ListItemText
                    primary={"Dashboard"}
                    className={classNames(classes.itemText)}
                    disableTypography
                  />
                </ListItem>
              </NavLink>
              <NavLink
                to="/config"
                className={classes.item}
                activeClassName="active"
              >
                <ListItem button className={classes.itemLink}>
                  <SettingsIcon className={classNames(classes.itemIcon)} />
                  <ListItemText
                    primary={"Config"}
                    className={classNames(classes.itemText)}
                    disableTypography
                  />
                </ListItem>
              </NavLink>
            </List>
          </div>
          <div className={classes.background} />
        </Drawer>
      </Hidden>
    </div>
  );
};

export default Sidebar;
