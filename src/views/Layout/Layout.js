import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

import styles from './Layout.module.css';

const Layout = ({ children }) => (
    <>
        <Header />
        <div className={styles.container}>{children}</div>
    </>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};
export default Layout;
