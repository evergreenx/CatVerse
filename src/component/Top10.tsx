import React from "react";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import LoaderBar from "../component/LoaderBar";

import Header from "./Header";
const Top10 = () => {
  const { data, isLoading } = useQuery("cats", () =>
    axios.get("https://api.thecatapi.com/v1/breeds")
  );

  if (isLoading) {
    return <LoaderBar />;
  }

  return (
    <>
      <Header />
      <div className=" w-full h-full text-basic-text">
        <h2 className="font-bold text-4xl">Top 10 most searched breeds</h2>

        <div className="card_topten">
          <div className="card_topten_image"></div>

          <div className="card_topten_text">
            <ol className="card_topten_name">
              <li></li>
            </ol>

            <div className="card_topten__details"></div>
          </div>
        </div>

        {/* {JSON.stringify(data)} */}
      </div>
    </>
  );
};

export default Top10;
