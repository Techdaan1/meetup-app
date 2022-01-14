import React, { Component } from "react";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.fontSize = 10;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: this.fontSize,
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "blue";
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "red";
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = "yellow";
  }
}

export { InfoAlert };
export { ErrorAlert };
export { WarningAlert };
