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
// const pages = require("./pages/");

// let topicsJSON = require("./data/topics.json");

export default function MathApp() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
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

  let pages = componentsForDialog;

  const [DialogChildsOpen, SetDialogChild] = useState(<>pages[0].Component</>);
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    paper: {
      height: 240,
      width: 350
    },
    control: {
      padding: theme.spacing(2)
    }
  }));
  const classes = useStyles();

  // Handle
  const handleDialogOpen = (event) => {
    debugger;
    console.log(event.currentTarget.id);
    const clickedBoxId = event.currentTarget.id;
    // SetDialogChild(<Vectors />);

    const matchedPageObject = pages.filter((d) => d.id === clickedBoxId);
    // const failedPageObject = pages.filter((d) => d.id === "default");
    let pageComponent = <DefaultComponent />;

    if (matchedPageObject.length !== 0) {
      pageComponent = matchedPageObject[0].Component;
    }

    SetDialogChild(pageComponent);
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
            onClick={handleDialogOpen}
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
    returnArray.push(element);
  });

  const divItems = chapterArray.map((eachTopic) => (
    <>
      <div key={eachTopic.name}>{eachTopic.name}</div>
    </>
  ));

  return (
    <div>
      <h2> Financial Mathematics </h2>
      {divItems}
      {returnArray}
      <FullScreenDialog isOpen={isOpen} handleClose={handleDialogClose}>
        {DialogChildsOpen}
      </FullScreenDialog>
    </div>
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
