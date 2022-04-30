import React, { Component } from 'react';

class NumberOfEvents extends Component {


  render() {
    return (
      <div className="NumberOfEvents">
        <input 
          className="number-of-events"
          type="number"
          defaultValue={this.props.numberOfEvents}>
        </input>
      </div>
    );
  }
}

export default NumberOfEvents;