import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";
import MediaCard from "./components/singleCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import FullScreenDialog from "./components/DialogComponent";
import Box from "@material-ui/core/Box";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// const pageIdAndComponents = require("./pages/pageIdAndComponents.js").default();
const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});
// let topicsJSON = require("./data/topics.json");

export default function MathApp() {
  const [darkState, setDarkState] = useState(true);
  const palletType = darkState ? "dark" : "light";
  const darkTheme = createMuiTheme({
    palette: {
      type: palletType
    }
  });

  return (
    // <ThemeProvider theme={darkTheme}>
    <Router>
      <ModalSwitch />
    </Router>
    // </ThemeProvider>
  );
}

function ModalSwitch() {
  let location = useLocation();
  let background = location.state && location.state.background;

  let topicsJSON = [];

  try {
    topicsJSON = require(`./pages/`).default();
  } catch (err) {
    console.log(err);
  }

  const chaptersAndTopics = topicsJSON[0]; //figure out more about this array from object
  const chapterArray = chaptersAndTopics.children;
  let componentsAndIds = [];

  chapterArray.forEach((topic) => {
    topic.children.forEach((detail) => {
      componentsAndIds.push(detail);
    });
  });

  return (
    <div>
      <Switch location={background || location}>
        <Route
          exact
          path="/"
          children={
            <Home
              chapterArray={chapterArray}
              componentsForDialog={componentsAndIds}
            />
          }
        />
        <Route
          exact
          path="/math" //This is optional.Not used yet. Route for /math
          children={<Home chapters={chaptersAndTopics} />}
        />
      </Switch>
    </div>
  );
}

function Home({ chapterArray, componentsForDialog }) {
  let location = useLocation();
  const [spacing, setSpacing] = React.useState(2);
  const [isOpen, SetIsOpen] = useState(false);
  const [dialogTitle, SetDialogTitle] = useState("");
  let pages = componentsForDialog;

  const [DialogChildsOpen, SetDialogChild] = useState(
    <>
      <DefaultComponent />
    </>
  );
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    appbar: {
      backgroundColor: "#ffcf02",
      color: "black"
    },

    paper: {
      height: 240,
      width: 350
    },
    control: {
      padding: theme.spacing(2)
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    },
    cardButton: {
      backgroundColor: "black"
    }
  }));

  const classes = useStyles();

  // Handle
  const handleDialogOpen = (currentTarget, title) => {
    SetDialogTitle(title);
    const clickedBoxId = currentTarget;
    const matchedPageObject = pages.filter((d) => d.id === clickedBoxId);
    let pageComponent = <DefaultComponent />;
    if (matchedPageObject.length !== 0) {
      debugger;
      pageComponent = matchedPageObject[0].Component;
    }
    SetDialogChild(pageComponent); // This is what gets showed up in Dialog. Look for math/index.js for id's and components
    SetIsOpen(true);
  };
  const handleDialogClose = () => {
    SetIsOpen(false);
  };
  // Handle
  let returnArray = [];
  chapterArray.forEach((topic) => {
    console.log(topic.name);
    let detailArray = [];
    topic.children.forEach((detail) => {
      console.log(detail.name);
      detailArray.push(
        <Grid key={detail.name} item>
          <ButtonBase
            key={detail.name}
            id={detail.id}
            className={classes.cardButton}
            onClick={(e) => handleDialogOpen(e.currentTarget.id, detail.name)}
          >
            <MediaCard title={detail.name} />
            {/* <div> {detail.name}</div> */}
          </ButtonBase>
        </Grid>
      );
    });

    const element = (
      <>
        <h1>{topic.name}</h1>

        <Grid container className={classes.root} spacing={10}>
          <Grid item xs={12}>
            <Grid container justify="left" spacing={spacing}>
              {detailArray}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
    returnArray.push(element); // These are the cards that show up in front page
  });

  const divItems = chapterArray.map((eachTopic) => (
    <>
      <div key={eachTopic.name}>{eachTopic.name}</div>
    </>
  ));

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              Illustrated Financial Mathematics. IFM
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>

      <Box m={5} p={1}>
        <div>
          <h2> Financial Mathematics </h2>
          {divItems}
          {returnArray}
          <FullScreenDialog
            isOpen={isOpen}
            handleClose={handleDialogClose}
            title={dialogTitle}
          >
            {DialogChildsOpen}
          </FullScreenDialog>
        </div>
      </Box>
    </>
  );
}

function DefaultComponent() {
  const text = "Hello World . I am inside math.js / App3";

  return (
    <div className="App">
      <p> {text} </p>
    </div>
  );
}
