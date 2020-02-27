import React from 'react';
import '../styles/App.scss';

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <header
                    className="my-3"
                    data-testid="header"
                >
                    <div className="container">
                        <nav className="navbar navbar-light bg-light">
                            <span className="navbar-brand mb-0 h1">
                                <i className="fas fa-tshirt"></i> Clothing
                            </span>
                        </nav>
                    </div>
                </header>
            </React.Fragment>
        )
    }
}

export default Header;