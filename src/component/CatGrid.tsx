import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

type CatGridTypes = {
  breedid: any;
};
const CatGrid = ({ breedid }: CatGridTypes) => {
  const { data } = useQuery(
    "catimages",
    () =>
      axios.get(
        `https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${breedid}`
      ),

    { cacheTime: 5 }
  );

  return (
    <div className="mt-20 ">
      <h2 className="font-semibold text-4xl mb-9">Other Photos</h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {data?.data?.map((i: any) => (
          <div className="w-72 h-72" key={i.id}>
            <img
              src={i.url}
              alt="cats"
              className="object-cover w-72  h-52 rounded-3xl"
              width="100"
              height="100"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatGrid;
