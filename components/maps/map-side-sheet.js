
import React, { useMemo } from "react";
import { Alert, CircularProgress, Paper, Typography } from "@mui/material";

const MapSideSheet = (props) => {
    const { selectedCountry, loading = false, isError = false } = props

    const countryAttributesList = useMemo(() => {

        if (selectedCountry) {
            const { native, continent, code, currency, phone, capital, languages } = selectedCountry
            return ([
                {
                    label: 'Capital',
                    value: capital
                },
                {
                    label: 'Native Name',
                    value: native
                },
                {
                    label: 'Continent',
                    value: continent?.name || '-'
                }, {
                    label: 'Country Code',
                    value: code
                }, {
                    label: 'Currencies',
                    value: currency || ''
                },
                {
                    label: 'Languages',
                    value: languages?.map(each => each?.name)?.join(',') || ''
                },
                {
                    label: 'Phone Code',
                    value: phone
                },


            ])
        }
        else
            return [];

    }, [selectedCountry])


    const countryAttributes = useMemo(() => {
        return (
            <div className='d-flex mt-5 flex-row flex-wrap'>
                {countryAttributesList?.map((each) =>
                    <div key={each?.label} className="col-12 flex-row d-flex align-items-start">
                        <Typography variant="subtitle1" style={{ fontWeight: '550' }} className="me-2 col-6" color="text.secondary">
                            {each?.label}{': '}
                        </Typography>
                        <Typography variant="subtitle1" className="col-6 text-wrap" color="text.secondary">
                            {each?.value}
                        </Typography>
                    </div>
                )
                }

            </div>
        )
    }, [countryAttributesList])

    const showError = useMemo(() => !loading && isError, [loading, isError])
    const showSelectText = useMemo(() => !loading && !isError && selectedCountry === null, [loading, isError, selectedCountry])
    const showCountryDetails = useMemo(() => !loading && selectedCountry && !!Object.keys(selectedCountry).length && !isError, [isError, loading, selectedCountry])
    return (


        <Paper elevation={24} className="col-3 p-4">
            {loading && <div className="d-flex flex-row justify-content-center"><CircularProgress /> </div>}
            {showError && <Alert severity="error">Unable to retrieve the information of the selected Country. Please try again later.</Alert>}
            {showSelectText && <Typography variant="caption" style={{ fontWeight: 500 }} color="text.secondary">Please select a country on the map to view its information.</Typography>}
            {showCountryDetails &&
                <div className="d-flex flex-column">
                    <Typography variant="h5" style={{ fontWeight: 600 }} color="text.secondary" >{selectedCountry.name}</Typography>
                    <Typography variant="caption" color="text.secondary" className="border-bottom pb-3">Capital: {selectedCountry.capital}</Typography>
                    {countryAttributes}
                </div>

            }


        </Paper>


    )
}

export default MapSideSheet;