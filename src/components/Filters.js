import React from 'react';
import '../styles/App.scss';

class Filters extends React.Component {
    render() {
        return (
            <React.Fragment>
                <form className="my-4">
                    <div className="container">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1" className="sr-only">Colour filter</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option>Filter by colour</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Filters;