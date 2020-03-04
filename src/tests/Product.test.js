import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';

import Product from '../components/Product';

afterEach(cleanup);

/**
 * Basic render
 */
it('Product card renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Product/>, div);
});

/**
 * Render simple product card
 */
it('Product card renders', () => {
    const product = {
        colour: "Black",
        id: 1,
        img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
        name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
        price: 10
    };
    const cart = [{id: 1, price: 10, qty: 10}];
    const {getByTestId} = render(<Product product={product} cart={cart}/>)
    expect(getByTestId('productCardTitle')).toHaveTextContent('Black Sheet Strappy Textured Glitter Bodycon Dress');
    expect(getByTestId('productCardColour')).toHaveTextContent('Black');
    expect(getByTestId('productCardPrice')).toHaveTextContent('£10');
    expect(getByTestId('productCardQtyInput')).toHaveValue('10');

});

/**
 * Render product card no image (A)
 */
it('Product card renders NO image', () => {
    const product = {
        colour: "Black",
        id: 1,
        img: '',
        name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
        price: 10
    };
    const cart = [{id: 1, price: 10, qty: 10}];
    const {getByTestId} = render(<Product product={product} cart={cart}/>)
    expect(getByTestId('productCardTitle')).toHaveTextContent('Black Sheet Strappy Textured Glitter Bodycon Dress');
    expect(getByTestId('productCardColour')).toHaveTextContent('Black');
    expect(getByTestId('productCardPrice')).toHaveTextContent('£10');
    expect(getByTestId('productCardNoImage')).toBeInTheDocument;
});


/**
 * Snapshot (A)
 */
it('matches snapshot A', () => {
    const product = {
        colour: "Black",
        id: 1,
        img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
        name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
        price: 10
    };
    const cart = [{id: 1, price: 10, qty: 10}];
    const tree = renderer.create(<Product product={product} cart={cart}/>).toJSON();
    expect(tree).toMatchSnapshot();
});

/**
 * Functions
 */
describe('<Product /> functions', () => {
    it('qtyFilter', () => {
        const product = {
            colour: "Black",
            id: 1,
            img: "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024",
            name: "Black Sheet Strappy Textured Glitter Bodycon Dress",
            price: 10
        };
        const cart = [{id: 1, price: 10, qty: 10}];
        const wrapper = renderer.create(<Product product={product} cart={cart}/>);
        const inst = wrapper.getInstance();
        expect(inst.qtyFilter(product, cart)).toBe(10);
    });

    it('updateCart', () => {
        const {option, id, price} = [{option: 'remove', id: 1, price: 10}];
        const wrapper = renderer.create(<Product/>);
        const inst = wrapper.getInstance();
        //inst.updateCart(option, id, price);
    });
});