
import React, { memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere,
  Marker
} from "react-simple-maps";


const MapChart = ({ handleCountryClick }) => {

  const geoUrl =
    "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";
  return (
    <div >
      <ComposableMap projectionConfig={{
        scale: 147,

      }}  >


        <Sphere stroke="grey" fill="#2f487b" strokeWidth={1} />

        <Graticule stroke="#e0e0e0" strokeWidth={0.5} />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                stroke="#EAEAEC"

                onClick={
                  () => {
                    handleCountryClick(geo.id)

                  }
                }
                style={{
                  default: {
                    fill: "#9f8681",
                    outline: "none"
                  },
                  hover: {
                    fill: "#F53",
                    outline: "none"
                  },
                }}
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[0, 0]}>

        </Marker>

      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
