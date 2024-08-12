import React from 'react';
import { IoIosSearch } from "react-icons/io";
import styles from './SearchBar.module.css'; // Import CSS module

function SearchBar({ inputs }) {
    console.log(inputs)
    return (
        <div className={styles.searchContainer}>
            <form className={styles.formWrapper}>
                {inputs.map((input, index) => (
                    <div key={index} className={styles.inputWrapper}>
                        <input
                            type="text"
                            id={input.id}
                            name={input.name}
                            placeholder={input.placeholder}
                            className={styles.searchInput}
                        />
                        <IoIosSearch className={styles.searchIcon} />
                    </div>
                ))}


                <button type='submit'>
                    <IoIosSearch className={styles.searchIcon} />
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar;
