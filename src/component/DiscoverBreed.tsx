import axios from "axios";
import { useQuery } from "react-query";
import CatCard from "./CatCard";
import { Link } from "react-router-dom";
import LoaderBar from "./LoaderBar";
const DiscoverBreed = () => {
  const { data, isLoading } = useQuery("cats", () =>
    axios.get("https://api.thecatapi.com/v1/breeds") , 
     { cacheTime: 5 }
  );

  if (isLoading) {
    <LoaderBar />;
  }
  return (
    <div className="bg-basic-grey lg:p-32  p-10 rounded-b-3xl mx-10">
      <p className="text-basic-text font-medium text-lg ">
        Most Searched Breeds
      </p>
      <hr className="w-16 border-2 border-basic-text bg-basic-text mb-12"></hr>



      <div className="flex justify-between lg:flex-row flex-col">
        <h3 className="text-basic-text text-3xl lg:text-5xl font-bold leading-10 tracking-wide">
          66+ Breeds For you <br />
          to discover
        </h3>

        <Link to="/top10" className="font-bold text-lg mt-12">
          See more &#8594;
        </Link>
      </div>

      <CatCard data={data?.data}></CatCard>
    </div>
  );
};

export default DiscoverBreed;
