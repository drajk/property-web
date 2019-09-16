import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Button.module.css';

const Button = ({ children, isActive, onClick }) => {
    const cxContent = cx(styles.content, {
        [styles.isActive]: isActive,
    });

    return (
        <div className={styles.container} onClick={onClick}>
            <span className={cxContent}>{children}</span>
        </div>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isActive: PropTypes.bool,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    isActive: false,
    onClick: () => {},
};

export default Button;
