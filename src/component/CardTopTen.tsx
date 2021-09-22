import React from "react";

type cardToptenTypes = {
  data: string[];
};
const CardTopTen = ({ data }: cardToptenTypes) => {
  return (
    <div className="card_topten flex">
      <div className="card_topten_image"></div>

      <div className="card_topten_text">
        <ol className="card_topten_name  font-semibold text-4xl">
          <li></li>
        </ol>

        <div className="card_topten__details font-medium text-lg"></div>
      </div>
    </div>
  );
};

export default CardTopTen;
