import React, { Component } from "react";

class Event extends Component {
  state = {
    event: {},
    collapsed: true,
  };

  handleClick = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { event } = this.props;
    const { collapsed } = this.state;
    
        return (
        <div className='event'>
           <h2 className="summary">{event.summary}</h2>
        <p className="startTime">
          {event.start.dateTime}
          <span className="timeZone">({event.start.timeZone})</span>
        </p>
        <p className="location">
         {event.location}
        </p>

        {!collapsed && (
          <div
            className={`details-view-${this.state.collapsed ? 'hide' : 'show'}`}
          >
            <br />
            <h3 className="about">About Event</h3>
            
            <p id="event-description" className="description">
              {event.description}
            </p>
            <a
              className="htmlLink"
              href={event.htmlLink}
               // eslint-disable-next-line 
              target="_blank"
              rel="noreferrer"
            >
              See details on Google calendar
            </a>
          </div>
        )}
        <button
          id="eventButton"
          className={`${collapsed ? 'show' : 'hide'}-details-btn`}
          onClick={this.handleClick}
        >
          {collapsed ? 'Show Details' : 'Hide Details'}
        </button>
        </div>
        );
    }
  }
export default Event;