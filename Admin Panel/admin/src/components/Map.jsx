import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import toast from "react-hot-toast";
import locate from "../images/locate.svg";
const Map = ({ setChanged, tracker, setTracker }) => {
  console.log(tracker);
  const AnyReactComponent = () => (
    <div>
      hello
      {/* <img src={locate} /> */}
    </div>
  );
  const defaultProps = {
    center: {
      lat: 28.211033,
      lng: 83.976961,
    },
    zoom: 18,
  };

  return (
    // Important! Always set the container height explicitly
    <div className="flex my-12 justify-center">
      <div style={{ height: "60vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
          yesIWantToUseGoogleMapApiInternals
          onClick={(e) => {
            console.log(e);
            setTracker({ lat: e.lat, lon: e.lng });
            setChanged(true);
            toast.success("Location Saved");
            console.log(e.lat);
            console.log(e.lng);
          }}
          // </div>
        >
          <AnyReactComponent lat={locate.lat} lng={locate.lng} />
          {/* <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
