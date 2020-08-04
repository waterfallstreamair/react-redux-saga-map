import React, { useState, useEffect, useCallback } from "react";
import { connect } from "react-redux";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

import { getPoints } from "../../../actions/points.actions";
import { API_KEY } from "../../../config";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 51.5007,
  lng: 0.1246,
};

const Map = ({ getPoints }) => {
  const [map, setMap] = useState(null);

  const onLoad = useCallback((map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback((map) => {
    setMap(null);
  }, []);

  const onClick = (e) => {
    getPoints({
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    });
  };

  if (API_KEY === "") {
    return (
      <h2>You need to set Google API key in /config.js to run this app</h2>
    );
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        id="gm"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={onClick}
      >
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getPoints: (options) => {
    return dispatch(getPoints(options));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Map);
