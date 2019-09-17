import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { BASE_URL } from '../../core/constants';
import useDebounce from '../../hooks/useDebounce';

import Loader from '../Loader/Loader';

const Fetch = ({ children, url, transform }) => {
    const [state, changeState] = useState({
        data: [],
        error: null,
        isFetching: true,
    });

    const debouncedResponse = useDebounce(async () => {
        try {
            changeState({ ...state, error: null, isFetching: true });

            const response = await axios.get(`${BASE_URL}${url}`);

            changeState({
                data: response.data,
                error: null,
                isFetching: false,
            });
        } catch (err) {
            changeState({
                ...state,
                error: err.message,
                isFetching: false,
            });
        }
    }, 500);

    useEffect(
        () => debouncedResponse(),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [url]
    );

    if (state.error && !state.isFetching) {
        return <div>Error occured {state.error}</div>;
    }

    if (state.isFetching) {
        return <Loader />;
    }

    return (
        <React.Fragment key={url}>
            {children(transform(state.data), {
                error: state.error,
                isFetching: state.isFetching,
            })}
        </React.Fragment>
    );
};

Fetch.propTypes = {
    children: PropTypes.func.isRequired,
    url: PropTypes.string.isRequired,
    transform: PropTypes.func,
};

Fetch.defaultProps = {
    transform: (val) => val,
};

export default Fetch;
