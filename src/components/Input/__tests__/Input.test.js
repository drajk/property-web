import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../Input';

describe('Input', () => {
    it('renders with placeholder', () => {
        const tree = renderer.create(<Input placeholder="Search" />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with on click handler', () => {
        const tree = renderer
            .create(<Input placeholder="Search" onChange={() => {}} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with initial value', () => {
        const tree = renderer
            .create(<Input placeholder="Search" value="Initial Value" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
