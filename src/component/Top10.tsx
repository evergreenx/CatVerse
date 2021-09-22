import React from "react";
import axios from "axios";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query"

import Loader from '../assets/image/loader.gif'
const Top10 = () => {

  const { data, isLoading } = useQuery("cats", () =>
  axios.get("https://api.thecatapi.com/v1/breeds")
);


if(!isLoading) {


  return(

    <div className="flex justify-center items-center w-full">

      <img src={Loader} alt="loader" />
    </div>



  )
}







  return (
    <div className="bg-yellow-700 w-full h-full text-white">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ad mollitia
      fuga quos quae, quasi consequuntur vel nihil ipsam consequatur est quis
      laboriosam at excepturi! Necessitatibus placeat consequatur corporis
      saepe!

{JSON.stringify(data)}

    </div>
  );
};

export default Top10;
