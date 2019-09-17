import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button', () => {
    it('renders with text', () => {
        const tree = renderer.create(<Button>Search</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with active state', () => {
        const tree = renderer.create(<Button isActive>Search</Button>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders with active state and handler', () => {
        const tree = renderer
            .create(
                <Button isActive onClick={() => {}}>
                    Search
                </Button>
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
