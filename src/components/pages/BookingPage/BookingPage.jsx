import NavBar from "../../Navabar/Navbar"
import BookingBar from "../../BookingBar/BookingBar"
import SearchBar from "../../SearchBar/SearchBar"
import CardForBooking from "../../Card/CardForBooking";
import React, { useState, useEffect } from "react";
import styles from "./BookingPage.module.css"
import Footer from "../../Footer/Footer";


function BookingsPage() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const storedBookings = JSON.parse(localStorage.getItem("selectedSlots")) || [];
        setBookings(storedBookings);
    }, []);

    const hospitalSearchBar = [
        { id: 'hospital', name: 'hospital', placeholder: 'Search By Hospital' }
    ];

    return (
        <div>
            <NavBar />
            <BookingBar />
            <div className={styles.SearchBar}>
                <SearchBar inputs={hospitalSearchBar} />
            </div>
            
            <div>
                {bookings.map((booking, index) => (
                    <CardForBooking
                        key={index}
                        name={booking.name}
                        address={booking.address}
                        city={booking.city}
                        state={booking.state}
                        zip={booking.zip}
                        rating={booking.rating}
                        date={booking.date}
                        time={booking.time}
                    />
                ))}
            </div>
            <div style={{
                marginTop: '5rem'
            }}>
            <Footer/>
            </div>
        </div>
    );
}

export default BookingsPage;