import React from 'react';

class TripSorterResultComponent extends React.Component {
    render() {
        return (
            <section className="component-wrapper">
                {/* <label htmlFor="pet-select">Choose a pet:</label> */}
                <div className="form-group">
                    <select id="pet-select" className="form-control">
                        <option value="">--From--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                </div>

                <div className="form-group">
                    <select id="pet-select" className="form-control">
                        <option value="">--To--</option>
                        <option value="dog">Dog</option>
                        <option value="cat">Cat</option>
                        <option value="hamster">Hamster</option>
                        <option value="parrot">Parrot</option>
                        <option value="spider">Spider</option>
                        <option value="goldfish">Goldfish</option>
                    </select>
                </div>

                <div className="btn-group">
                    <button className="btn btn-primary">Fastest</button>
                    <button className="btn btn-primary">Cheapest</button>
                </div>

                <div className="search-section">
                    <button className="btn btn-success"><span className="glyphicon glyphicon-search" aria-hidden="true"> Reset</span></button>
                </div>
            </section>
        );
    }
}

export default TripSorterResultComponent;
