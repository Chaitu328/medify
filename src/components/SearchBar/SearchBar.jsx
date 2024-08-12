import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import styles from './SearchBar.module.css'; // Import CSS module

function SearchBar({ inputs, onSearch }) {

    const [formData, setFormData] = useState({});

    const handleChange =(event)=>{
       const {id,value} = event.target;
       setFormData((prev)=>({
        ...prev,
        [id]: value
       }))
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if (onSearch) {
            onSearch(formData);
        }
        // to clear after submit
        setFormData({});
    }

    return (
        <div className={styles.searchContainer}>
            <form className={styles.formWrapper} onSubmit={handleSubmit}>
                {inputs.map((input, index) => (
                    <div key={index} className={styles.inputWrapper}>
                        <input
                            type="text"
                            id={input.id}
                            name={input.name}
                            placeholder={input.placeholder}
                            className={styles.searchInput}
                            value={formData[input.id] || ''}
                            onChange={handleChange}
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
