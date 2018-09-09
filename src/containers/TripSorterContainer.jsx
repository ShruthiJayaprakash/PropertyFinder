import React from 'react';
import { connect } from 'react-redux';
import TripSorterSearchComponent from '../components/TripSorterSearchComponent';
import TripSorterResultComponent from '../components/TripSorterResultComponent';
import { fetchTripSorterDataIfNeeded, setIsSearch } from '../actions/index'

class TripSorterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: true
        };
    }

    componentDidMount() {
        // const { dispatch } = this.props;
        this.props.dispatch(setIsSearch(true))
        this.props.dispatch(fetchTripSorterDataIfNeeded())
    }

    render() {
        const { dispatch, tripsorterdata, searchVal } = this.props
        console.log(" tripsorterdata from reducer " + JSON.stringify(tripsorterdata.uniqueCities))
        console.log(" tripsorterdata from reducer " + JSON.stringify(this.props.tripsorterdata))
        console.log(" searchVal from reducer " + this.props.searchVal)
       
        return (
            <div className="container-wrapper">
                <h1>Trip Sorter</h1>
                {this.props.searchVal && <TripSorterSearchComponent cities={this.props.tripsorterdata.uniqueCities} cheapest={tripsorterdata.uniqueCities}/>}
                { !this.props.searchVal && <TripSorterResultComponent />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tripsorterdata: state.tripsorterdata,
        searchVal: state.setIsSearch.isSearch
    }
};

export default connect(mapStateToProps)(TripSorterContainer)
