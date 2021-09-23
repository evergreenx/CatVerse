import React from "react";
import { Link } from "react-router-dom";

type cardToptenTypes = {
  data: any;
};
const CardTopTen = ({ data }: cardToptenTypes) => {
  console.log(data, "rgecr");
  return (
    <>
      <div className="card_topten justify-center flex my-20 flex-col lg:flex-row items-center content-center ">
        <div className="card_topten_image w-96 mx-auto self-center">
          <img
            src={data?.image?.url}
            className="rounded-3xl w-64 h-72 object-cover "
            alt="cat"
          />
        </div>

        <div className="card_topten_text w-full mt-12 ">
          <p className="card_topten_name  font-semibold text-4xl list-disc">
            
              <Link
                to={{
                  // eslint-disable-next-line no-useless-concat
                  pathname: "/cat/" + `${data.name}/`,
                }}
              >
                {data?.name}
              </Link>
            
          </p>

          <div className="card_topten__description font-medium text-lg">
            {data.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTopTen;
