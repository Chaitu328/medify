import React, { useState } from "react";
import styles from "./slots.module.css";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function Slots() {
    const [selectedDateIndex, setSelectedDateIndex] = useState(3); // Initially showing "Today"
    const [selectedDate, setSelectedDate] = useState(""); // Track the selected date
    const slotsAvailable = 10;

    const generateDate = (offset) => {
        const date = new Date();
        date.setDate(date.getDate() + offset);
        return date.toISOString().split('T')[0]; // Returns date in YYYY-MM-DD format
    };

    const formatDate = (dateStr) => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        const dateObj = new Date(dateStr);

        if (dateObj.toDateString() === today.toDateString()) return "Today";
        if (dateObj.toDateString() === tomorrow.toDateString()) return "Tomorrow";
        return dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' });
    };

    const dates = [
        { date: generateDate(-3), slotsAvailable },
        { date: generateDate(-2), slotsAvailable },
        { date: generateDate(-1), slotsAvailable },
        { date: generateDate(0), slotsAvailable }, // Today
        { date: generateDate(1), slotsAvailable }, // Tomorrow
        { date: generateDate(2), slotsAvailable },
        { date: generateDate(3), slotsAvailable },
    ];

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
        } else if (direction === "right" && selectedDateIndex < dates.length - 3) {
            setSelectedDateIndex(selectedDateIndex + 1);
        }
    };

    return (
        <div className={styles.slotsContainer}>
            <div className={styles.dateSwiper}>
                <button onClick={() => navigateDates("left")} className={styles.arrowButton}>
                    <FaChevronCircleLeft style={{ color: 'black' }} />
                </button>
                {dates.slice(selectedDateIndex, selectedDateIndex + 3).map((dateObj, index) => (
                    <div
                        key={index}
                        className={`${styles.date} ${dateObj.date === selectedDate ? styles.selected : ""}`}
                        onClick={() => setSelectedDate(dateObj.date)}
                    >
                        <div>{formatDate(dateObj.date)}</div>
                        <div>{dateObj.slotsAvailable} Slots Available</div>
                    </div>
                ))}
                <button onClick={() => navigateDates("right")} className={styles.arrowButton}>
                    <FaChevronCircleRight style={{ 
                        color: 'black',
                       }} />
                </button>
            </div>

            {periods.map((period, periodIndex) => (
                <div key={periodIndex} className={styles.slotSection}>
                    <div className={styles.periodTitle}>{period}</div>
                    <div className={styles.slots}>
                        {slots
                            .filter(slot => slot.period === period)
                            .map((slot, index) => (
                                <button key={index} className={styles.slotButton}>
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
