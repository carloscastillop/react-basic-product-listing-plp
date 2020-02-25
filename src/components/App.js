import React from 'react';
import axios from 'axios';
import * as Constant from '../Constants';

import Product from './Product';
import Header from './Header';
import Filter from './Filters';
import Basket from "./Basket";
import '../styles/App.scss';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            products: [],
            cart: [],
            filters: {
                filterSelectedColour: '',
                filterColours: [],
            },
            loadingProducts: true
        }
    }

    componentDidMount() {
        axios.get(Constant.PRODUCTS_URL)
            .then(response => {
                const filters = {...this.state.filters}
                const products = response.data;

                filters.filterColours = this.parseColourList(products);

                this.setState({
                    loadingProducts: false,
                    products: products,
                    filters: filters
                });
            })
    }

    /**
     * Set Selected colour from filter
     * @param colour
     */
    setSelectedColour = (colour) => {
        const filters = {...this.state.filters}

        filters.filterSelectedColour = colour;

        this.setState({
            filters: filters
        });
    }

    /**
     * Create Colour list for filter by colour
     * @param products
     * @returns {any[]}
     */
    parseColourList = (products) => {
        const filters = products.map((key) => {
            return key.colour;
        });

        return [...new Set(filters)];
    }

    /**
     * If colourFilter is set, product list is filtered, by colour
     * @param colourFilter
     * @param products
     * @returns {*}
     */
    filterProductList = (colourFilter, products) => {
        if (colourFilter !== '') {
            return products.filter(product => product.colour === colourFilter);
        }
        return products;
    }

    /**
     * Update dart
     * @param option
     * @param id
     * @param price
     */
    updateCart = (option, id, price) => {
        const cart = this.state.cart;
        let updated = false;
        let cartPurge = [];
        let newCart = cart.map((product, index) => {
            const newObj = Object.assign({}, product);
            if (newObj.id === id) {
                newObj.qty = (option === 'increase') ? newObj.qty + 1 : newObj.qty - 1;
                updated = true;
                if (newObj.qty < 1) {
                    cartPurge.push(id);
                }
            }
            return newObj;
        });
        if (!updated && option === 'increase') {
            newCart.push({id: id, qty: 1, price: price});
        }

        cartPurge.map((id) => {
            newCart = this.removeCart(id, newCart);
        });

        this.setState({
            cart: newCart
        });
    }

    /**
     * Remove/filter a product from cart by ID
     * @param id
     * @param cart
     * @returns {*}
     */
    removeCart = (id, cart) => {
        return cart.filter((prod) => {
            return prod.id !== id;
        });
    }

    render() {
        const {loadingProducts, products, filters, cart} = this.state;
        let productList = this.filterProductList(filters.filterSelectedColour, products);

        return (
            <div className="App">
                <Header/>
                <Filter
                    colours={filters.filterColours}
                    filterColours={filters.filterColours}
                    setSelectedColour={this.setSelectedColour}
                />
                <div className="productContainer container">
                    {loadingProducts &&
                    <div className="p-5 text-center">
                        <i className="fas fa-spinner fa-spin fa-5x"></i>
                    </div>
                    }
                    <div className="row">
                        {
                            productList.map((product) => {
                                return (
                                    <Product
                                        key={'product-' + product.id}
                                        product={product}
                                        cart={cart}
                                        updateCart={this.updateCart}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
                <Basket/>
            </div>
        );
    }
}

export default App;
