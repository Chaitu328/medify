import React, { useEffect, useState } from "react"
import NavBar from "../../Navabar/Navbar"
import BookingBar from "../../BookingBar/BookingBar"
import SearchBar from "../../SearchBar/SearchBar"
import styles from "./DoctorPage.module.css"
import { states, fetchStateAndCity, citiesInState } from "../../api/api"
import Card from "../../Card/Card"
import Footer from "../../Footer/Footer"


function DoctorPage() {
    const [stateData, setStateData] = useState([]);
    const [cities, setCities] = useState([]);
    const [cityResults, setCityResults] = useState({});
    const [state, setState] = useState(""); // State to store selected state
    const stateAndCityInputs = [
        { id: 'state', name: 'state', placeholder: 'State' },
        { id: 'city', name: 'city', placeholder: 'City' }
    ];

    const [showCard, setShowCard] = useState(false)

    // Pagination State
    const [currentPage, setCurrentPage] = useState(1);
    const maxRecords = 5; // Number of records per page


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
    }, []);
    console.log(stateData);

    const handleSearch = async ({ state, city }) => {
        try {
            // Set the selected state
            setState(state);
            setShowCard(true)
            // Fetch the list of cities for the selected state
            const citiesResponse = await citiesInState(state);
            setCities(citiesResponse);

            // Fetch medical centers for each city
            const cityResultsMap = await Promise.all(
                citiesResponse.map(async (city) => {
                    const results = await fetchStateAndCity(state, city);
                    return { city, results };
                })
            );

            // Convert array to object for easier access
            const cityResultsObject = cityResultsMap.reduce((acc, { city, results }) => {
                acc[city] = results;
                return acc;
            }, {});

            setCityResults(cityResultsObject);

            setCurrentPage(1); // Reset to first page after new search


        } catch (error) {
            console.error("Error fetching search results: ", error);
        }
    };

    // Pagination Logic
    const totalPages = Math.ceil(cities.length / maxRecords);

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    // Slice data for current page
    const slicedCities = cities.slice((currentPage - 1) * maxRecords, currentPage * maxRecords);


    return (
        <div>
            <NavBar />
            <BookingBar />
            <div className={styles.section}>
                <SearchBar inputs={stateAndCityInputs} onSearch={handleSearch} />
            </div>
            {showCard && (
                <div style={{
                    position: 'relative',
                    top: '3rem',
                    left: '6rem',
                    marginTop: '8rem'
                }}>
                    <h2>{cities.length} Medical centers available in {state}</h2>
                    <p>Book appointments with minimal wait times</p>
                </div>
            )}

            {/* Render cards for each city */}
            {slicedCities.map(city => (
                <div key={city}>
                    {cityResults[city]?.map((result, index) => (
                        <Card
                            key={index}
                            name={result['Hospital Name']}
                            address={result['Address']}
                            city={result['City']}
                            state={result['State']}
                            zip={result['ZIP Code']}
                            rating={result['Hospital overall rating']}
                        />
                    ))}
                </div>
            ))}

            {cities.length > maxRecords && (
                <div className={styles.paginationControls}>
                    <button onClick={handlePrev} disabled={currentPage === 1}>
                        Previous
                    </button>
                    <p>{currentPage} of {totalPages}</p>
                    <button onClick={handleNext} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </div>
            )}
            <div style={{
                marginTop: '5rem'
            }}>
            <Footer/>
            </div>
            
        </div>
    );
}

export default DoctorPage