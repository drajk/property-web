import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import axios from 'axios';

import Search from '../Search';
import fakeResponse from '../__mocks__/search.json';

jest.mock('axios');

const getWrapper = () => {
    return render(
        <MemoryRouter>
            <Search />
        </MemoryRouter>
    );
};

describe('Search component', () => {
    beforeEach(() => {
        axios.get = jest
            .fn()
            .mockImplementation(() => Promise.resolve(fakeResponse));
    });

    it('should display search results on initial load', async () => {
        // arrange
        axios.get = jest
            .fn()
            .mockImplementation(() => Promise.resolve(fakeResponse));

        // act
        const { findAllByTestId } = getWrapper();
        const listings = await findAllByTestId('listing-wrapper');

        // assert
        expect(listings).toHaveLength(5);
    });

    it('should show loader when getting response from api', () => {
        const { getByTestId } = getWrapper();

        const searchBox = getByTestId('search-input');
        fireEvent.change(searchBox, { target: { value: 'hawthorn' } });

        expect(getByTestId('loader')).toBeTruthy();
    });
});
