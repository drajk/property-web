import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import styles from './Loader.module.css';
import loaderSvg from './loader.svg';

const Loader = ({ className }) => (
    <img data-testid="loader" className={cx(styles.icon, className)} src={loaderSvg} alt="loader" />
);

Loader.propTypes = {
    className: PropTypes.string,
    iconClassName: PropTypes.string,
};

Loader.defaultProps = {
    className: null,
    iconClassName: null,
};

export default Loader;
