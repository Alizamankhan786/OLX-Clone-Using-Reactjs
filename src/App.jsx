import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Mobiles from "./components/Mobiles";
import Bikes from "./components/Bikes";
import Houses from "./components/Houses";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Mobiles />
      <Bikes />
      <Houses />
    </div>
  );
}

export default App;