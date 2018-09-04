import React from 'react';
import TripSorterSearchComponent from '../components/TripSorterSearchComponent';

class TripSorterContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="container-wrapper">
                <h1>Trip Sorter</h1>
                <TripSorterSearchComponent />
            </div>
        );
    }
}

export default TripSorterContainer;