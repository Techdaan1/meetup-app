import React, { Component } from "react";
import Event from "./Event";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <ul className="eventlist">
        {events.map((event) => (
          <li key={event.id}>
            <Event event={event} className="event" />
          </li>
        ))}
      </ul>
    );
  }
}

export default EventList;
