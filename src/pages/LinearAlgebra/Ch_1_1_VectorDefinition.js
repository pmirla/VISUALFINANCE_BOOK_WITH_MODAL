import React from "react";
import Typography from "@material-ui/core/Typography";
import AppHeader from "../../components/AppHeader";
import GetGGBJson from "../../components/GetGGBJson";
import { Box } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const Vectors = () => {
  let ggbParameters1 = {
    // material_id: "",
    width: 1200,
    height: 750,
    borderColor: "#FFFFFF",
    enableShiftDragZoom: false
  };

  let ggbParameters2 = {
    // material_id: "",
    width: 1700,
    height: 950,
    borderColor: "#FFFFFF",
    enableShiftDragZoom: false
  };

  return (
    <>
      Here you will learn two definitions. One is purely geometrical. Other one
      is algebraic in nature and needs more prerequisites , especially the
      coordinate system. In this page, you can experimentally inventigate
      relationship between two defintions
      <Grid container justify="center">
        <GetGGBJson
          jsonUrl="https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/chapters-ifm/LinearAlgebra/v_011_direction_and_length_integer_real_02.json"
          ggbParameters={ggbParameters1}
          appId="DefinfitionVector1"
        />
      </Grid>
      Your second exercise is three dimenisonal.
      <Grid container justify="center">
        <GetGGBJson
          jsonUrl="https://cors-anywhere.herokuapp.com/https://storage.googleapis.com/fin-math-images/ggbbase64/v_012_direction_and_length_3d_04.json"
          ggbParameters={ggbParameters2}
          appId="DefinfitionVector2"
        />
      </Grid>
    </>
  );
};

export default Vectors;