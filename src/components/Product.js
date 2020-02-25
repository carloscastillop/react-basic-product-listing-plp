import React from 'react';
import '../styles/App.scss';

class Product extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="card mb-4">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src="https://via.placeholder.com/600x600" className="card-img" alt="..."/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="h4 card-title">Product name</h2>
                                <p className="text-muted small">Colour</p>
                                <p className="price">$100</p>
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

