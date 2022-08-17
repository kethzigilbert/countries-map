import { useLazyQuery, useQuery } from "@apollo/client";
import React, { memo, useState } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Sphere
} from "react-simple-maps";
import { GET_COUNTRIES, GET_COUNTRY_BY_CODE } from "../../api/CountryAPIs";

const MapChart = ({ setTooltipContent }) => {
    const [selectedCountryCode , setSelectedCountryCode] = useState(null)
  
    const [getCountryDetails ,{loading, error, data }]= useLazyQuery(GET_COUNTRY_BY_CODE);
    console.log("data", data)
  const handleCountryClick =async (code)=>{
    
    const selectedCountryCode = code.substring(0, 2)
    console.log("code" ,selectedCountryCode);
   const response = await getCountryDetails({
    variables : {code : selectedCountryCode}
})
   console.log("response " , response?.data?.country)
    setTooltipContent(selectedCountryCode);
  }
  return (
    <div >
      <ComposableMap projectionConfig={{
    scale: 147,
    
  }}  >
        {/* <ZoomableGroup> */}
        
        <Sphere stroke="grey" fill="#445b86" strokeWidth="1" />
        <Graticule stroke="#F53" strokeWidth={0.5} />
          <Geographies geography="/map-features.json">
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  stroke="#EAEAEC"
                  onMouseEnter={() => {
                    handleCountryClick(geo.id)
                    
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "#e2b48c",
                      outline: "none"
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    }
                  }}
                />
              ))
            }
          </Geographies>
        {/* </ZoomableGroup> */}
      </ComposableMap>
    </div>
  );
};

export default memo(MapChart);
