import React, { useEffect } from "react";
import HomeIcon from "@material-ui/icons/Home";
import useFetchData from "../components/UseFetchData";
import { Alert, AlertTitle } from "@material-ui/lab";
import GGBInject from "../components/GGBInject";
import VectorsComp from "./1.2_Addition";

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
    text: "Eelementary Mathematics",
    path: "/math/mathElementary",
    exact: true,
    Component: App1,
    id: "1.2"
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
  const [{ data, isLoading, isError }, setFetchUrl] = useFetchData({
    initialFetchUrl:
      "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/sum_of_vectors_02.json"
  });
  let newParameters2 = {};
  if (!isLoading)
    if (typeof data.res !== "undefined") {
      newParameters2 = {
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
          <GGBInject newParameters={newParameters2} id="someId1" />
        </>
      )}
    </>
  );
}
