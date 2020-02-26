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
            if (id === item.id) {
                qty = item.qty
            }
        });
        return qty;
    }

    render() {
        const {product, cart} = this.props;
        const qty = this.qtyFilter(product.id, cart);
        const disabledState = (qty === '') ? true : false;

        return (
            <React.Fragment>
                <div className="col-12 col-lg-6 mb-4">
                    <div className="card h-100 " data-product-id={product.id}>
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={product.img} className="card-img card-img-left" alt="{product.name}"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="productInfo mb-3">
                                        <h2 className="h3 card-title">{product.name}</h2>
                                        <p className="text-muted small">{product.colour}</p>
                                        <p className="price">{Constant.CURRENCY}{product.price}</p>
                                    </div>
                                    <div className="qtyContainer mb-3 text-center">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button
                                                    onClick={() => this.updateCart('decrease', product.id, product.price)}
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    disabled={disabledState}
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
                                        <button
                                            onClick={() => this.updateCart('remove', product.id, product.price)}
                                            className="btn btn-link btn-sm"
                                            disabled={disabledState}
                                        >
                                            Remove
                                        </button>
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

