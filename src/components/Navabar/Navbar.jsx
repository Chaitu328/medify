import medifyLogo from "../assets/medify_logo.png"
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <img className={styles.logo} src={medifyLogo} alt="medifyLogo" />
                <Link to="/" style={{textDecoration:'none'}}>
                    <h3>Medify</h3>
                </Link>
            </div>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}><Link to="/doctors">Find Doctors</Link></li>
                <li className={styles.navbarItem}> <a href="#Hospitals">Hospitals</a></li>
                <li className={styles.navbarItem}> <a href="#Medicines">Medicines</a></li>
                <li className={styles.navbarItem}> <a href="#Surgeries">Surgeries</a></li>
                <li className={styles.navbarItem}> <a href="#Software for Provider">Software for Provider</a></li>
                <li className={styles.navbarItem}> <a href="#Facilities">Facilities</a></li>
            </ul>

            <Link to="/booking" style={{ textDecoration: 'none' }}>
                <button>
                    My Bookings
                </button>
            </Link>

        </nav>
    )
}

export default NavBar