import React from "react";
import Collection from "./Components/Collection/Collection";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import SideBar from "./Components/SideBar/SideBar";

const App = () => {
  return (
    <div>
      <SideBar/>
      <NavigationBar />
      <Home />
      <Collection />
      <Footer />
    </div>
  );
};

export default App;
