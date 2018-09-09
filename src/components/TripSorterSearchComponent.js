import React from 'react';

class TripSorterSearchComponent extends React.Component {
    render() {
        console.log("cities :" + JSON.stringify(this.props.cities))
        return (
            <section className="component-wrapper">
                {/* <label htmlFor="pet-select">Choose a pet:</label> */}
                <div className="form-group">
                    <select id="from-select" className="form-control">
                        <option value="">--From--</option>
                        {this.props.cities && this.props.cities.map(items =>
                            <option key={items}>{items}</option>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <select id="to-select" className="form-control">
                        <option value="">--To--</option>
                        {this.props.cities && this.props.cities.map(items =>
                            <option key={items}>{items}</option>
                        )}
                    </select>
                </div>


                <div className="btn-group">
                    <button className="btn btn-primary">Fastest</button>
                    <button className="btn btn-primary">Cheapest</button>
                </div>

                <div className="search-section">
                    <button className="btn btn-success"><span className="glyphicon glyphicon-search" aria-hidden="true"> Search</span></button>
                </div>
            </section>
        );
    }
}


export default TripSorterSearchComponent;
