import React, { useState } from "react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import MapChart from "./map-chart";


const WorldMap = () => {
    const [content, setContent] = useState("");
    console.log("content" , content)
   
    return (
      <div>
        <MapChart setTooltipContent={setContent} />
        {/* <ReactTooltip>{content}</ReactTooltip>  */}
      </div>
    );
    }

export default WorldMap;