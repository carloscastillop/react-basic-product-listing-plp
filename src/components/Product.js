import React from 'react';
import '../styles/App.scss';

class Product extends React.Component {
    render() {
        const product = this.props.product;
        return (
            <React.Fragment>
                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={product.img} className="card-img" alt="{product.name}"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="h4 card-title">{product.name}</h2>
                                <p className="text-muted small">{product.colour}</p>
                                <p className="price">{product.price}</p>
                                <div className="qtyContainer mb-3 text-center">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <button className="btn btn-outline-secondary" type="button">
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control text-center" placeholder="Qty"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button">
                                                <i className="fas fa-minus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <button className="btn btn-link btn-sm">Remove</button>
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

