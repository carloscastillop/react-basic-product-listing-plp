import React from 'react';
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
            }
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="App">
                <Header/>
                <Filter/>
                <div className="productContainer container">
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <Basket/>
            </div>
        );
    }
}

export default App;
