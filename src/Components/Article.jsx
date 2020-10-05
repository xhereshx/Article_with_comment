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
      <div className="article_Flexbox">
        <h1 className="article_title">{this.props.article.Title}</h1>
        <div className="article_nameanddate">
          <p>
            <b>{this.props.article.author}</b>
          </p>
          {/* Moment is for see time properly */}
          <p className="article_date">
            <Moment format="YYYY/DD/MM hh:mm:ss a" className="dateheight">
              {this.props.date}
            </Moment>
          </p>
        </div>

        <p>{this.props.article.text}</p>
      </div>
    );
  }
}

export default Article;
