import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
const Food = () => {
  const [isLoad, setIsload] = useState(false);

  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["foodandlodge"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          "/foodandlodge/dashboard",

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        return res.data.guide;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  });
  console.log(data);
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  return (
    <div>
      <div className="flex w-full my-4 justify-center">
        <div className="card w-96  bg-base-100 shadow-xl">
          <figure className="p-10 pt-10 object-contain">
            <img
              src={data?.profileImg}
              alt="Shoes"
              className="rounded-xl h-80 object-contain p-2 "
            />
          </figure>
          <div className="card-body items-start text-center">
            <p>
              {" "}
              <span className="font-bold">Name</span> {data?.name}
            </p>
            <p>
              <span className="font-bold">Email</span> {data?.email}
            </p>
            <p>
              <span className="font-bold">Contact Number </span>

              {data?.contactNo}
            </p>

            <p>
              <span className="font-bold">Country</span> {data?.country}
            </p>
            <p>
              <span className="font-bold">Description </span>

              {data?.description}
            </p>
            <div className="flex justify-center ">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none"
                disabled={isLoading}
                onClick={async () => {
                  try {
                    setIsload(true);

                    const res = await axios.get(
                      "/foodandlodge/update-availability",
                      {
                        headers: {
                          Authorization: `Bearer ${localStorage.getItem(
                            "token"
                          )}`,
                        },
                      }
                    );
                    toast.success("Changed !!");
                    setIsload(false);
                    refetch();
                    return res.data.guide;
                  } catch (err) {
                    toast.error("Problem !!");

                    setIsload(false);
                    console.log(err);
                    return err;
                  }
                }}
              >
                {data?.isAvailable
                  ? "Turn Off Availablity"
                  : "Turn On Availablity"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex w-full justify-center">

    //   <div className="flex flex-col">
    //     <p>Name {data.name}</p>
    //     <p>{data.email}</p>
    //     <p>{data.contactNo}</p>
    //     <p>{data.regionalLocation}</p>
    //     <p>{data.description}</p>
    //   </div>
    // </div>
  );
};

export default Food;
