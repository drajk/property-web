import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import axios from 'axios';

import Favourites from '../Favourites';
import fakeResponse from '../__mocks__/favourites.json';

jest.mock('axios');

const getWrapper = () => {
    return render(
        <MemoryRouter>
            <Favourites />
        </MemoryRouter>
    );
};

describe('Favourites component', () => {
    beforeEach(() => {
        axios.get = jest
            .fn()
            .mockImplementation(() => Promise.resolve(fakeResponse));
    });

    it('should display favourite listings with address', async () => {
        // arrange
        axios.get = jest
            .fn()
            .mockImplementation(() => Promise.resolve(fakeResponse));

        // act
        const { getByText, findAllByTestId } = getWrapper();
        const listings = await findAllByTestId('listing-wrapper');

        // assert
        expect(listings).toHaveLength(3);
        expect(getByText('25 Thomas Street, Caulfield')).toBeTruthy();
        expect(getByText('8 Forester Road, Hawthorn')).toBeTruthy();
        expect(getByText('48 Random Road, Caulfield')).toBeTruthy();
    });
});
