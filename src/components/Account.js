import React, { useContext } from "react";
import Signup from "./SignUp";
import Signin from "./SignIn";
import Home from "./Home";
import { firebaseAuth } from "../provider/AuthProvider";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function Account() {
  const { token, handleSignout, inputs } = useContext(firebaseAuth);
  console.log(token);
  const history = useHistory();

  return (
    <>
      <p>This is page to manage your Account </p>

      <Router>
        {token !== null ? (
          <>
            Currently Signed in As {inputs.email}
            <button onClick={handleSignout}>sign out </button>
            <button
              onClick={() => {
                history.push("/");
              }}
            >
              Go Back{" "}
            </button>
          </>
        ) : (
          <>
            <Signin />
            <br />
            <div>
              <Link to="/home/Account/Signup">New users Sign Up</Link>
            </div>
          </>
        )}

        {/* switch allows switching which components render.  */}
        <Switch>
          {/* <Route
            exact
            path="/home/Account"
            render={(rProps) => (token === null ? <Signin /> : <Home />)}
          /> */}
          {/* <Route exact path="/home/Account/Signin" component={Signin} /> */}
          {token === null ? (
            <Route path="/home/Account/Signup" component={Signup} />
          ) : (
            <> </>
          )}
        </Switch>
      </Router>
    </>
  );
}

export default Account;
