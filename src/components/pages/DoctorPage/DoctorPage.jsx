import React from "react"
import NavBar from "../../Navabar/Navbar"
import BookingBar from "../../BookingBar/BookingBar"
import SearchBar from "../../SearchBar/SearchBar"
import styles from "./DoctorPage.module.css"

function DoctorPage() {
    const stateAndCityInputs = [
        { id: 'state', name: 'state', placeholder: 'State' },
        { id: 'city', name: 'city', placeholder: 'City' }
    ]
    return (
        <div>
            <NavBar />
            <BookingBar />
            <div className={styles.section}>
                <SearchBar inputs={stateAndCityInputs} />
            </div>
        </div>
    )
}

export default DoctorPage