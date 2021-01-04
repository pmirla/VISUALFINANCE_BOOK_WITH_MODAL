import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import useFetchData from "../components/UseFetchData";
import { Alert, AlertTitle } from "@material-ui/lab";
import GGBInject from "../components/GGBInject";
export default () => [
  {
    text: "Introduction",
    path: "/math/mathsIntro",
    exact: true,
    Component: App1,
    Icon: HomeIcon,
    id: "1.1"
  },
  {
    text: "Introduction",
    path: "/math/mathsIntro",
    exact: true,
    Component: App2,
    Icon: HomeIcon,
    id: "1.2"
  },
  {
    text: "Introduction",
    path: "/math/mathsIntro",
    exact: true,
    Component: App3,
    Icon: HomeIcon,
    id: "1.3"
  },
  {
    text: "Default",
    path: "/math/mathsIntro",
    exact: true,
    Component: Default,
    Icon: HomeIcon,
    id: "default"
  }
];

function Default() {
  const text = "Hello World . I am Default APP";

  return (
    <div className="App">
      <p> {text} </p>
    </div>
  );
}

function App1() {
  const text = "Hello World . I am inside Pages / App1";

  return (
    <div className="App">
      <p> {text} </p>
    </div>
  );
}

function App2() {
  const text = "Hello World . I am inside Pages / App2";

  return (
    <div className="App">
      <p> {text} </p>
    </div>
  );
}

function App3() {
  const text = "Hello World . I am inside Pages / App3";

  return (
    <div className="App">
      <p> {text} </p>
    </div>
  );
}

function PageId13({ GGBParams }) {
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
