import NavBar from "../../Navabar/Navbar"
import BookingBar from "../../BookingBar/BookingBar"
import SearchBar from "../../SearchBar/SearchBar"
import styles from "./DoctorPage.module.css"

function DoctorPage(){
    return (
        <div>
           <NavBar/>
           <BookingBar/>
           <div className={styles.section }>
            <SearchBar />
           </div>
          
        </div>
    )
}

export default DoctorPage