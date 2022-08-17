import { Box } from "@mui/material";
import React, { useState } from "react";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import MapChart from "./map-chart";


const WorldMap = () => {
    const [content, setContent] = useState("");
    console.log("content" , content)
   
    return (
      <Box style={{backgroundColor : '#010101'}}>
      <div className="d-flex flex-row">
        <Box style={{backgroundColor:"#202124" }} className="col-3"></Box>
        <div className="col-9">
        <MapChart setTooltipContent={setContent} />
        </div>
        {/* <ReactTooltip>{content}</ReactTooltip>  */}
      </div>
      </Box>
    );
    }

export default WorldMap;