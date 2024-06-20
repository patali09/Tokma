import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Food_card from "./Food_card";

export default function Home() {
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
            <Sidebar />
          </div>

          <div
            className="col-lg-9 offset-lg-2 mt-5"
            style={{ paddingLeft: "20px" }}
          >
            <h4 className="ml-5">Guide Request Review</h4>
            <div className="flex ml-5 flex-wrap gap-3">
              <Card1 />
              <Card1 />
              <Card1 />
              <Card1 />
            </div>

            <h4 className="ml-5 mt-5">Requested accomodation request</h4>
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
            </div>
          </div>

          {/* <div className="col-lg-9 offset-lg-2 mt-5" style={{ paddingLeft: '20px' }}>
                        <h3>Popular resort</h3>
                        <div className="flex flex-wrap  ml-2 mt-3 gap-3">
                            <2
                                source={h1}
                                name="Namaste Community Foundation"
                                des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                            />
                            <2
                                source={h1}
                                name="Vocational and Skill Development Training Center"
                                des="Vocational and Skill Development Training Center (VSDTC), Gandaki Province (व्यावसायिक तथा सिप विकास तालीम केन्द्र, गण्डकी प्रदेश): A Vocational Training Center was established in Biratnagar in the year 2016 with the aim of solving the country's unemployment problem."
                            />
                            <2
                                source={h1}
                                name="Namaste Community Foundation"
                                des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                            />
                        </div>
                    </div>









                    <div className="col-lg-9 offset-lg-2 mt-5" style={{ paddingLeft: '20px' }}>
                        <h3>Popular resort</h3>
                        <div className="flex flex-wrap  ml-2 mt-3 gap-3">
                            <2
                                source={h1}
                                name="Namaste Community Foundation"
                                des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                            />
                            <2
                                source={h1}
                                name="Vocational and Skill Development Training Center"
                                des="Vocational and Skill Development Training Center (VSDTC), Gandaki Province (व्यावसायिक तथा सिप विकास तालीम केन्द्र, गण्डकी प्रदेश): A Vocational Training Center was established in Biratnagar in the year 2016 with the aim of solving the country's unemployment problem."
                            />
                            <2
                                source={h1}
                                name="Namaste Community Foundation"
                                des="Namaste Community Foundation (NFC-Nepal) is a not-for-profit, non- people from around the world to get involved in social work."
                            />
                        </div>
                    </div>




                    <- this is for the accept and deny wala->
 */}
        </div>
      </div>
    </div>
  );
}
