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
        <div className={styles.wrapper} data-testid="listing-wrapper">
            <div className={styles.content}>
                <span data-testid="listing-price">{formatPrice(price)}</span>
                <span data-testid="listing-address">{address}</span>
            </div>
            <div className={styles.action}>
                <img
                    data-testid="listing-icon"
                    className={styles.icon}
                    src={svgAsset}
                    alt={icon}
                />
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
