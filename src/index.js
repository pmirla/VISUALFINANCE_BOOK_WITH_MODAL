/**
  This CodeSandbox has been automatically generated using
  `codesandboxer`. If you're curious how that happened, you can
  check out our docs here: https://github.com/codesandbox/codesandboxer

  If you experience any struggles with this sandbox, please raise an issue
  on github. :)
*/
import React from "react";
import ReactDOM from "react-dom";
import MathApp from "./math";
import AuthProvider from "./provider/AuthProvider";

ReactDOM.render(
  [
    <>
      <AuthProvider>
        <MathApp />
      </AuthProvider>
    </>
  ],
  document.getElementById("root")
);
