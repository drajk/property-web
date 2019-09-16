import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import useDebounce from '../useDebounce';

const DebounceWrapper = ({ fn, delay }) => {
    const debounce = useDebounce(fn, delay);
    return (
        <button type="button" onClick={debounce} data-testid="debounced-button">
            Testing Debounce
        </button>
    );
};

describe('useDebounce', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('should call invoke exactly once', () => {
        const fn = jest.fn();
        const delay = 5000;
        const { getByTestId } = render(
            <DebounceWrapper fn={fn} delay={delay} />
        );
        expect(fn).not.toBeCalled();
        fireEvent.click(getByTestId('debounced-button'));
        expect(fn).not.toBeCalled();
        jest.advanceTimersByTime(1000);
        expect(fn).not.toBeCalled();
        jest.advanceTimersByTime(4000);
        expect(fn).toHaveBeenCalledTimes(1);
    });
});
