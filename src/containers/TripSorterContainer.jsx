import React from 'react';
import { connect } from 'react-redux';
import TripSorterSearchComponent from '../components/TripSorterSearchComponent';
import TripSorterResultComponent from '../components/TripSorterResultComponent';
import { fetchTripSorterDataIfNeeded, setIsSearch, setSearchResult } from '../actions/index';
import { dijkstra } from '../helpers/Utility'

class TripSorterContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: true
        };
        this.handleCalculate = this.handleCalculate.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    componentDidMount() {
        // const { dispatch } = this.props;
        this.props.dispatch(setIsSearch(true))
        this.props.dispatch(fetchTripSorterDataIfNeeded())
    }

    handleCalculate(from, to, cheapest, fastest){
        console.log('from'+ from)
        console.log('to'+ to)
        console.log('cheapest'+ cheapest)
        console.log('fastest'+ fastest)
        console.log(this.props.tripsorterdata.cheapestCities)
        let data = cheapest ? this.props.tripsorterdata.cheapestCities : this.props.tripsorterdata.fastestCities
        let res  = dijkstra(data, from, to)
        console.log("res :"+ JSON.stringify(res))
        this.props.dispatch(setIsSearch(false))
        this.props.dispatch(setSearchResult(res))
    }

    handleReset(){
        console.log("@handleReset")
        this.props.dispatch(setIsSearch(true))
    }

    render() {
        const { dispatch, tripsorterdata, searchVal } = this.props
        console.log(this.props.searchVal+"this.props.searchVal")
        console.log(" uniqueCities from reducer " + JSON.stringify(tripsorterdata.uniqueCities))
        console.log(" cheapestCities from reducer " + JSON.stringify(tripsorterdata.cheapestCities))
       
        return (
            <div className="container-wrapper">
                <h1 className="container-header">Trip Sorter</h1>
                {this.props.searchVal && <TripSorterSearchComponent cities={this.props.tripsorterdata.uniqueCities} cheapest={this.props.tripsorterdata.cheapestCities}  onSearch={this.handleCalculate}/>}
                { !this.props.searchVal && <TripSorterResultComponent res={this.props.searchres} onReset={this.handleReset} />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tripsorterdata: state.tripsorterdata,
        searchVal: state.setIsSearch.isSearch,
        searchres: state.setSearchResults.searchres
    }
};

export default connect(mapStateToProps)(TripSorterContainer)
