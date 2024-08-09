import NavBar from "../../Navabar/Navbar"
import HeroSection from "../../HeroSection/HeroSection"
import styles from "./HomePage.module.css"

function HomePage(){
    return (
        <div className={styles.home} >
            <NavBar/>
            <HeroSection/>
        </div>
    )
}

export default HomePage