import Navbar from "./Navbar";
import Sidebar1 from "./Sidebar1";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Food_card from "./Food_card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["Dashboard"],
    queryFn: async () => {
      try {
        const res = await axios.get(
          "/admin/dashboard",

          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(res.data);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    },
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  return (
    <div>
      <Navbar />

      <div className="container-fluid mb-5 pt-5 d-flex">
        <div className="row w-100 m-0 p-0">
          <div
            className="col-lg-2 p-0 m-0"
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              height: "100%",
              overflowY: "auto",
            }}
          >
            <Sidebar1 />
          </div>

          <div
            className="col-lg-9 offset-lg-2 mt-5"
            style={{ paddingLeft: "20px" }}
          >
            {/* <input type="text" placeholder="Type here" className="input input-bordered input-primary ml-5 w-full max-w-xl mt-4" /> */}

            <h4 className="text-center my-4">Guide Request Review</h4>
            <div className="flex  justify-center  ml-5 flex-wrap gap-3">
              {data.guides.map((s) => {
                return (
                  <div
                    className="flex w-100%  align-start gap-4 justify-between"
                    key={s._id}
                  >
                    <Card1
                      refetch={refetch}
                      service={"guide"}
                      id={s._id}
                      age={s.age}
                      contact={s.contactNo}
                      desc={s.description}
                      firstName={s.firstName}
                      lastName={s.lastName}
                      location={s.regionalLocation}
                      gender={s.gender}
                      email={s.email}
                      profileImg={s.profileImg}
                    />{" "}
                  </div>
                );
              })}
            </div>

            <h4 className="text-center my-4">Health Service Request </h4>
            <div className="flex  justify-center items-start  ml-5 flex-wrap gap-3">
              {data.healthService.map((s) => {
                return (
                  <div
                    className="flex w-100% align-start  gap-4 justify-between"
                    key={s._id}
                  >
                    <Card1
                      refetch={refetch}
                      service={"healthservice"}
                      id={s._id}
                      age={s.age}
                      contact={s.contactNo}
                      desc={s.description}
                      firstName={s.firstName}
                      lastName={s.lastName}
                      location={s.regionalLocation}
                      gender={s.gender}
                      email={s.email}
                      profileImg={s.profileImg}
                    />{" "}
                  </div>
                );
              })}
            </div>
            <h4 className="text-center my-4">Food And Lodge Request </h4>
            <div className="flex  justify-center  ml-5 flex-wrap gap-3">
              {data.foodandlodge.map((s) => {
                return (
                  <div
                    className="flex w-100%  gap-4 justify-between"
                    key={s._id}
                  >
                    <Card2
                      refetch={refetch}
                      service={"foodandlodge"}
                      id={s._id}
                      contactNo={s.contactNo}
                      desc={s.description}
                      country={s.country}
                      email={s.email}
                      name={s.name}
                      profileImg={s.profileImg}
                    />{" "}
                  </div>
                );
              })}
            </div>
            {/* * */}
            {/* <h4 className="ml-5 mt-5">Requested accomodation request</h4>
            <div className="ml-5  flex flex-wrap gap-2">
              <Card2 />
              <Card2 />
              <Card2 />
              <Card2 />
            </div>

            <h4 className="ml-5 mt-5">Requested restaurant request</h4>
            <div className="ml-5  flex flex-wrap gap-2">
              <Food_card />
              <Food_card />
              <Food_card />
              <Food_card />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
