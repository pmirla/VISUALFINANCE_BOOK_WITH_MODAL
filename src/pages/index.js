import React from "react";
import Vectors1 from "./Vectors1";
import Vectors2 from "./Vectors2";
import Vectors3 from "./Vectors3";

export default () => [
  // Thius has to be a array. Object did not work
  {
    name: " Ch 1 to 10 Mathematics",
    children: [
      {
        name: "1. Linear Algebra",
        children: [
          {
            name: "1.1 Vector Definition",
            id: "1.1",
            Component: <Vectors1 />,
            image:
              "https://storage.googleapis.com/fin-math-images/card_images/card_One.gif",
            description:
              "What are vectors? How to reprsent a Vector?  How to calculate magnitude of a vector ? \
                 How to reprsent a Vector in 3 imensions?"
          },
          {
            name: "1.2 Vector Addition, Subtraction",
            id: "1.2",
            Component: <Vectors3 />,
            image:
              "https://storage.googleapis.com/fin-math-images/card_images/card_two.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "1.3 Vector Product",
            id: "1.3",
            Component: <Vectors2 />,
            image:
              "https://storage.googleapis.com/fin-math-images/card_images/card_three_2.gif",
            description:
              "Real Life example of application of Vectors in Finance. "
          }
        ]
      },
      {
        name: "2. Functions and Models",
        children: [
          {
            name: "2.1 Definition of a Function",
            id: "2.1",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif"
          },
          {
            name: "2.2 Applications in Finance",
            id: "2.2",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif"
          },
          {
            name: "2.3 Linking multiple functions",
            id: "2.3",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.4 Parametric Functions",
            id: "2.4",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.5 Functions with several Variables",
            id: "2.5",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.6 Constraint Functions",
            id: "2.6",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.7 Utility Function",
            id: "2.7",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.8 Production Function",
            id: "2.8",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.9 Present Value Function",
            id: "2.9",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.10 Capital Asset Pricing Model",
            id: "2.10",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.11 Payoffs of Contracts",
            id: "2.11",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.12 Payoffs of an Option",
            id: "2.12",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "2.13 Forward Exchange Rate",
            id: "2.13",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          }
        ]
      },
      {
        name: "3. Differentiation and Integration ",
        children: [
          {
            name: "3.1 Derivative at a Point",
            id: "2.1",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.2 Differentiation Rules",
            id: "3.2",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.3 Maximum and Minimum of a Function",
            id: "3.3",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.4 Mean Value Theorem",
            id: "3.4",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.5 Approximation of Functions by Polynoms",
            id: "3.5",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.6 Integration: Definite Integral",
            id: "3.6",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.7 Integration: Anti Derivative Function",
            id: "3.7",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.8 First Fundamental Theorem of Calculus",
            id: "3.8",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.9 Second Fundamental Theorem of Calculus",
            id: "3.9",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.10 Change in Variables in Indefinite Integrals",
            id: "3.10",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.11 Double Integral",
            id: "3.11",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "3.12 Duration and Convexity of securitisation assets",
            id: "3.12",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          }
        ]
      },
      {
        name: "4. Partial Derivatives",
        children: [
          {
            name: "4.1 Introduction",
            id: "4.1",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "4.2 The Chain Rule",
            id: "4.2",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "4.3 Derivatives of Implicit Functions",
            id: "4.3",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "4.4 The Total Differential",
            id: "4.4",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "4.5 Directional Derivatives",
            id: "4.5",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "4.6 Gradients",
            id: "4.6",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "4.7 Tangent Planes and Normal Lines",
            id: "4.7",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "4.8 Extrema of Functions of several Variables",
            id: "4.8",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },

          {
            name: "4.9 Extremal Problems with Constraints",
            id: "4.9",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          }
        ]
      },
      {
        name: "5. Log and Exponetials in Finance ",
        children: [
          {
            name: "5.1 Exponents and Logarithms",
            id: "5.1",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "5.2 Logarithmic Functions",
            id: "5.2",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "5.3 Logarithmic Identities",
            id: "5.3",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "5.4 Change of Base",
            id: "5.4",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "5.5 The Natural Logarithmic Function",
            id: "5.5",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "5.6 The Exponential Function",
            id: "5.6",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "5.7 Power Series ",
            id: "5.7",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "5.8 General Functions",
            id: "5.8",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "5.9 Some Applications ",
            id: "5.9",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "5.10 Integration by Parts",
            id: "5.10",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          }
        ]
      },

      {
        name: "6. Differential Equations",
        children: [
          {
            name: "6.1 Examples",
            id: "6.1",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "6.2 Solution Methods",
            id: "6.2",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "6.3 First-Order Linear Differential Equations",
            id: "6.3",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "6.4 Second-Order Linear Differential Equations",
            id: "6.4",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "6.5 Linear Differential Equation Systems",
            id: "6.5",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          }
        ]
      },
      {
        name: "7. Difference Equations",
        children: [
          {
            name: "7.1 Definition",
            id: "7.1",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          }
        ]
      },
      {
        name: "8. Optimization Theory",
        children: [
          {
            name: "8.1 Introduction",
            id: "8.1",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "8.2 The Mathematical Programming Problem",
            id: "8.2",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "8.3 Unconstrained Optimization",
            id: "8.3",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "8.4 Constrained Optimization",
            id: "8.4",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },

          {
            name: "8.5 The General Classical Program",
            id: "8.5",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          }
        ]
      },
      {
        name: "9. Linear Programming",
        children: [
          {
            name: "9.1 Introduction",
            id: "9.1",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "9.2 Formulation of the LP",
            id: "9.2",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "9.3 The Geometry of the LP",
            id: "9.3",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "9.4 The Simplex Method",
            id: "9.4",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },

          {
            name: "9.5 Examples",
            id: "9.5",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "9.6 The Dual Problem of the LP",
            id: "9.6",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "9.7 The Lagrangian Approach",
            id: "9.7",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
          },
          {
            name: "9.8 Economic Theory and Duality",
            id: "9.8",
            Component: App1,
            image:
              "https://storage.googleapis.com/fin-math-images/Power_Series_sine_05.gif",
            description:
              "What are vector components? How to Add and Subtract two Vectors? Several Examples provided"
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
