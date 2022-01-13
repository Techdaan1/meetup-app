import React, { Component } from "react";
import { InfoAlert } from "./Alert";
import { Container, Row, Col } from "react-bootstrap";

class CitySearch extends Component {
  state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.setState({ showSuggestions: true });
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        infoText:
          "We can not find the city you are looking for. Please try another city",
      });
    } else {
      return this.setState({
        query: value,
        suggestions,
        infoText: "",
      });
    }
  };

  handleItemClicked = (suggestion) => {
    this.setState({
      query: suggestion,
      suggestions: [],
      showSuggestions: false,
      infoText: "",
    });

    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <Container className="CitySearch">
        <Row>
          <InfoAlert text={this.state.infoText} />
        </Row>
        <Row>
          <Col>
            <input
              type="text"
              className="city"
              placeholder="Search for city.."
              value={this.state.query}
              onChange={this.handleInputChanged}
              onFocus={() => {
                this.setState({ showSuggestions: true });
              }}
            />
            <ul
              className="suggestions"
              style={this.state.showSuggestions ? {} : { display: "none" }}
            >
              {this.state.suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  onClick={() => this.handleItemClicked(suggestion)}
                >
                  {suggestion}
                </li>
              ))}
              <li onClick={() => this.handleItemClicked("all")}>
                <b>See all cities</b>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CitySearch;
