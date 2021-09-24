import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import LoaderBar from "./LoaderBar";
import Header from "./Header";
import Footer from "./Footer";
import CatGrid from "./CatGrid";
import CatThumbNail from "./CatThumbNail";

const CatDetails = () => {
  let { id } = useParams<{ id: string }>();
  const { data: catdetails, status: catStatus } = useQuery(
    "catdetails",
    () => axios.get(`https://api.thecatapi.com/v1/breeds/search?q=${id}`),

    { cacheTime: 5 }
  );

  let catId = catdetails?.data?.map((i: any) => i.id);

  if (catStatus === "loading") {
    return <LoaderBar />;
  }
  return (
    <>
      <Header />
      <div className="h-full mb-24 px-10 ">
        {catdetails?.data.map((i: any) => (
          <div
            className=" text-basic-text flex lg:flex-row flex-col items-center"
            key={i.id}
          >
            <div className="cat-image mr-28">
              <CatThumbNail breedid={catId} />
            </div>
            <div className="cat-full-details w-full mt-20">
              <h2 className="cat_name font-semibold text-4xl">{i.name}</h2>
              <p className="font-medium text-lg">{i.description}</p>
              <p className="lg:items-center">
                {" "}
                <span className="text-base font-bold">Temperatment</span> :{" "}
                {i.temperament}
              </p>
              <p className="flex lg:items-center ">
                {" "}
                <span className="text-base font-bold">Origin</span> : {i.origin}
              </p>
              <p className="lg:items-center">
                {" "}
                <span className="text-base font-bold">Life Span</span> :{" "}
                {i.life_span} years
              </p>
              <p className="flex lg:items-center lg:flex-row flex-col">
                {" "}
                <span className="text-base lg:items-center font-bold w-48">Adaptability:</span>
                {i.adaptability === 5 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                  </span>
                ) : i.adaptability === 4 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.adaptability === 3 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.adaptability === 2 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                )}
              </p>
              <p className="flex lg:items-center lg:flex-row flex-col">
                {" "}
                <span className="text-base font-bold w-48">
                  Affection level:
                </span>{" "}
                {}
                {i.affection_level === 5 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                  </span>
                ) : i.affection_level === 4 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.affection_level === 3 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.affection_level === 2 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                )}
              </p>
              <p className="flex lg:items-center lg:flex-row flex-col">
                {" "}
                <span className="text-base font-bold w-48">
                  Child Friendly:
                </span>{" "}
                {}
                {i.child_friendly === 5 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                  </span>
                ) : i.child_friendly === 4 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.child_friendly === 3 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.child_friendly === 2 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                )}
              </p>
              <p className="flex lg:items-center  lg:flex-row flex-col">
                {" "}
                <span className="text-base font-bold w-48">Grooming:</span> {}
                {i.grooming === 5 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                  </span>
                ) : i.grooming === 4 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.grooming === 3 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.grooming === 2 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                )}
              </p>
              <p className="flex lg:items-center  lg:flex-row flex-col">
                {" "}
                <span className="text-base font-bold w-48">
                  Intelligence:
                </span>{" "}
                {}
                {i.intelligence === 5 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                  </span>
                ) : i.intelligence === 4 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.intelligence === 3 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.intelligence === 2 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                )}
              </p>
              <p className="flex lg:items-center  lg:flex-row flex-col">
                {" "}
                <span className="text-base font-bold w-48">
                  Health issues:
                </span>{" "}
                {}
                {i.health_issues === 5 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                  </span>
                ) : i.health_issues === 4 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.health_issues === 3 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.health_issues === 2 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                )}
              </p>
              <p className="flex lg:items-center  lg:flex-row flex-col">
                {" "}
                <span className="text-base font-bold w-48">
                  Social needs:
                </span>{" "}
                {}
                {i.social_needs === 5 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                  </span>
                ) : i.social_needs === 4 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.social_needs === 3 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.social_needs === 2 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                )}
              </p>
              <p className="flex lg:items-center  lg:flex-row flex-col">
                {" "}
                <span className="text-base font-bold w-48">
                  Stranger friendly:
                </span>{" "}
                {}
                {i.stranger_friendly === 5 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                  </span>
                ) : i.stranger_friendly === 4 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.stranger_friendly === 3 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : i.stranger_friendly === 2 ? (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                ) : (
                  <span className="flex">
                    <span className="pill rounded-full mx-6 bg-basic-text w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>

                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                    <span className="pill rounded-full mx-6 bg-empty w-14 h-3"></span>
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}

        <CatGrid breedid={catId} />
      </div>

      <Footer />
    </>
  );
};

export default CatDetails;
