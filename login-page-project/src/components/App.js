import React from "react";
import Login from "./Login";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
      <Login conditional = {userIsRegistered}/>
    </div>
  );
}

export default App;
