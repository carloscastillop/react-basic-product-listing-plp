import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import Basket from '../components/Basket';

afterEach(cleanup);
/**
 * Basic render
 */
it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Basket/>, div);
});

/**
 * Render empty basket, with 0 values (A)
 */
it('renders when basket is empty', () => {
    const {qty, total} = {qty: 0, total: 0};
    const {getByTestId} = render(<Basket total={total} qty={qty}/>)
    expect(getByTestId('qtyCounter')).toHaveTextContent('x0 items');
    expect(getByTestId('totalSum')).toHaveTextContent('Total: £0');
});

/**
 * Render basket, when items === 1 (B)
 */
it('Basket with items === 1', () => {
    const {qty, total} = {qty: 1, total: 10};
    const {getByTestId} = render(<Basket total={total} qty={qty}/>)
    expect(getByTestId('qtyCounter')).toHaveTextContent('x1 item');
    expect(getByTestId('totalSum')).toHaveTextContent('Total: £10');
});

/**
 * Render basket, when items > 1 (C)
 */
it('Basket with items > 1', () => {
    const {qty, total} = {qty: 10, total: 100};
    const {getByTestId} = render(<Basket total={total} qty={qty}/>)
    expect(getByTestId('qtyCounter')).toHaveTextContent('x10 items');
    expect(getByTestId('totalSum')).toHaveTextContent('Total: £100');
});

/**
 * Snapshot (A)
 */
it('matches snapshot A', () => {
    const {qty, total} = {qty: 0, total: 0};
    const tree = renderer.create(<Basket total={total} qty={qty}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

/**
 * Snapshot (B)
 */
it('matches snapshot B', () => {
    const {qty, total} = {qty: 1, total: 10};
    const tree = renderer.create(<Basket total={total} qty={qty}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

/**
 * Snapshot (C)
 */
it('matches snapshot C', () => {
    const {qty, total} = {qty: 10, total: 100};
    const tree = renderer.create(<Basket total={total} qty={qty}/>).toJSON();
    expect(tree).toMatchSnapshot();
});