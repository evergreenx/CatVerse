import React from "react";
import axios from "axios";
import {
  useQuery,

} from "react-query";
import LoaderBar from "../component/LoaderBar";

import Header from "./Header";
const Top10 = () => {
  const { data, isLoading } = useQuery("cats", () =>
    axios.get("https://api.thecatapi.com/v1/breeds")
  );

  console.log(data);
  if (isLoading) {
    return <LoaderBar />;
  }

  return (
    <>
      <Header />
      <div className=" w-full h-full text-basic-text">
        <h2 className="font-bold text-4xl">Top 10 most searched breeds</h2>

       

      </div>
    </>
  );
};

export default Top10;
