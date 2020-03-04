import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { act } from 'react-dom/test-utils';




import App from '../components/App';

/**
 * Basic render
 */
it('App renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
});


/**
 * Functions
 */
describe('<App /> functions', () => {
    it('round fn', () => {
        const value = 1.12345;
        const precision = 2;
        const wrapper = renderer.create(<App/>);
        const inst = wrapper.getInstance();
        expect(inst.round(value, precision)).toBe(1.12);
    });

    it('parseColourList fn', () => {
        const products = [{colour: "Black"}, {colour: "Stone"}, {colour: "Black"}, {colour: "Red"}];
        const productsExpected = ["Black", "Stone", "Red"];
        const wrapper = renderer.create(<App/>);
        const inst = wrapper.getInstance();
        expect(inst.parseColourList(products)).toMatchObject(productsExpected);
    });

    it('removeProductFromCart fn', () => {
        const id = 1;
        const cart = [{id: 1, qty: 0, price: 10}, {id: 2, qty: 0, price: 10}];
        const resultExp = [{id: 2, qty: 0, price: 10}];
        const wrapper = renderer.create(<App/>);
        const inst = wrapper.getInstance();
        const test = inst.removeProductFromCart(id, cart);
        expect(test).toMatchObject(resultExp);
    });

    it('calculateQty fn', () => {
        const cart = [{id: 1, qty: 1, price: 10}, {id: 2, qty: 2, price: 20}];
        const resultExp = 3;
        const wrapper = renderer.create(<App/>);
        const inst = wrapper.getInstance();
        const test = inst.calculateQty(cart);
        expect(test).toBe(resultExp);
    });

    it('calculateTotal fn', () => {
        const cart = [{id: 1, qty: 1, price: 10}, {id: 2, qty: 2, price: 20}];
        const resultExp = 50;
        const wrapper = renderer.create(<App/>);
        const inst = wrapper.getInstance();
        const test = inst.calculateTotal(cart);
        expect(test).toBe(resultExp);
    });

    it('setSelectedColour fn', () => {
        const wrapper = renderer.create(<App/>);
        const inst = wrapper.getInstance();
        const test = inst.setSelectedColour('Red');
    });


    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('setSelectedColour fn', () => {
        act(() => {
            ReactDOM.render(<App />, container);
        });

    });

});