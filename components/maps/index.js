
import React, { useState } from "react";
import MapChart from "./map-chart";
import { useLazyQuery } from "@apollo/client";

import { GET_COUNTRY_BY_CODE } from "../../api/CountryAPIs";
import MapSideSheet from './map-side-sheet'
const WorldMap = () => {
  const [selectedCountry, setSelectedCountry] = useState(null)

  const [getCountryDetails, { loading, error, data }] = useLazyQuery(GET_COUNTRY_BY_CODE);
  const handleCountryClick = async (code) => {

    const selectedCountryCode = code.substring(0, 2)
    const response = await getCountryDetails({
      variables: { code: selectedCountryCode }
    })
    setSelectedCountry(response?.data?.country ?? {});
  }
  return (

    <div className="d-flex flex-row">
      <MapSideSheet selectedCountry={selectedCountry} isError={error} loading={loading} />
      <div className="col-9">
        <MapChart handleCountryClick={handleCountryClick} />
      </div>
    </div>

  );
}

export default WorldMap;