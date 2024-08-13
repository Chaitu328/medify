import React, { useEffect, useState } from "react"
import NavBar from "../../Navabar/Navbar"
import BookingBar from "../../BookingBar/BookingBar"
import SearchBar from "../../SearchBar/SearchBar"
import styles from "./DoctorPage.module.css"
import { states, fetchStateAndCity, citiesInState } from "../../api/api"
import Card from "../../Card/Card"

function DoctorPage() {
    const [stateData, setStateData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [state, setState] = useState(""); // New state to store selected state
    const [cities, setCities] = useState([]);
    const stateAndCityInputs = [
        { id: 'state', name: 'state', placeholder: 'State' },
        { id: 'city', name: 'city', placeholder: 'City' }
    ]

    // To initialize state data 
    useEffect(() => {
        const fetchStateData = async () => {
            try {
                const data = await states();
                setStateData(data);
            } catch (err) {
                console.error("Error fetching data: ", err.message);
            }
        };

        fetchStateData();
    }, [])
    console.log(stateData)

    const handleSearch = async ({ state, city }) => {
        try {
            const response = await fetchStateAndCity(state, city);
            setSearchResults(response);
            setState(state);

            // Fetch the list of cities for the selected state
            const citiesResponse = await citiesInState(state);
            setCities(citiesResponse)

        } catch (error) {
            console.error("Error fetching search results: ", error);
        }
    };



    return (
        <div>
            <NavBar />
            <BookingBar />
            <div className={styles.section}>
                <SearchBar inputs={stateAndCityInputs} onSearch={handleSearch} />
            </div>
            <div style={{
                position: 'relative',
                top: '3rem',
                left: '6rem',
                marginTop: '8rem'
            }}>
                <h2> {cities.length} Medical centers avaible in {state}</h2>
                <p>Book appoitments with minimum</p>
            </div>


            {(searchResults.map((result, index) => (
                <div key={index}>
                    <Card
                        key={result['Provider ID']}
                        name={result['Hospital Name']}
                        address={result['Address']}
                        city={result['City']}
                        state={result['State']}
                        zip={result['ZIP Code']}
                        rating={result['Hospital overall rating']}
                    />
                </div>
            ))
            )}
        </div>
    )
}

export default DoctorPage