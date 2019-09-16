import React, { useState } from 'react';

import Fetch from '../../components/Fetch/Fetch';
import Input from '../../components/Input/Input';
import Listing from '../../components/Listing/Listing';

import Layout from '../Layout/Layout';

import styles from './Search.module.css';

const Search = () => {
    const [suburb, changeSuburb] = useState('');
    const [url, changeUrl] = useState('/search');

    const handleTextChange = (value = '') => {
        changeSuburb(value);

        // atleast 3 characters to start search
        if (value.length < 3) {
            return;
        }

        const url = value ? `/search?suburb=${suburb}` : '/search';
        changeUrl(url);
    };

    return (
        <Layout>
            <Input
                placeholder="Try Hawthorn / Caulfield"
                value={suburb}
                onChange={handleTextChange}
            ></Input>
            {suburb && (
                <div className={styles.title}>
                    {`Search results for ${suburb}:`}
                </div>
            )}
            <div className={styles.resultsContainer}>
                <Fetch url={url}>
                    {({ result }) =>
                        result &&
                        result.map(({ price, address }) => (
                            <Listing
                                key={address}
                                price={price}
                                address={address}
                                icon="star"
                            />
                        ))
                    }
                </Fetch>
            </div>
        </Layout>
    );
};

export default Search;
