import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

import styles from './Header.module.css';

const Header = () => {
    const isActive = (path) => window.location.pathname.includes(path);

    return (
        <div className={styles.container}>
            <Link to="/search">
                <Button isActive={isActive('search')}>Search</Button>
            </Link>

            <Link to="/favourites">
                <Button isActive={isActive('favourites')}>Favourites</Button>
            </Link>
        </div>
    );
};

export default Header;
