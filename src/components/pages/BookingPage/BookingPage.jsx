import NavBar from "../../Navabar/Navbar"
import BookingBar from "../../BookingBar/BookingBar"
import SearchBar from "../../SearchBar/SearchBar"

function BookingsPage(){
    const hospitalSearchBar = [
        {id: 'hospital', name: 'hospital', placeholder: 'Search By Hospital'}
    ]
    return (
        <div>
            <NavBar/>
            <BookingBar />
            <SearchBar inputs={hospitalSearchBar}/>
        </div>
    )
}

export default BookingsPage