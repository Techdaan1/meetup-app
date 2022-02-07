import React, { Component } from "react";
import { InfoAlert } from "./Alert";
// import { Container, Row, Col } from "react-bootstrap";
import "./CitySearch.css";

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
      <div className="CitySearch">
        <p>Choose desired city:</p>
        <div>
          <input
            type="text"
            className="city"
            placeholder="Search.."
            value={this.state.query}
            onChange={this.handleInputChanged}
            onFocus={() => {
              this.setState({ showSuggestions: true });
            }}
          />
          <InfoAlert className="alert" text={this.state.infoText} />
        </div>
        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          <br />
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
      </div>
    );
  }
}

export default CitySearch;
