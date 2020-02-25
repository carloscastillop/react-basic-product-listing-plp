import React from 'react';
import Product from './Product';
import Header from './Header';
import Filter from './Filters';
import Basket from "./Basket";
import '../styles/App.scss';

function App() {
    return (
        <div className="App">
            <Header />
            <Filter />
            <div className="productContainer container">
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
                <Product/>
            </div>
            <Basket />
        </div>
    );
}

export default App;
