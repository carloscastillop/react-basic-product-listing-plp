import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import Filter from '../components/Filters';

afterEach(cleanup);
/**
 * Basic render
 */
it('Filter renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Filter/>, div);
});

/**
 * Render with colour filters example (A)
 */
it('Filter renders filter correctly', () => {
    const colours = ['Red', 'Green', 'Blue'];
    const {getByTestId} = render(<Filter colours={colours}/>)
    expect(getByTestId('colourFilterSelect')).toHaveTextContent('Filter by colour', 'Red', 'Green', 'Blue')
});

/**
 * Render with no colour filters (B)
 */
it('Filter renders filter with empty colours', () => {
    const colours = [];
    const {getByTestId} = render(<Filter colours={colours}/>)
    expect(getByTestId('colourFilterSelectEmpty')).toHaveTextContent('No colour filters available')
});

/**
 * Snapshot (A)
 */
it('Filter matches snapshot A', () => {
    const colours = ['Red', 'Green', 'Blue'];
    const tree = renderer.create(<Filter colours={colours}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

/**
 * Snapshot (B)
 */
it('Filter matches snapshot empty filter B', () => {
    const colours = [];
    const tree = renderer.create(<Filter colours={colours}/>).toJSON();
    expect(tree).toMatchSnapshot();
});
