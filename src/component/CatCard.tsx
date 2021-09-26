import { Link } from "react-router-dom";

type catCardtype = {
  data: string[];
};

const CatCard = ({ data }: catCardtype) => {
  return (
    <div className="flex justify-between lg:flex-row flex-col mt-12 items-center ">
      {/* 
{isLoading ? 'Loading data' : 'loadede'} */}
      {data?.slice(0, 4).map((item: any) => {
        return (
          <div className="" key={item.id}>
            <img
              src={item?.image?.url}
              alt="cats"
              className=" w-56 h-56 object-cover rounded-3xl"
              width="100"
              height="100"
            />

            <Link
              to={{
                // eslint-disable-next-line no-useless-concat
                pathname: "/cat/" + `${item.name}/`,
              }}
            >
              <p className="my-8 font-semibold text-basic-text">{item.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CatCard;
