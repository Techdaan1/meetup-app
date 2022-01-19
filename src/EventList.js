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
            <WarningAlert text="" />
          ) : (
            <WarningAlert text="You are offline! The displayed event list has been loaded from the cache." />
          )}
          <Row className="d-flex justify-content-center event-list-wrapper">
            <ul className="eventlist">
              {events.map((event) => (
                <Col sm={12} md={6} lg={4} key={event.id}>
                  <Event event={event} />
                </Col>
              ))}
            </ul>
          </Row>
        </Row>
      </Container>
    );
  }
}

export default EventList;
