import React, { useState } from "react";
import styles from "./slots.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

// Function to generate date strings
function generateDate(offset) {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return date.toISOString().split("T")[0]; // Returns date in YYYY-MM-DD format
}

// Function to format date strings for display
function formatDate(dateStr) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const dateObj = new Date(dateStr);

    if (dateObj.toDateString() === today.toDateString()) return "Today";
    if (dateObj.toDateString() === tomorrow.toDateString()) return "Tomorrow";
    return dateObj.toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
        weekday: "long",
    });
}

function Slots({ name, address, city, state, zip, rating }) {
    // Declare the dates array first
    const dates = [
        { date: generateDate(0) }, // Today
        { date: generateDate(1) }, // Tomorrow
        { date: generateDate(2) },
        { date: generateDate(3) },
        { date: generateDate(4) },
        { date: generateDate(5) },
        { date: generateDate(6) },
        { date: generateDate(7) },
    ];

    // Initialize the slotsAvailability state
    const [slotsAvailability, setSlotsAvailability] = useState(
        dates.reduce((acc, dateObj) => {
            acc[dateObj.date] = 10; // Initialize with 10 slots available per date
            return acc;
        }, {})
    );

    const [selectedDateIndex, setSelectedDateIndex] = useState(0); // Initially showing "Today"
    const [selectedDate, setSelectedDate] = useState(dates[0].date); // Default to "Today"

    const slots = [
        { time: "11:30 AM", period: "Morning" },
        { time: "12:00 PM", period: "Afternoon" },
        { time: "12:30 PM", period: "Afternoon" },
        { time: "01:30 PM", period: "Afternoon" },
        { time: "02:00 PM", period: "Afternoon" },
        { time: "02:30 PM", period: "Afternoon" },
        { time: "06:00 PM", period: "Evening" },
        { time: "06:30 PM", period: "Evening" },
        { time: "07:00 PM", period: "Evening" },
        { time: "07:30 PM", period: "Evening" },
    ];

    const periods = ["Morning", "Afternoon", "Evening"];

    const navigateDates = (direction) => {
        if (direction === "left" && selectedDateIndex > 0) {
            setSelectedDateIndex(selectedDateIndex - 1);
            setSelectedDate(dates[selectedDateIndex - 1].date);
        } else if (direction === "right" && selectedDateIndex < dates.length - 1) {
            setSelectedDateIndex(selectedDateIndex + 1);
            setSelectedDate(dates[selectedDateIndex + 1].date);
        }
    };

    const handleSlotClick = (time) => {
        const currentSlotsAvailable = slotsAvailability[selectedDate];
        if (currentSlotsAvailable > 0) {
            // Decrease the slot availability for the selected date
            const updatedSlotsAvailability = {
                ...slotsAvailability,
                [selectedDate]: currentSlotsAvailable - 1,
            };
            setSlotsAvailability(updatedSlotsAvailability);

            // Store the selected slot in local storage
            const selectedSlot = {
                name,
                address,
                city,
                state,
                zip,
                rating,
                date: selectedDate,
                time,
            };

            // Retrieve existing slots from local storage or initialize an empty array
            const existingSlots = JSON.parse(localStorage.getItem("selectedSlots")) || [];

            // Add the new slot to the array
            const updatedSlots = [...existingSlots, selectedSlot];

            // Store the updated slots array back in local storage
            localStorage.setItem("selectedSlots", JSON.stringify(updatedSlots));
        } else {
            alert("No slots available for this date.");
        }
    };

    return (
        <div className={styles.slotsContainer}>
            <div className={styles.dateSwiper}>
                <button onClick={() => navigateDates("left")} className={styles.arrowButton}>
                    <FaChevronCircleLeft style={{ color: "black" }} />
                </button>
                {dates.slice(selectedDateIndex, selectedDateIndex + 3).map((dateObj, index) => (
                    <div
                        key={index}
                        className={`${styles.date} ${dateObj.date === selectedDate ? styles.selected : ""}`}
                        onClick={() => {
                            setSelectedDate(dateObj.date);
                            setSelectedDateIndex(dates.findIndex(d => d.date === dateObj.date));
                        }}
                    >
                        <div>{formatDate(dateObj.date)}</div>
                        <div>{slotsAvailability[dateObj.date]} Slots Available</div>
                    </div>
                ))}
                <button onClick={() => navigateDates("right")} className={styles.arrowButton}>
                    <FaChevronCircleRight style={{ color: "black" }} />
                </button>
            </div>

            {periods.map((period, periodIndex) => (
                <div key={periodIndex} className={styles.slotSection}>
                    <div className={styles.periodTitle}>{period}</div>
                    <div className={styles.slots}>
                        {slots
                            .filter((slot) => slot.period === period)
                            .map((slot, index) => (
                                <button
                                    key={index}
                                    className={styles.slotButton}
                                    onClick={() => handleSlotClick(slot.time)}
                                    disabled={slotsAvailability[selectedDate] === 0} // Disable button if no slots available for this date
                                >
                                    {slot.time}
                                </button>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Slots;
