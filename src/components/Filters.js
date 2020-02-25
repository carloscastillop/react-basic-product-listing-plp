import React from 'react';
import '../styles/App.scss';

class Filters extends React.Component {

    /**
     * Call setSelectedColour from props
     * @param event
     */
    setSelectedColour = (event) => {
        const selectedColour = event.target.value;
        this.props.setSelectedColour(selectedColour);
    }

    render() {
        const {colours} = this.props;

        return (
            <React.Fragment>
                <form className="my-4">
                    <div className="container">
                        {colours.length > 0 &&
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1" className="sr-only">Colour filter</label>
                            <select onChange={this.setSelectedColour} className="form-control"
                                    id="exampleFormControlSelect1">
                                <option value={''}>Filter by colour</option>
                                {
                                    colours.map((colour, key) => {
                                        return (
                                            <option
                                                key={'colour-' + colour + '-' + key}
                                                value={colour}
                                            >
                                                {colour}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>

                        }
                    </div>
                </form>
            </React.Fragment>
        )
    }
}

export default Filters;