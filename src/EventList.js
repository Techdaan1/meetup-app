import React, { Component } from "react";
import Event from "./Event";
import { Container, Row, Col } from "react-bootstrap";
import { WarningAlert } from "./Alert";

class EventList extends Component {
  render() {
    const { events } = this.props;
    return (
      <Container className="eventlist-container">
        <Row>
          {!navigator.onLine ? (
            <WarningAlert text="You are offline! The displayed event list has been loaded from the cache." />
          ) : (
            <WarningAlert text="" />
          )}
          <Col>
            <ul className="eventlist">
              {events.map((event) => (
                <li key={event.id}>
                  <Event event={event} />
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EventList;
