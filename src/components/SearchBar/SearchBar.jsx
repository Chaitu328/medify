import React from 'react';
import { IoIosSearch } from "react-icons/io";
import styles from './SearchBar.module.css'; // Import CSS module

function SearchBar() {
    return (
        <div className={styles.searchContainer}>
            <form className={styles.formWrapper}>
                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        id='state'
                        name="state"
                        placeholder="State"
                        className={styles.searchInput}
                    />
                    <IoIosSearch className={styles.searchIcon} />
                </div>

                <div className={styles.inputWrapper}>
                    <input
                        type="text"
                        id='city'
                        name="city"
                        placeholder="City"
                        className={styles.searchInput}
                    />
                    <IoIosSearch className={styles.searchIcon} />
                </div>

                <button type='submit'>
                    <IoIosSearch className={styles.searchIcon} />
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar;
