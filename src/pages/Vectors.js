import React, { useEffect, useState } from "react";
import useFetchData from "../components/UseFetchData";
import { Alert, AlertTitle } from "@material-ui/lab";
import GGBInject from "../components/GGBInject";

const Vectors = () => {
  const [{ data, isLoading, isError }, setFetchUrl] = useFetchData({
    initialFetchUrl:
      "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/sum_of_vectors_02.json"
    // "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/ggbbase64/Beispiel_01_h.json"
  });
  let newParameters = {};
  let newParameters2 = {};
  if (!isLoading)
    if (typeof data.res !== "undefined") {
      newParameters = {
        material_id: "ee5nfsq6",
        width: 600,
        height: 600,
        borderColor: "#FFFFFF"
        // ggbBase64: data.res
      };

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

          <GGBInject newParameters={newParameters2} id="someId2" />
          {/* <GGBInject newParameters={newParameters} id="someId1" /> */}
        </>
      )}
    </>
  );
};

export default Vectors;
