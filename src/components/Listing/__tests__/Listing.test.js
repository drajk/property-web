import React from 'react';
import renderer from 'react-test-renderer';
import Listing from '../Listing';

describe('Listing', () => {
    it('renders with formatted price and address', () => {
        const tree = renderer
            .create(
                <Listing
                    price="980000"
                    address="12 Araleun Drive, Hawthorn"
                    icon="star"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with remove favourite icon', () => {
        const tree = renderer
            .create(
                <Listing
                    price="980000"
                    address="12 Araleun Drive, Hawthorn"
                    icon="star"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with remove icon', () => {
        const tree = renderer
            .create(
                <Listing
                    price="980000"
                    address="12 Araleun Drive, Hawthorn"
                    icon="remove"
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with on click handler', () => {
        const tree = renderer
            .create(
                <Listing
                    price="980000"
                    address="12 Araleun Drive, Hawthorn"
                    icon="remove"
                    onClick={() => {}}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
