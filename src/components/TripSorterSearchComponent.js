import React from 'react';

class TripSorterSearchComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cheapest: true,
            fastest: false,
            travelFrom: '',
            travelTo: ''
        }
        this.handleButtonClick = this.handleButtonClick.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleTravel = this.handleTravel.bind(this)
    }

    handleButtonClick(e) {
        e.target.id === 'cheapest' ? this.setState({ cheapest: !this.state.cheapest, fastest: false }) : this.setState({ fastest: !this.state.fastest, cheapest: false })
    }

    handleSearch() {
        this.props.onSearch(this.state.travelFrom, this.state.travelTo, this.state.cheapest, this.state.fastest)
    }

    handleTravel(e) {
        e.target.id === 'travelFrom' ?
            this.setState({ travelFrom: e.target.value })
            : this.setState({ travelTo: e.target.value })
    }

    render() {
        return (
            <section className="component-wrapper">
                <div className="form-group">
                    <select id="travelFrom" className="form-control" onChange={this.handleTravel}>
                        <option value="">--From--</option>
                        {this.props.cities && this.props.cities.map(items =>
                            <option key={items}>{items}</option>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <select id="travelTo" className="form-control" onChange={this.handleTravel}>
                        <option value="">--To--</option>
                        {this.props.cities && this.props.cities.map(items =>
                            <option key={items}>{items}</option>
                        )}
                    </select>
                </div>


                <div className="btn-group">
                    <button className={`btn btn-${this.state.fastest ? 'primary' : 'default'}`} id="fastest" onClick={this.handleButtonClick}>Fastest</button>
                    <button className={`btn btn-${this.state.cheapest ? 'primary' : 'default'}`} id="cheapest" onClick={this.handleButtonClick}>Cheapest</button>
                </div>

                <div className="search-section">
                    <button className="btn btn-success" onClick={this.handleSearch}><span className="glyphicon glyphicon-search" aria-hidden="true"> Search</span></button>
                </div>
            </section>
        );
    }
}


export default TripSorterSearchComponent;
