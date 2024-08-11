import NavBar from "../../Navabar/Navbar";
import HeroSection from "../../HeroSection/HeroSection";
import styles from "./HomePage.module.css";
import SearchBar from "../../SearchBar/SearchBar";
import doctorLogo from "../../assets/Doctos.png"
import labsLogo from "../../assets/labs.png"
import hospitalLogo from "../../assets/hospitals.png"
import storeLogo from "../../assets/medical_store.png"
import ambulanceLogo from "../../assets/ambulance.png"
import Carousel from "../../Carousel/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Specilization from "../../Specilization/Specilization";
import slider1 from "../../assets/slider1.png";
import slider2 from "../../assets/slider2.png";
import doctor2 from "../../assets/doctor2.png";
import doctor3 from "../../assets/doctor3.png";
import doctor4 from "../../assets/doctor4.png";

const images = [slider1, slider2, slider1]; 
const doctors = [doctor2,doctor3,doctor4]

function HomePage() {
    const services = [
        { logo: doctorLogo, alt: "Doctor services logo" },
        { logo: labsLogo, alt: "Labs services logo" },
        { logo: hospitalLogo, alt: "Hospital services logo" },
        { logo: storeLogo, alt: "Medical store services logo" },
        { logo: ambulanceLogo, alt: "Ambulance services logo" },
    ];
    return (
        <div className={styles.home}>
            <NavBar />
            <HeroSection />
            <div className={styles.section}>
                <div className={styles.searchWrapper}>
                    <SearchBar />
                    <h3 className={styles.searchText}>You may be looking for</h3>
                    <div className="card-deck" style={{
                        width: '90%',
                        height: '90%',
                    }}>
                        {services.map((service, index) => (
                            <div className="card" key={index}>
                                <img src={service.logo} alt={service.alt} className={styles.cardImage} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <Carousel images={images}/>
            <Specilization/>
            <div className={styles.sectionBar}>
                <h1>Our medical specialist</h1>
                <Carousel images={doctors}/>
            </div>
            
        </div>
    );
}

export default HomePage;
