import React from 'react';
import styles from "./Specilization.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import dentistry from "../assets/Dentistry.png";
import primaryCare from "../assets/primaryCare.png";
import cardiology from "../assets/cardiology.png";
import bloodTest from "../assets/bloodTest.png";
import piscologist from "../assets/piscologist.png";
import laboratory from "../assets/laboratory.png";
import XRay from "../assets/XRay.png";

function Specilization() {
    return (
        <div className={styles.sectionBar}>
            <h1> Find by Specilization</h1>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className={`row row-cols-1 row-cols-md-4 ${styles.specializationContainer}`}>
                {[dentistry, primaryCare, cardiology, bloodTest, piscologist, laboratory,bloodTest, XRay].map((imgSrc, index) => (
                    <div className="col mb-4" key={index}>
                        <div className={`card ${styles.card}`}>
                            <img src={imgSrc} className={`card-img-top ${styles.cardImg}`} alt={`Specialization ${index + 1}`} />
                        </div>
                    </div>
                ))}
               
            </div>
            <button> view all</button>
        </div>

    );
}

export default Specilization;
