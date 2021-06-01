import React from "react";
import Collection from "./Components/Collection/Collection";
import Home from "./Components/Home/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Home/>
      <Collection/>
    </div>
  );
};

export default App;
