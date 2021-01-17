import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// import FoodXLogo from '../assets/FoodXLogo.png';

const useStyles = makeStyles((theme) => ({
  imgWrapper: {
    display: "flex",
    flexGrow: 1
  },
  list: {
    display: "flex",
    flexGrow: 1
  },
  listItem1: {
    marginRight: "0.5em",
    maxWidth: "25em",
    // border: "2px solid #fff",
    opacity: 0.8,
    textTransform: "uppercase",
    fontWeight: 600
  },

  listItemText: {
    whiteSpace: "nowrap"
    // textAlign: "center"
  },
  appbar: {
    backgroundColor: "black",
    color: "lightgray"
  },
  ifm: {
    backgroundColor: "#ffcf02",
    color: "black",
    maxWidth: "5em",
    textAlign: "center"
  },
  login: {
    maxWidth: "5em",
    textAlign: "center",
    position: "absolute",
    right: 0
  }
}));

function AppHeader(props) {
  const classes = useStyles();

  return (
    <AppBar position="relative" elevation={0} className={classes.appbar}>
      <Toolbar>
        <List className={classes.list}>
          <ListItem button key={"IFM"} className={classes.ifm}>
            <ListItemText primary={"IFM"} />
          </ListItem>

          <ListItem button key={"IFMLONG"} className={classes.listItem1}>
            <ListItemText primary={"Illustrated Financial Mathematics "} />
          </ListItem>

          <ListItem button key={"LOGIN"} className={classes.login}>
            <ListItemText primary={"LOGIN"} />
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
}

export default withRouter(AppHeader);
