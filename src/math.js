import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams
} from "react-router-dom";
import SingleCard from "./components/singleCard";
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
import { SVGInjector } from "@tanem/svg-injector";
import Iframe from "react-iframe";

// const pageIdAndComponents = require("./pages/pageIdAndComponents.js").default();
const darkTheme = createMuiTheme({
  // palette: {
  //   type: "dark"
  // },
  typography: {
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 500
    }
  }
});
// let topicsJSON = require("./data/topics.json");
//step0: This is starting component
export default function MathApp() {
  // const [darkState, setDarkState] = useState(true);
  // const palletType = darkState ? "dark" : "light";
  // const darkTheme = createMuiTheme({
  //   palette: {
  //     type: palletType
  //   }
  // });

  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <ModalSwitch />
      </Router>
    </ThemeProvider>
  );
}

//step1: Here we get JSON data and call Home component
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

  //componentsAndIds looks like
  //   {Component: <Vectors />, id: "1.1", name: "1.1 Defi…}
  // Component
  // <Vectors />
  // id
  // "1.1"
  // name
  // "1.1 Definition"

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

//step2: See how data is passsed in
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
      backgroundColor: "black",
      color: "lightgray"
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
    //step3: This is now a Dialog is called. Use debugger to get familair with it. Easy to forget
    SetDialogChild(pageComponent); // This is what gets showed up in Dialog. Look for math/index.js for id's and components
    // The above set command is very important. Here we are setting the  component to show wihtin the dialog
    SetIsOpen(true);
  };
  const handleDialogClose = () => {
    SetIsOpen(false);
  };

  //topics , then details
  let chapterCards = [];
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
            <SingleCard title={detail.name} image={detail.image} />
          </ButtonBase>
        </Grid>
      );
    });

    const element = (
      <>
        <Typography key={topic.name} variant="h4" className={classes.title}>
          {topic.name}
        </Typography>

        <Grid container className={classes.root} spacing={10}>
          <Grid item xs={12}>
            <Grid container justify="left" spacing={spacing}>
              {detailArray}
            </Grid>
          </Grid>
        </Grid>
      </>
    );
    chapterCards.push(element); // These are the cards that show up in front page
  });

  const chapterNames = chapterArray.map((eachTopic) => (
    <>
      <Typography key={eachTopic.name} variant="h6" className={classes.title}>
        {eachTopic.name}
      </Typography>
    </>
  ));
  useEffect(() => {
    // SVGInjector(document.getElementById("inject-me"));
  });

  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
    position: "relative",
    width: "100%",
    height: "800px",
    margin: "0 auto"
  };

  const iframe = `<iframe src="https://codesandbox.io/embed/react-svg-embed-tzqr9?fontsize=14&hidenavigation=1&theme=dark&view=preview"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="REACT SVG EMBED "
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>`;

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
            <Typography variant="h5" className={classes.title}>
              Illustrated Financial Mathematics. IFM
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>

      {/* <div
        style={mystyle}
        id="inject-me"
        data-src="https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/Bernoulli_20.svg"
      ></div> */}

      {/* <Iframe iframe={iframe} /> */}

      <Box m={5} p={1}>
        <div>
          <h2> Financial Mathematics </h2>
          {chapterNames}
          {chapterCards}

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
