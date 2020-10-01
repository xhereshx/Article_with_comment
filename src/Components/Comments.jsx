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
        {/* {this.props.comments.map((comment) => (
          <li>{comment}</li>
        ))} */}
        {/* {console.log(this.props.author)} */}
        <p>{this.props.author}</p>
        <p>{this.props.text}</p>
        <Moment format="hh:mm:ss a YYYY/DD/MM ">{this.props.date}</Moment>
        <br />
        <br />
      </div>
    );
  }
}

export default Comments;
