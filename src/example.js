import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams
} from "react-router-dom";
import GGBInject from "./GGBInject";
import useFetchData from "./UseFetchData";
import { Alert, AlertTitle, TimelineOppositeContent } from "@material-ui/lab";
import MediaCard from "./components/singleCard";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from '@material-ui/core/ButtonBase';

let topicsJSON = require("./data/topics.json");

// This example shows how to render two different screens
// (or the same screen in a different context) at the same URL,
// depending on how you got there.
//
// Click the "featured images" and see them full screen. Then
// "visit the gallery" and click on the colors. Note the URL and
// the component are the same as before but now we see them
// inside a modal on top of the gallery screen.

export default function ModalGalleryExample() {
  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

function ModalSwitch() {
  let location = useLocation();

  // This piece of state is set when one of the
  // gallery links is clicked. The `background` state
  // is the location that we were at when one of
  // the gallery links was clicked. If it's there,
  // use it as the location for the <Switch> so
  // we show the gallery in the background, behind
  // the modal.
  let background = location.state && location.state.background;

  return (
    <div>
      <Switch location={background || location}>
        <Route exact path="/" children={<Home chapters={topicsJSON} />} />
        <Route path="/gallery" children={<Gallery />} />
        {/* <Route path="/img/:id" children={<ImageView />} /> */}
      </Switch>

      {/* Show the modal when a background page is set */}
      {background && <Route path="/img/:id" children={<Modal />} />}
    </div>
  );
}

const IMAGES = [
  { id: 0, title: "Chapter 1", color: "DarkOrchid" },
  { id: 1, title: "Chapter 2", color: "LimeGreen" },
  { id: 2, title: "Chapter 3", color: "Tomato" },
  { id: 3, title: "Chapter 4", color: "#789" },
  { id: 4, title: "Chapter 5", color: "Crimson" }
];

function Thumbnail({ color }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        background: color
      }}
    />
  );
}

function Image({ color }) {
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        background: color
      }}
    />
  );
}

function Home({ chapters }) {
  let location = useLocation();
  const chapterArray = chapters.children;
  const [spacing, setSpacing] = React.useState(2);

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

  const handleClickOpen = () => {
    debugger;
    alert("Hi");
  };

  let returnArray = [];
  chapterArray.forEach((topic) => {
    console.log(topic.name);
    let detailArray = [];
    topic.children.forEach((detail) => {
      console.log(detail.name);
      detailArray.push(
        <Grid key={detail.name} item>
          <ButtonBase className={classes.cardButton} onClick={handleClickOpen}>
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
      <Link to="/gallery">Visit the Gallery</Link>
      <h2>Featured Images</h2>
      <ul>
        <li>
          <Link to="/img/2">Tomato</Link>
        </li>
        <li>
          <Link to="/img/4">Crimson</Link>
        </li>
      </ul>
      {divItems}
      <h2> This should be result </h2>
      {returnArray}
    </div>
  );
}

function Gallery() {
  let location = useLocation();

  return (
    <div>
      {IMAGES.map((i) => (
        <Link
          key={i.id}
          to={{
            pathname: `/img/${i.id}`,
            // This is the trick! This link sets
            // the `background` in location state.
            state: { background: location }
          }}
        >
          <Thumbnail color={i.color} />
          <p>{i.title}</p>
        </Link>
      ))}
    </div>
  );
}

function ImageView() {
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return <div>Image not found</div>;

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  );
}

function Vectors({ GGBParams }) {
  const [{ data, isLoading, isError }, setFetchUrl] = useFetchData({
    initialFetchUrl:
      "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/sum_of_vectors_02.json"
  });
  let newParameters = {};
  if (!isLoading)
    if (typeof data.res !== "undefined") {
      newParameters = {
        // material_id: "ee5nfsq6",
        width: 1200,
        height: 1000,
        borderColor: "#FFFFFF",
        ggbBase64: data.res
      };
    }

  return (
    <>
      {isError && <p>Something went wrong...</p>}
      <h2>Vector Addition </h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Alert severity="info">
            <AlertTitle>Loading Applet</AlertTitle>
            Interact with this Applet to understand the formula —{" "}
            <strong>check it out!</strong>
          </Alert>
          <GGBInject newParameters={newParameters} id="someId1" />
        </>
      )}
    </>
  );
}

function Modal() {
  let history = useHistory();
  let { id } = useParams();
  let image = IMAGES[parseInt(id, 10)];

  if (!image) return null;

  let back = (e) => {
    e.stopPropagation();
    history.goBack();
  };

  const newParameters = {
    width: 1200,
    height: 1000,
    borderColor: "#FFFFFF"
  };
  return (
    <>
      <div
        // onClick={back}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          background: "rgba(0, 0, 0, 0.15)"
        }}
      >
        <div
          className="modal"
          style={{
            position: "absolute",
            background: "#fff",
            top: 25,
            left: "2%",
            right: "2%",
            padding: 15,
            border: "2px solid #444"
          }}
        >
          <button type="button" onClick={back}>
            Close
          </button>

          <Vectors />
          <Vectors />
          <h1>{image.title}</h1>
          <Image color={image.color} />
          <button type="button" onClick={back}>
            Close
          </button>
        </div>
      </div>
    </>
  );
}
