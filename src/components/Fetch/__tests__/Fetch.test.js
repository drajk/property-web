import React from 'react';
import { render, act } from '@testing-library/react';
import axios from 'axios';
import * as fakeResponse from '../__mocks__/mock.json';
import Fetch from '../Fetch';

let useDebounce = require('../../../hooks/useDebounce');

jest.mock('axios');

describe('Fetch', () => {
    let url;
    let childFn;
    let transformFn;

    beforeEach(() => {
        useDebounce = jest.fn().mockImplementation(() => []);
        url = 'url';
        childFn = jest.fn();
        transformFn = jest.fn();

        axios.get = jest
            .fn()
            .mockImplementation(() => Promise.resolve(fakeResponse));
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should not pass values to hooks', () => {
        expect(useDebounce).not.toBeCalled();
    });

    it('should show loader when fetching data for the first time', () => {
        const { getByTestId } = render(
            <Fetch url={url} transform={transformFn}>
                {childFn}
            </Fetch>
        );
        expect(childFn).not.toBeCalled();
        expect(getByTestId('loader')).toBeTruthy();
    });

    it('should do internal wiring and render the component', async () => {
        const wrapper = render(
            <Fetch url={url} transform={transformFn}>
                {childFn}
            </Fetch>
        );

        expect(wrapper).toBeTruthy();
    });
});
