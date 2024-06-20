import "./App.css";
import Health_services from "./components/Health_services";
import Guide from "./components/Guide";
import Accomodation from "./components/Accomodation";
import Home1 from "./components/Home1";
import Rules from "../src/components/Rules";
import Activites from "./components/Activites";
import Admin from "./components/Admin";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Health from "./components/Health";
import FoodAndLodge from "./components/FoodAndLodge";
import Food from "./components/Food";
function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/admin" element={<Home1 />} />
          <Route path="healthservice" element={<Health_services />} />
          <Route path="guides" element={<Guide />} />
          <Route path="accomodation" element={<Accomodation />} />
          <Route path="foodandlodge" element={<FoodAndLodge />} />
          <Route path="rules" element={<Rules />} />
          <Route path="activity" element={<Activites />} />
          <Route path="/food" element={<Food />} />
          <Route path="admin" element={<Admin />} />
          <Route path="health" element={<Health />} />
        </Routes>
      </BrowserRouter>

      {/*       


      <div className='container-fluid'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 bg-red-200'>Hello1</div>
            <div className='col-lg-9 bg-gray-700' >Hello2</div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default App;
