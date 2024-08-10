import NavBar from "../../Navabar/Navbar";
import HeroSection from "../../HeroSection/HeroSection";
import styles from "./HomePage.module.css";
import SearchBar from "../../SearchBar/SearchBar";
import doctorLogo from "../../assets/Doctos.png"
import labsLogo from "../../assets/labs.png"
import hospitalLogo from "../../assets/hospitals.png"
import storeLogo from "../../assets/medical_store.png"
import ambulanceLogo from "../../assets/ambulance.png"
import 'bootstrap/dist/css/bootstrap.min.css'


function HomePage() {
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
                        <div className="card">
                            <img src={doctorLogo} alt="logo is not found" />
                        </div>
                        <div className="card">
                            <img src={labsLogo} alt="logo is not found" />
                        </div>
                        <div className="card">
                            <img src={hospitalLogo} alt="logo is not found" />
                        </div>
                        <div className="card">
                            <img src={storeLogo} alt="logo is not found" />
                        </div>
                        <div className="card">
                            <img src={ambulanceLogo} alt="logo is not found" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default HomePage;
