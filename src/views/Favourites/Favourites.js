import React from 'react';
import Listing from '../../components/Listing/Listing';
import Fetch from '../../components/Fetch/Fetch';

import Layout from '../Layout/Layout';

const Favourites = () => {
    return (
        <Layout>
            <Fetch url="/favourites">
                {({ result }) =>
                    result &&
                    result.map(({ price, address }) => (
                        <Listing
                            key={address}
                            price={price}
                            address={address}
                            icon="remove"
                        />
                    ))
                }
            </Fetch>
        </Layout>
    );
};

export default Favourites;
