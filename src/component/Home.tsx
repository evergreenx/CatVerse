import React from "react";
import DiscoverBreed from "./DiscoverBreed";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Why from "./Why";
const Home = () => {
  return (
    <div>
      <Header />

      <Hero />
      <DiscoverBreed />
      <Why />
      <Footer />
    </div>
  );
};

export default Home;
