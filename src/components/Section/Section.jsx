import React from 'react';
import patientCaring from "../assets/patientCaring.png";
import tickmark from "../assets/tickmark.png";
import styles from "./Section.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import latestNews from "../assets/latestNews.png";

function Section() {
    const images = [latestNews, latestNews, latestNews];
    const cardStyle = {
        width: "100%", // Card should take full width of its column
        maxWidth: "400px", // Set max width for the card
        margin: "0 auto", // Center the card horizontally within its column
    };

    return (
        <div>
            <div className={styles.section}>
                <img src={patientCaring} alt="patientCaring.png" />
                <div className={styles.textContainer}>
                    <h4 style={{ color: 'rgba(42, 168, 255, 1)' }}>HELPING PATIENTS FROM AROUND THE GLOBE!</h4>
                    <h1>Patient <span style={{ color: 'rgba(42, 168, 255, 1)' }}>Caring</span></h1>
                    <p className={styles.description}>
                        Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.
                    </p>
                    <ul className={styles.list}>
                        <li><img src={tickmark} alt="tickmark" />Stay Updated About Your Health</li>
                        <li><img src={tickmark} alt="tickmark" />Check Your Results Online</li>
                        <li><img src={tickmark} alt="tickmark" />Manage your Appointments</li>
                    </ul>
                </div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',              
            }}>
                <h1 style={{
                    color: 'rgba(27, 60, 116, 1)',
                    fontWeight: 'bold',
                    width: '528px',
                    height: '95.5px',
                }}>Read our Latest News</h1>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
                        {images.map((image, index) => (
                            <div className="col d-flex justify-content-center mb-4" key={index}>
                                <div className="card h-100" style={cardStyle}>
                                    <img src={image} className="card-img-top" alt="latestNews" style={{ width: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Section;
