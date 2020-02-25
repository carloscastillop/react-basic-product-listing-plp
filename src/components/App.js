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
                filterColours: '',
            },
            loadingProducts: true
        }
    }

    componentDidMount() {
        axios.get(Constant.PRODUCTS_URL)
            .then(response => {
                const products = response.data;
                this.setState({
                    loadingProducts: false,
                    products: products
                });
            })
    }

    render() {
        const isLoading = this.state.loadingProducts;
        const products = this.state.products;
        return (
            <div className="App">
                <Header/>
                <Filter/>
                <div className="productContainer container">
                    {isLoading &&
                    <div className="p-5 text-center">
                        <i className="fas fa-spinner fa-spin fa-5x"></i>
                    </div>
                    }
                    {
                        products.map((product) => {
                            return (
                                <Product key={'product-'+product.id} product={product}/>
                            )
                        })
                    }
                </div>
                <Basket/>
            </div>
        );
    }
}

export default App;
