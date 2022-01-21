import React, { Component } from "react";
import { ErrorAlert } from "./Alert";
import { Container, Row, Col } from "react-bootstrap";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const number = event.target.value;
    if (number <= 0 || number > 32) {
      this.setState({
        infoText: "Enter number between 1 and 32",
      });
    } else {
      this.setState({
        infoText: "",
      });
    }
  };

  render() {
    return (
      <Container className="NumberOfEvents">
        <Row>
          <Col>
            <p>Number of events:</p>
            <input
              type="number"
              className="new-number-of-events"
              value={this.state.numberOfEvents}
              onChange={this.handleInputChanged}
            />
          </Col>
          <Col>
            <ErrorAlert text={this.state.infoText} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NumberOfEvents;
