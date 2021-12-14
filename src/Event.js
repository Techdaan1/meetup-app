import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";

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
      <Card className="event">
        <Card.Header className="summary">{event.summary}</Card.Header>
        <Card.Body className="event-body">
          <p className="start-date">
            {event.start.dateTime} ({event.start.timeZone})
          </p>

          <p className="location">
            @{event.summary} | {event.location}
          </p>

          {!collapsed && (
            <div
              className={`extra-details ${
                this.state.collapsed ? "hide" : "show"
              }`}
            >
              <br />
              <h6 className="about">About Event</h6>
              <a href={event.htmlLink} target="_blank" rel="noreferrer">
                See deatails on Google calendar
              </a>
              <p className="event-description">{event.description}</p>
            </div>
          )}
          <Button
            variant="light"
            size="md"
            id="eventButton"
            className={`${collapsed ? "show" : "hide"}-details`}
            onClick={this.handleClick}
          >
            {collapsed ? "Show Details" : "Hide-Details"}
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Event;
