import React from "react";
import { Link } from "react-router-dom";

type cardToptenTypes = {
  data: any;
};
const CardTopTen = ({ data }: cardToptenTypes) => {

  return (
    <>
      <div className="card_topten flex-wrap  mx-12 flex my-20 flex-col lg:flex-row ">
        <div className="card_topten_image  ">
          <img
            src={data?.image?.url}
            className="rounded-3xl w-64 h-64 object-cover"
            alt="cat"
          />
        </div>

        <div className="card_topten_text w-full mt-12 ">
          <p className="card_topten_name  font-semibold text-3xl ">
            <Link
              to={{
                // eslint-disable-next-line no-useless-concat
                pathname: "/cat/" + `${data.name}/`,
              }}
            >
              {data?.name}
            </Link>
          </p>

          <div className="card_topten__description font-medium text-lg w-full">
            {data.description}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardTopTen;
