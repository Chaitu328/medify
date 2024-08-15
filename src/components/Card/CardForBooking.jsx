import React from "react";
import HospitalIcon from "../assets/HospitalIcon.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./CardForBooking.module.css";
import { MdOutlineThumbUp } from "react-icons/md";

function Card({ name, address, city, state, zip, rating, date, time }) {
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
                            <span className={styles.strikethroughText}>₹500</span> Consultation fee at clinic
                        </p>
                        <div className={styles.dateTimeText}>
                            <p style={{
                                color:'#00b0ff',
                                border: '1px solid #00b0ff',
                                borderRadius: '2px',
                                }}>Date: {date}</p>
                            <p style={{
                                color: 'rgba(0, 165, 0, 1)',
                                border: '1px solid rgba(0, 165, 0, 1)',
                                borderRadius: '2px',
                                
                            }}
                            >Time: {time}</p>
                        </div>

                    </div>
                </div>
                <div className={styles.cardActions}>
                    <div className={styles.likeContainer}>
                        <MdOutlineThumbUp style={{ color: '#fff' }} />
                        <span className={styles.likeCount}>{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
