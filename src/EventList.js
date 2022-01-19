import React, { Component } from "react";
import Event from "./Event";
import { Container, Row } from "react-bootstrap";
import { WarningAlert } from "./Alert";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container className="eventlist-container">
        <Row>
          <ul className="eventlist">
            {events.map((event) => (
              <li key={event.id}>
                <Event event={event} />
              </li>
            ))}
          </ul>
        </Row>
      </Container>
    );
  }
}

export default EventList;
