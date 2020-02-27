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
    qtyFilter = (product, cart) => {
        let qty = '';
        if (!cart || !product) {
            return;
        }
        cart.forEach((item) => {
            if (item.hasOwnProperty('id') && product.id === item.id) {
                return qty = item.qty
            }
        });
        return (qty > 0) ? qty : '';
    }

    render() {
        const {product, cart} = this.props;
        const qty = this.qtyFilter(product, cart);
        const disabledState = (qty === '' || qty < 1) ? true : false;

        return (
            <React.Fragment>
                {product &&
                <div className="col-12 col-lg-6 mb-4">
                    <div
                        className="card h-100"
                        data-product-id={product.id}
                        data-testid="productCard"
                    >
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                {(product.img && product.img !== '') ?
                                    (
                                        <img
                                            src={product.img}
                                            className="card-img card-img-left"
                                            alt={product.name}
                                            data-testid="productCardImage"
                                        />
                                    ) : (
                                        <img
                                            src="https://via.placeholder.com/500x900?text=Soon"
                                            className="card-img card-img-left"
                                            alt={product.name}
                                            data-testid="productCardNoImage"
                                        />
                                    )

                                }
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div className="productInfo mb-3">
                                        <h2
                                            className="h3 card-title"
                                            data-testid="productCardTitle"
                                        >
                                            {product.name}
                                        </h2>
                                        <p
                                            className="text-muted small"
                                            data-testid="productCardColour"
                                        >
                                            {product.colour}
                                        </p>
                                        <p
                                            className="price"
                                            data-testid="productCardPrice"
                                        >
                                            {Constant.CURRENCY}{product.price}
                                        </p>
                                    </div>
                                    <div className="qtyContainer mb-3 text-center">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <button
                                                    onClick={() => this.updateCart('decrease', product.id, product.price)}
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    disabled={disabledState}
                                                    data-testid="productCardDecrease"
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
                                                data-testid="productCardQtyInput"
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    onClick={() => this.updateCart('increase', product.id, product.price)}
                                                    className="btn btn-outline-secondary"
                                                    type="button"
                                                    data-testid="productCardIncrease"
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
                }
            </React.Fragment>
        )
    }
}

export default Product;

