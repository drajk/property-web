import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

const Input = ({ onChange, placeholder, value, ...otherProps }) => {
    const inputValue = (value || '').replace(/^\s+/, '');
    const isEmpty = inputValue === '';

    const placeholderElement = placeholder && isEmpty && (
        <span className={styles.placeholder}>{placeholder}</span>
    );

    const handleChange = (event) => {
        event.preventDefault();
        onChange(event.target.value);
    };

    return (
        <div className={styles.wrapper}>
            {placeholderElement}
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className={styles.input}
                {...otherProps}
            />
        </div>
    );
};

Input.propTypes = {
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

Input.defaultProps = {
    onChange: () => {},
    placeholder: '',
    value: '',
};

export default Input;
