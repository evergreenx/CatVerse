import React, { useEffect } from "react";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
const DiscoverBreed = () => {
  // const queryClient = useQueryClient()

  const { data, isLoading } = useQuery("cats", () =>
    axios.get("https://api.thecatapi.com/v1/breeds")
  );

  console.log(data);

  return (
    <div className="bg-basic-grey lg:p-32  p-10 rounded-b-3xl">
      <p className="text-basic-text font-medium text-lg mb-12">
        Most Searched Breeds
        <hr className="w-16 border-2 border-basic-text bg-basic-text"></hr>
      </p>

      <div className="flex justify-between lg:flex-row flex-col">
        <h3 className="text-basic-text text-5xl font-bold leading-10 tracking-wide">
          66+ Breeds For you <br />
          to discover
        </h3>

        <a href="#/" className="font-bold text-lg mt-12">
          See more &#8594;
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8 m-12 ">
        {/* 
{isLoading ? 'Loading data' : 'loadede'} */}
        {data?.data.slice(0, 4).map((item: any) => {
          return (
            <div className="">
              <img
                src={item?.image?.url}
                alt="cats"
                className=" w-56 h-56 object-cover rounded-3xl"
              />
              <p className="mt-8 font-semibold text-basic-text">{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DiscoverBreed;
