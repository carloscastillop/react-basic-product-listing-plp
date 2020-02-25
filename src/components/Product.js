import React from 'react';
import * as Constant from '../Constants';
import '../styles/App.scss';

class Product extends React.Component {
    /**
     *
     * @param option
     * @param id
     * @param price
     */
    updateCart = (option, id, price) => {
        this.props.updateCart(option, id, price);
    }

    /**
     *
     * @param id
     * @param cart
     * @returns {string}
     */
    qtyFilter = (id, cart) => {
        let qty = '';
        cart.map(item => {
            if(id === item.id){
                qty = item.qty
            }
        });
        return qty;
    }

    render() {
        const {product, cart} = this.props;
        const qty = this.qtyFilter(product.id, cart);

        return (
            <React.Fragment>
                <div className="col-12 col-lg-6">
                    <div className="card mb-4" data-product-id={product.id}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={product.img} className="card-img" alt="{product.name}"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="h4 card-title">#{product.id}{product.name}</h2>
                                    <p className="text-muted small">{product.colour}</p>
                                    <p className="price">{Constant.CURRENCY}{product.price}</p>
                                    <div className="qtyContainer mb-3 text-center">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button
                                                    onClick={() => this.updateCart('decrease', product.id, product.price)}
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                >
                                                    <i className="fas fa-minus"></i>
                                                </button>
                                            </div>
                                            <input
                                                type="text"
                                                className="form-control text-center"
                                                placeholder="Qty"
                                                value={qty}
                                                readOnly={true}
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    onClick={() => this.updateCart('increase', product.id, product.price)}
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                >
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <button className="btn btn-link btn-sm">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Product;

