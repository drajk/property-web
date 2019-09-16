import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from './formatPrice';
import star from './svg/star.svg';
import remove from './svg/remove.svg';

import styles from './Listing.module.css';

const Listing = ({ price, address, icon }) => {

    // TODO: move this to a Icon component
    const svgAsset = icon === 'star' ? star : remove;
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <span>{formatPrice(price)}</span>
                <span>{address}</span>
            </div>
            <div className={styles.action}>
                <img className={styles.icon} src={svgAsset} alt={icon} />
            </div>
        </div>
    );
};

Listing.defaultProps = {
    price: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    icon: PropTypes.oneOf(['star', 'remove']),
};

export default Listing;
