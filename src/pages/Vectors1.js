import React, { useEffect, useState } from "react";
import useFetchData from "../components/UseFetchData";
import { Alert, AlertTitle } from "@material-ui/lab";
import GeogebraComponent from "../components/GeogebraComponent";
const Vectors = () => {
  const [count, setCount] = React.useState(0);

  const [{ data, isLoading, isError }, setFetchUrl] = useFetchData({
    initialFetchUrl:
      "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/v_012_direction_and_length_3d_Version2.json"
  });

  let newParameters = {};
  if (!isLoading)
    if (typeof data.res !== "undefined") {
      newParameters = {
        // material_id: "",
        width: 1700,
        height: 806,
        borderColor: "#FFFFFF",
        enableShiftDragZoom: false,
        ggbBase64: data.res
      };
    }

  return (
    <>
      {isError && <p>Something went wrong...</p>}
      {isLoading ? (
        <AlertTitle>Loading Applet</AlertTitle>
      ) : (
        <>
          <Alert severity="info">
            Interact with this Applet to understand the formula{" "}
          </Alert>

          <GeogebraComponent
            count={0}
            id="app_id1"
            newParameters={newParameters}
          />
        </>
      )}
    </>
  );
};

export default Vectors;
