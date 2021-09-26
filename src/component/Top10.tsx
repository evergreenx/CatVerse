import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import LoaderBar from "../component/LoaderBar";

import Header from "./Header";
import CardTopTen from "./CardTopTen";
import Footer from "./Footer";
const Top10 = () => {
  const { data, isLoading } = useQuery("catstopten", () =>
    axios.get("https://api.thecatapi.com/v1/breeds") , 
     { cacheTime: 5 }
  );

  if (isLoading) {
    return <LoaderBar />;
  }

  return (
    <>
      <Header />
      <div className="text-basic-text">
        <h2 className="font-bold text-3xl mx-10">Top 10 most searched breeds</h2>

        {data?.data.slice(0, 10).map((i: any) => {
          return <CardTopTen data={i} key={i.id} />;
        })}
      </div>

      <Footer />
    </>
  );
};

export default Top10;
