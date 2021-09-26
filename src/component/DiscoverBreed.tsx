import axios from "axios";
import { useQuery } from "react-query";
import CatCard from "./CatCard";
import { Link } from "react-router-dom";
import LoaderBar from "./LoaderBar";
import img1 from "../assets/image/cat1.webp";
import img2 from "../assets/image/cat2.webp";
import img3 from "../assets/image/cat3.webp";
import img4 from "../assets/image/cat4.webp";

const DiscoverBreed = () => {
  const { data, isLoading } = useQuery(
    "cats",
    () => axios.get("https://api.thecatapi.com/v1/breeds"),
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

      <div className="flex justify-between lg:flex-row flex-col mt-12 items-center ">
        <CatCard data={data?.data.slice(0, 1)} url={img1}></CatCard>
        <CatCard data={data?.data.slice(1, 2)} url={img2}></CatCard>
        <CatCard data={data?.data.slice(2, 3)} url={img3}></CatCard>
        <CatCard data={data?.data.slice(3, 4)} url={img4}></CatCard>
      </div>
    </div>
  );
};

export default DiscoverBreed;
