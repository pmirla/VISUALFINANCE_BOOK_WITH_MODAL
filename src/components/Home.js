import React, { useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";

const Home = (props) => {
  const { handleSignout, inputs } = useContext(firebaseAuth);
  return (
    <div>
      Currently Signed in As {inputs.email}
      <button onClick={handleSignout}>sign out </button>
    </div>
  );
};

export default Home;
