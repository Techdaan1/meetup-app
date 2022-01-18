import React, { Component } from "react";
import Event from "./Event";
import { Container } from "react-bootstrap";
import { WarningAlert } from "./Alert";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container className="eventlist-container">
        {!navigator.online ? (
          <WarningAlert text="You are offline! The displayed event list has been loaded from the cache." />
        ) : (
          <WarningAlert text="" />
        )}
        <ul className="eventlist">
          {events.map((event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default EventList;
