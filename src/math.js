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
const pages = require("./pages/");

let topicsJSON = require("./data/topics.json");

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
  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home chapters={topicsJSON} />} />
        <Route exact path="/math" children={<Home chapters={topicsJSON} />} />
      </Switch>
    </div>
  );
}

function Home({ chapters }) {
  let location = useLocation();
  const chapterArray = chapters.children;
  const [spacing, setSpacing] = React.useState(2);
  const [isOpen, SetIsOpen] = useState(false);

  let pages = [];

  try {
    pages = require(`./pages/`).default();
  } catch (err) {
    console.log(err);
  }

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

  const handleDialogOpen = (event) => {
    console.log(event.currentTarget.id);
    const clickedBoxId = event.currentTarget.id;
    // SetDialogChild(<Vectors />);

    const matchedPageObject = pages.filter((d) => d.id === clickedBoxId);
    const failedPageObject = pages.filter((d) => d.id === "default");
    let pageComponent = failedPageObject[0].Component;
    debugger;

    if (matchedPageObject.length !== 0) {
      pageComponent = matchedPageObject[0].Component;
    }

    SetDialogChild(pageComponent);
    SetIsOpen(true);
  };

  const handleDialogClose = () => {
    SetIsOpen(false);
  };
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
