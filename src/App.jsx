import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Mobiles from "./components/Mobiles";
import Bikes from "./components/Bikes";
import Houses from "./components/Houses";
import Cars from "./components/Cars";
import Videos from "./components/Videos";
import Tablets from "./components/Tablets";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      <Mobiles />
      <Bikes />
      <Houses />
      <Cars />
      <Videos />
      <Tablets />
    </div>
  );
}

export default App;