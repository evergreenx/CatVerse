import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import LoaderBar from "../component/LoaderBar";

import Header from "./Header";
import CardTopTen from "./CardTopTen";
import Footer from "./Footer";
const Top10 = () => {
  const { data, isLoading } = useQuery("catstopten", () =>
    axios.get("https://api.thecatapi.com/v1/breeds")
  );

  console.log(data);
  if (isLoading) {
    return <LoaderBar />;
  }

  return (
    <>
      <Header />
      <div className=" w-full h-full text-basic-text container">
        <h2 className="font-bold text-4xl">Top 10 most searched breeds</h2>

        {data?.data.slice(0, 10).map((i: any) => {
          return <CardTopTen data={i}  />;
        })}
      </div>

      <Footer />
    </>
  );
};

export default Top10;
