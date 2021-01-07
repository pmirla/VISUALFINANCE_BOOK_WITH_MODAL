import React, { useEffect, useState } from "react";
import useFetchData from "../../components/UseFetchData";
import { Alert, AlertTitle } from "@material-ui/lab";
import GGBInject from "../../components/GGBInject";

const VectorDefinition = () => {
  const [{ data, isLoading, isError }, setFetchUrl] = useFetchData({
    initialFetchUrl:
      "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/sum_of_vectors_02.json"
    // "https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/ggbbase64/Beispiel_01_h.json"
  });
  let newParameters = {};

  newParameters = {
    material_id: "YSax6dAE",
    width: 1200,
    height: 900,
    borderColor: "#FFFFFF",
    ggbBase64: ""
  };

  return (
    <>
      <GGBInject newParameters={newParameters} id="someId2" />
    </>
  );
};

export default VectorDefinition;
