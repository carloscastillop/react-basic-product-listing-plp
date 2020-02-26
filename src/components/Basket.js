import React from 'react';
import * as Constant from '../Constants';
import '../styles/App.scss';

class Basket extends React.Component {

    render() {
        const {total} = this.props;
        return (
            <React.Fragment>
                <div className="basketContainer mt-auto py-3 fixed-bottom">
                    <div className="container text-right">
                        <p className="total h3">
                            <i className="fas fa-shopping-bag"></i> Total:
                            <span>{Constant.CURRENCY}<strong>{total}</strong></span>
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Basket;