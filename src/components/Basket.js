import React from 'react';
import * as Constant from '../Constants';
import '../styles/App.scss';

class Basket extends React.Component {

    render() {
        const {total, qty} = this.props;
        return (
            <React.Fragment>
                <div className="basketContainer mt-auto py-3 fixed-bottom">
                    <div className="container">
                        <p
                            className="d-inline-block m-0"
                            data-testid="qtyCounter"
                        >
                            <i className="fas fa-shopping-bag fa-2x mr-1"></i>
                            <span>x{qty}</span> item{qty !== 1 && <span>s</span> }
                        </p>
                        <p
                            className="total h3 float-right m-0"
                            data-testid="totalSum"
                        >
                            Total: <span>{Constant.CURRENCY}<strong>{total}</strong></span>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Basket;