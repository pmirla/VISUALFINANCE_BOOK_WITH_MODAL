import React from "react";
import GetGGBJson from "../../components/GetGGBJson";
const Vectors = () => {
  let ggbParameters = {
    // material_id: "",
    width: 1200,
    height: 800,
    borderColor: "#FFFFFF",
    enableShiftDragZoom: false
  };

  return (
    <>
      Play around to learn how to Add and subtract vectors
      <GetGGBJson
        jsonUrl="https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/chapters-ifm/LinearAlgebra/v_017_sum_of_vectors_03.json"
        ggbParameters={ggbParameters}
        appId="DefinfitionVector"
      />
    </>
  );
};

export default Vectors;
