import React, { useState } from "react";
import HospitalIcon from "../assets/HospitalIcon.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Card.module.css";
import { MdOutlineThumbUp } from "react-icons/md";
import Slots from "../slots/slots";

function Card({ name, address, city, state, zip, rating }) {
    const [showMore, setShowMore] = useState(false)
    const [slotsDate, setSlotDate] = useState(false)

    const handleClick = () => {
        setShowMore(prevShowMore => !prevShowMore)
    }

    const handleClickSlots = () => {
        setSlotDate(prevSlot => !prevSlot)
    }

    return (
        <>
            <div className={styles.card}>
                <div className={styles.cardRow}>
                    <div className={styles.cardImageContainer}>
                        <img src={HospitalIcon} className={styles.cardImage} alt="HospitalIcon" />
                    </div>
                    <div className={styles.cardContent}>
                        <div className={styles.cardBody}>
                            <h5 className={styles.cardTitle}>{name}</h5>
                            <p className={styles.cardText}>
                                <strong>{address}</strong><br />
                                <span className={styles.freeText}>FREE</span>
                                <span className={styles.strikethroughText}>₹500</span> Consultation fee at clinic
                                <button
                                    className={styles.moreButton}
                                    onClick={handleClick}
                                >
                                    {showMore ? 'Less' : 'More'}
                                </button>
                                {showMore && (
                                    <div>
                                        <p>State: {state}, City: {city}, PinCode: {zip}</p>

                                    </div>
                                )}
                            </p>
                            <p className={styles.availabilityText}>Available Today</p>
                        </div>
                    </div>
                    <div className={styles.cardActions}>
                        <button className={styles.bookButton} onClick={handleClickSlots}>
                            Book FREE Center Visit
                        </button>


                        <div className={styles.likeContainer}>
                            <MdOutlineThumbUp style={{ color: '#fff' }} />
                            <span className={styles.likeCount}>{rating}</span>
                        </div>
                    </div>
                </div>
            </div>
            {slotsDate && (
                <div className={styles.slotsContainer}>
                    <Slots 
                        name={name}
                        address={address}
                        city={city}
                        state={state}
                        zip={zip}
                        rating={rating}
                    />
                </div>

            )}
        </>
    );
}

export default Card