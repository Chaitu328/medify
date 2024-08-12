import React, { useEffect, useState } from "react"
import NavBar from "../../Navabar/Navbar"
import BookingBar from "../../BookingBar/BookingBar"
import SearchBar from "../../SearchBar/SearchBar"
import styles from "./DoctorPage.module.css"
import { states, fetchStateAndCity } from "../../api/api"

function DoctorPage() {
    const [stateData, setStateData] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const stateAndCityInputs = [
        { id: 'state', name: 'state', placeholder: 'State' },
        { id: 'city', name: 'city', placeholder: 'City' }
    ]

    // To initialize data 
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
            {(
                searchResults.map((result, index) => (
                    <div key={index}>
                        {result['Hospital Name']}</div>
                ))
            )}
        </div>
    )
}

export default DoctorPage