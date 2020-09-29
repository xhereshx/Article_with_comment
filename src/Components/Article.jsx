import React, { Component } from "react";
import "../App.scss";
import Moment from "react-moment";
import "moment-timezone";

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>{this.props.article.Title}</h1>
        <p>{this.props.article.author}</p>
        <Moment format="hh:mm:ss a YYYY/DD/MM ">{this.props.date}</Moment>

        <p>{this.props.article.text}</p>
        <br />
      </div>
    );
  }
}

export default Article;
