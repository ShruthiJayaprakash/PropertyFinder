import React from 'react';

class TripSorterResultComponent extends React.Component {
    render() {
        return (
            <section className="result-component-wrapper">
                {/* <label htmlFor="pet-select">Choose a pet:</label> */}
                <div >
                    <p>Berlin > Germany 80$</p>
                    <p>bus car flight number</p>
                    <p>Berlin > Germany 80$</p>
                    <p>bus car flight number</p>
                    <p>Berlin > Germany 80$</p>
                    <p>bus car flight number</p>
                    <p>Berlin > Germany 80$</p>
                    <p>bus car flight number</p>
                </div>
                <div className="reset-section">
                    <button className="btn btn-success"><span className="glyphicon glyphicon-search" aria-hidden="true"> Reset</span></button>
                </div>
            </section>
        );
    }
}

export default TripSorterResultComponent;
