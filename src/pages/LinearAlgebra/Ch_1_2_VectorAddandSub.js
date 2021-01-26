import React from "react";
import GetGGBJson from "../../components/GetGGBJson";
const Vectors = () => {
  let ggbParameters = {
    // material_id: "",
    width: 1700,
    height: 950,
    borderColor: "#FFFFFF",
    enableShiftDragZoom: false
  };

  return (
    <>
      <GetGGBJson
        jsonUrl="https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/ggbbase64/v_012_direction_and_length_3d_04.json"
        ggbParameters={ggbParameters}
        appId="DefinfitionVector"
      />
    </>
  );
};

export default Vectors;
