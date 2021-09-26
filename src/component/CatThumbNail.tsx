import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

type CatThumbNailTypes = {
  breedid: any;
};
const CatThumbNail = ({ breedid }: CatThumbNailTypes) => {
  const { data } = useQuery(
    "catimages",
    () =>
      axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${breedid}`
      ),

    { cacheTime: 5 }
  );

  return (
    <div className="mt-20 w-full h-full">
      <div className="">
        {data?.data?.slice(0, 1).map((i: any) => (
          <div className="w-full" key={i.id}>
            <img
              src={i.url}
              alt="cats"
              className="rounded-3xl w-80"
              width="100"
              height="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatThumbNail;
