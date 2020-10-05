import React, { Component } from "react";
import "../App.scss";
import Moment from "react-moment";
import "moment-timezone";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <p>
          <b>{this.props.author}</b>
          <br />
          {/* Moment is for see time properly */}
          <Moment format="YYYY/DD/MM  hh:mm:ss a " className="dateheight">
            {this.props.date}
          </Moment>
        </p>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Comments;
