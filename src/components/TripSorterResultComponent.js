import React from 'react';

class TripSorterResultComponent extends React.Component {
    render() {
        console.log("res : : :" + JSON.stringify(this.props.res))
        var res = this.props.res == undefined ? [] : this.props.res.detailedPath
        console.log("res :" + JSON.stringify(res))
        let totalCost = this.props.res && this.props.res.distance
        let totalDuartion = this.props.res && this.props.res.duration
        return (
            <section className="component-wrapper">
                {/* <label htmlFor="pet-select">Choose a pet:</label> */}
                <div >
                    {
                        res.map(items => {
                            return (<section className="component-section">
                                <p > {`${items.departure}    >   ${items.arrival}    ${items.cost}$`} </p>
                                <p> {`${items.transport}   ${items.reference}  for  ${items.duration}`}  </p>
                            </section>)
                        })
                    }
                    <section className="component-section">
                        <p > {`Total :   Cost: ${totalCost}   Duartion: ${totalDuartion}`} </p>
                    </section>
                </div>
                <div className="reset-section">
                    <button className="btn btn-success" onClick={this.props.onReset}><span className="glyphicon glyphicon-search" aria-hidden="true"> Reset</span></button>
                </div>
            </section>
        );
    }
}

export default TripSorterResultComponent;
