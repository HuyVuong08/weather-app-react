import React, { useState } from 'react';

import styles from './Form.module.css';
import PropTypes from 'prop-types';

const Form = ({ submitSearch, isLoading }) => {
    const [location, setLocation] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        if (!location || location === '') return;
        submitSearch(location);
    };

    return (
        <>
            {!isLoading && (
                <form onSubmit={onSubmit} className={styles.form}>
                    <input
                        aria-label="location"
                        type="text"
                        className={`${styles.input} form-control`}
                        placeholder="e.g: San Fransisco"
                        required
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        autoFocus
                    />

                    <button type="submit" className={styles.button}>
                        SEARCH
                    </button>
                </form>
            )}
        </>
    );
};

Form.propTypes = {
    submitSearch: PropTypes.func.isRequired,
};

export default Form;
