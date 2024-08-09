import medifyLogo from "../assets/medify_logo.png"
import styles from "./Navbar.module.css"

function NavBar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarContent}>
                <img className={styles.logo} src={medifyLogo} alt="medifyLogo" />
                <h3>Medify</h3>
            </div>
            <ul className={styles.navbarList}>
                <li className={styles.navbarItem}> <a href="#BookingPage">Find Doctors</a></li>
                <li className={styles.navbarItem}> <a href="#Hospitals">Hospitals</a></li>
                <li className={styles.navbarItem}> <a href="#Medicines">Medicines</a></li>
                <li className={styles.navbarItem}> <a href="#Surgeries">Surgeries</a></li>
                <li className={styles.navbarItem}> <a href="#Software for Provider">Software for Provider</a></li>
                <li className={styles.navbarItem}> <a href="#Facilities">Facilities</a></li>
            </ul>
            <button> My Bookings </button>
        </nav>
    )
}

export default NavBar