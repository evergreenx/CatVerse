import React from 'react'

type catCardtype = {

    data: string[]

}


const CatCard = ({data } :catCardtype) => {
    return (
        <div className="flex justify-between lg:flex-row flex-col mt-12 items-center ">
        {/* 
{isLoading ? 'Loading data' : 'loadede'} */}
        {data?.slice(0, 4).map((item: any) => {
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
    )
}

export default CatCard
