import React from 'react';
import renderer from 'react-test-renderer';
import Loader from '../Loader';

describe('Loader', () => {
    it('renders', () => {
        const tree = renderer.create(<Loader />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders when class is overridden', () => {
        const tree = renderer
            .create(<Loader className="loaderClass" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
