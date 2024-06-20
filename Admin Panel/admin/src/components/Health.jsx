import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Map from "./Map";
const Health = () => {
  const [tracker, setTracker] = useState({
    lat: 59.955413,
    lon: 30.337844,
  });
  const [changed, setChanged] = useState(false);
  const [radio, setRadio] = useState(false);

  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["healthDashboard"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          "/healthservice/dashboard",

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(res.data);
        setRadio(res.data.healthservice[0].isAvailable);
        return res.data.healthservice[0];
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  });
  console.log("data", data);
  console.log(tracker);
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  console.log(data?.geoLocation);
  return (
    <div>
      <div className="flex w-full justify-center">
        <div className="card w-96  bg-base-100 shadow-xl">
          <figure className="px-10 pt-10 object-contain">
            <img
              src={data?.profileImg}
              alt="Shoes"
              className="rounded-xl h-80 object-contain"
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
              <span className="font-bold">Regional Location</span>{" "}
              {data?.regionalLocation}
            </p>
            <p>
              <span className="font-bold">Description </span>

              {data?.description}
            </p>
          </div>
        </div>
      </div>
      <Map setChanged={setChanged} tracker={tracker} setTracker={setTracker} />
      {data?.isAvailable && (
        <div className="flex justify-center mb-4">
          {/* <label className="inline-flex items-center cursor-pointer"> */}
          <button
            type="button"
            className="bg-red-500 red:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none"
            // className="sr-only "
            onClick={async () => {
              try {
                const res = await axios.post(
                  "/healthservice/update-availability",
                  {
                    lat: data.geoLocation.coordinates[1],
                    lon: data.geoLocation.coordinates[0],
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );
                console.log(res.data);
                refetch();
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Disable
          </button>
          {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Toggle me
            </span> */}
          {/* </label> */}
        </div>
      )}
      {data?.isAvailable == false && changed && (
        <div className="flex justify-center mb-4">
          {/* <label className="inline-flex items-center cursor-pointer"> */}
          <button
            // type="button"
            // value={radio}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none"
            // className="sr-only peer"
            onClick={async () => {
              try {
                const res = await axios.post(
                  "/healthservice/update-availability",
                  {
                    lat: tracker.lat,
                    lon: tracker.lon,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );
                console.log(res.data);
                refetch();
              } catch (err) {
                console.log(err);
              }
            }}
          >
            Enable
          </button>
          {/* <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Toggle me
            </span>
          </label> */}
        </div>
      )}
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

export default Health;
