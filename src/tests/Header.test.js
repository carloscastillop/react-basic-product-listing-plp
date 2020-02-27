import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import Header from '../components/Header';

afterEach(cleanup);

/**
 * Basic render
 */
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header/>, div);
});

/**
 * Basic render 2
 */
it('renders header', () => {
    const {getByTestId} = render(<Header/>)
    expect(getByTestId('header')).toHaveTextContent('Clothing');
});

/**
 * Snapshot
 */
it('matches snapshot', () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
});