import React from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
export default function Card1({
  age,
  contact,
  desc,
  firstName,
  lastName,
  location,
  gender,
  email,
  id,
  service,
  refetch,
  profileImg,
}) {
  return (
    <div className="card  w-96 bg-gray-100 text-neutral-content">
      <figure className="pt-2 ">
        <img
          src={profileImg}
          alt="Shoes"
          className="rounded-xl object-contain w-full  aspect-video"
        />
      </figure>
      <div className="card-body ">
        {/* <h2 className="card-title">Cookies!</h2> */}

        <p className="m-0">
          {firstName} {lastName}
        </p>
        <p className="m-0">{email}</p>
        <p className="m-0">{gender}</p>
        <p className="m-0">{contact}</p>
        <p className="m-0">{age}</p>
        <p className="m-0">{location}</p>
        <p className="m-0">{desc}</p>

        <div className="card-actions">
          <button
            className="btn btn-primary hover:bg-blue-500"
            onClick={async () => {
              try {
                const res = await axios.get(
                  "/admin/" + "approve-" + service + "/" + id,
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );
                toast.success("Approved");
                refetch();
                console.log(res.data);
              } catch (err) {
                toast.error("Dissaproved");

                console.log(err);
              }
            }}
          >
            Accept
          </button>
          <button
            className="btn btn-ghost hover:bg-blue-500 hover:text-white"
            onClick={async () => {
              try {
                const res = await axios.get(
                  "/admin/" + "reject-" + service + "/" + id,
                  {
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem("token")}`,
                    },
                  }
                );
                toast.success("Rejected");
                refetch();
                console.log(res.data);
              } catch (err) {
                toast.error("Not Rejected");

                console.log(err);
              }
            }}
          >
            Deny
          </button>
        </div>
      </div>
    </div>
  );
}
