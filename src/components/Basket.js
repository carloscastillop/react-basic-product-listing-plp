import React from 'react';
import '../styles/App.scss';

class Basket extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="basketContainer mt-auto py-3 fixed-bottom">
                    <div className="container text-right">
                        <p className="total h3">
                            <i className="fas fa-shopping-bag"></i> Total: <span>$100</span>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Basket;