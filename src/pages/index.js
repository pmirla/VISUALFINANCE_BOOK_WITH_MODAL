import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import useFetchData from "../components/UseFetchData";
import { Alert, AlertTitle } from "@material-ui/lab";
import GGBInject from "../components/GGBInject";
import Vectors from "./Vectors";
import VectorsDefinitions from "./one/vectorsDefinition";
import Vectors2 from "./1.2_Addition";
export default () => [
  // Thius has to be a array. Object did not work
  {
    name: " Ch 1 to 10 Mathematics",
    children: [
      {
        name: "1. Vectors",
        children: [
          {
            name: "1.1 Definition",
            id: "1.1",
            Component: <Vectors />
          },
          {
            name: "1.2 Addition, Subrtraction",
            id: "1.2",
            Component: <Vectors />
          },
          {
            name: "1.3 Dot Product",
            id: "1.3",
            Component: <Vectors />
          }
        ]
      },
      {
        name: "2. Functions and Models",
        children: [
          {
            name: "2.1 Definition of a Function",
            id: "2.1",
            Component: <Vectors />
          },
          {
            name: "2.2 Examples",
            id: "2.2",
            Component: <Vectors />
          },
          {
            name: "2.3 Linking multiple functions",
            id: "2.3",
            Component: <Vectors />
          },
          {
            name: "2.4 Parametric Functions",
            id: "2.4",
            Component: App1
          },
          {
            name: "2.5 Functions with several Variables",
            id: "2.5",
            Component: App1
          },
          {
            name: "2.6 Constraint Functions",
            id: "2.6",
            Component: App1
          },
          {
            name: "2.7 Utility Function",
            id: "2.7",
            Component: App1
          },
          {
            name: "2.8 Production Function",
            id: "2.8",
            Component: App1
          },
          {
            name: "2.9 Present Value Function",
            id: "2.9",
            Component: App1
          },
          {
            name: "2.10 Capital Asset Pricing Model",
            id: "2.10",
            Component: App1
          },
          {
            name: "2.11 Payoffs of Contracts",
            id: "2.11",
            Component: App1
          },
          {
            name: "2.12 Payoffs of an Option",
            id: "2.12",
            Component: App1
          },
          {
            name: "2.13 Forward Exchange Rate",
            id: "2.13",
            Component: App1
          }
        ]
      },
      {
        name: "3. Differentiation and Integration ",
        children: [
          {
            name: "3.1 Derivative at a Point",
            id: "2.1",
            Component: App1
          },
          {
            name: "3.2 Differentiation Rules",
            id: "3.2",
            Component: App1
          },
          {
            name: "3.3 Maximum and Minimum of a Function",
            id: "3.3",
            Component: App1
          },
          {
            name: "3.4 Mean Value Theorem",
            id: "3.4",
            Component: App1
          },
          {
            name: "3.5 Approximation of Functions by Polynoms",
            id: "3.5",
            Component: App1
          },
          {
            name: "3.6 Integration: Definite Integral",
            id: "3.6",
            Component: App1
          },
          {
            name: "3.7 Integration: Anti Derivative Function",
            id: "3.7",
            Component: App1
          },
          {
            name: "3.8 First Fundamental Theorem of Calculus",
            id: "3.8",
            Component: App1
          },
          {
            name: "3.9 Second Fundamental Theorem of Calculus",
            id: "3.9",
            Component: App1
          },
          {
            name: "3.10 Change in Variables in Indefinite Integrals",
            id: "3.10",
            Component: App1
          },
          {
            name: "3.11 Double Integral",
            id: "3.11",
            Component: App1
          },
          {
            name: "3.12 Duration and Convexity of securitisation assets",
            id: "3.12",
            Component: App1
          }
        ]
      },
      {
        name: "4. Partial Derivatives",
        children: [
          {
            name: "4.1 Introduction",
            id: "4.1",
            Component: App1
          },
          {
            name: "4.2 The Chain Rule",
            id: "4.2",
            Component: App1
          },
          {
            name: "4.3 Derivatives of Implicit Functions",
            id: "4.3",
            Component: App1
          },
          {
            name: "4.4 The Total Differential",
            id: "4.4",
            Component: App1
          },
          {
            name: "4.5 Directional Derivatives",
            id: "4.5",
            Component: App1
          },
          {
            name: "4.6 Gradients",
            id: "4.6",
            Component: App1
          },
          {
            name: "4.7 Tangent Planes and Normal Lines",
            id: "4.7",
            Component: App1
          },
          {
            name: "4.8 Extrema of Functions of several Variables",
            id: "4.8",
            Component: App1
          },

          {
            name: "4.9 Extremal Problems with Constraints",
            id: "4.9",
            Component: App1
          }
        ]
      },
      {
        name: "5. Log and Exponetials in Finance ",
        children: [
          {
            name: "5.1 Exponents and Logarithms",
            id: "5.1",
            Component: App1
          },
          {
            name: "5.2 Logarithmic Functions",
            id: "5.2",
            Component: App1
          },
          {
            name: "5.3 Logarithmic Identities",
            id: "5.3",
            Component: App1
          },
          {
            name: "5.4 Change of Base",
            id: "5.4",
            Component: App1
          },
          {
            name: "5.5 The Natural Logarithmic Function",
            id: "5.5",
            Component: App1
          },
          {
            name: "5.6 The Exponential Function",
            id: "5.6",
            Component: App1
          },
          {
            name: "5.7 Power Series ",
            id: "5.7",
            Component: App1
          },
          {
            name: "5.8 General Functions",
            id: "5.8",
            Component: App1
          },
          {
            name: "5.9 Some Applications ",
            id: "5.9",
            Component: App1
          },
          {
            name: "5.10 Integration by Parts",
            id: "5.10",
            Component: App1
          }
        ]
      },
      {
        name: "6. Linear Algebra",
        children: [
          {
            name: "6.1 Vectors, Direction and Magnitude",
            id: "6.1",
            Component: App1
          }
        ]
      },
      {
        name: "7. Differential Equations",
        children: [
          {
            name: "7.1 Examples",
            id: "7.1",
            Component: App1
          },
          {
            name: "7.2 Solution Methods",
            id: "7.2",
            Component: App1
          },
          {
            name: "7.3 First-Order Linear Differential Equations",
            id: "7.3",
            Component: App1
          },
          {
            name: "7.4 Second-Order Linear Differential Equations",
            id: "7.4",
            Component: App1
          },
          {
            name: "7.5 Linear Differential Equation Systems",
            id: "7.5",
            Component: App1
          }
        ]
      },
      {
        name: "8. Difference Equations",
        children: [
          {
            name: "8.1 Definition",
            id: "8.1",
            Component: App1
          }
        ]
      },
      {
        name: "9. Optimization Theory",
        children: [
          {
            name: "9.1 Introduction",
            id: "9.1",
            Component: App1
          },
          {
            name: "9.2 The Mathematical Programming Problem",
            id: "9.2",
            Component: App1
          },
          {
            name: "9.3 Unconstrained Optimization",
            id: "9.3",
            Component: App1
          },
          {
            name: "9.4 Constrained Optimization",
            id: "9.4",
            Component: App1
          },

          {
            name: "9.5 The General Classical Program",
            id: "9.5",
            Component: App1
          }
        ]
      },
      {
        name: "10. Linear Programming",
        children: [
          {
            name: "10.1 Introduction",
            id: "10.1",
            Component: App1
          },
          {
            name: "10.2 Formulation of the LP",
            id: "10.2",
            Component: App1
          },
          {
            name: "10.3 The Geometry of the LP",
            id: "10.3",
            Component: App1
          },
          {
            name: "10.4 The Simplex Method",
            id: "10.4",
            Component: App1
          },

          {
            name: "10.5 Examples",
            id: "10.5",
            Component: App1
          },
          {
            name: "10.6 The Dual Problem of the LP",
            id: "10.6",
            Component: App1
          },
          {
            name: "10.7 The Lagrangian Approach",
            id: "10.7",
            Component: App1
          },
          {
            name: "10.8 Economic Theory and Duality",
            id: "10.8",
            Component: App1
          }
        ]
      }
    ]
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
  let newParameters = {};
  newParameters = {
    material_id: "ee5nfsq6",
    width: 1200,
    height: 1000,
    borderColor: "#FFFFFF"
    // ggbBase64: data.res
  };
  return (
    <>
      <h2>Vector Addition </h2>
      <>
        <Alert severity="info">
          <AlertTitle>Loading Applet</AlertTitle>
          Interact with this Applet to understand the formula —{" "}
          <strong>check it out!</strong>
        </Alert>
        <GGBInject newParameters={newParameters} id="someId1" />
      </>
    </>
  );
}
