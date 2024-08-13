import React, { useState } from "react";
import HospitalIcon from "../assets/HospitalIcon.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./Card.module.css";
import { MdOutlineThumbUp } from "react-icons/md";

function Card({ name, address, city, state, zip, rating }) {
    const [showMore, setShowMore] = useState(false)

    const handleClick = () => {
        setShowMore(prevShowMore => !prevShowMore)
    }

    return (
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
                            <span className={styles.strikethroughText}>₹500</span> Consultation fee at clinic<button
                                className={styles.moreButton}
                                onClick={handleClick}
                            >
                                {showMore ? 'Less' : 'More'}
                            </button>
                            {showMore && (
                                <div className={styles.additionalInfo}>
                                    <p>State: {state}, City: {city}, PinCode: {zip}</p>

                                </div>
                            )}
                        </p>

                        <p className={styles.cardText}>
                            Center
                        </p>
                        <p className={styles.availabilityText}>Available Today</p>
                    </div>
                </div>
                <div className={styles.cardActions}>
                    <button className={styles.bookButton}>Book FREE Center Visit</button>
                    <div className={styles.likeContainer}>
                        <MdOutlineThumbUp style={{ color: '#fff' }} />
                        <span className={styles.likeCount}>{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card