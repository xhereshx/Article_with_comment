import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Article from "./Components/Article";
import Comments from "./Components/Comments";
import MoreComments from "./Components/MoreComments";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        {
          id: 1,
          author: "Germán Toro",
          text: "Great!",
          date: "2017-09-11T12:00:39.430Z",
        },
        {
          id: 2,
          author: "Elena Builes",
          text: "Awesome!",
          date: "2017-09-11T12:30:39.430Z",
        },
      ],
      moreComments: [
        {
          id: 3,
          author: "Germán Toro",
          text: "Splendid!",
          date: "2017-09-11T14:30:05.919Z",
        },
        {
          id: 4,
          author: "Elena Builes",
          text: "Excelent!",
          date: "2017-09-11T11:30:05.919Z",
        },
      ],
      show: false,
    };
  }
  SeeAllComments = () => {
    // this.setState(!show);
    console.log("it work!"); // should cange to true and false
  };
  render() {
    const article = {
      Title: "Eliana Story ", // Title wasnt be in app.html
      author: "Eliana Franco",
      date: "2017-09-10T22:00:05.919Z",
      text: `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`,
    };

    return (
      <div>
        <Article article={article} date={article.date} />

        {this.state.comments.map((comment, i) => {
          return (
            <Comments
              key={comment.id}
              author={comment.author}
              text={comment.text}
              date={comment.date}
            />
          );
        })}
        <button onClick={() => this.SeeAllComments()}>See More Comments</button>
        {this.state.show === true ? (
          this.state.moreComments.map((comment, i) => {
            return (
              <MoreComments
                key={comment.id}
                author={comment.author}
                text={comment.text}
                date={comment.date}
              />
            );
          })
        ) : (
          <p>false</p>
        )}
        {/* {this.state.moreComments.map((comment, i) => {
          return (
            <MoreComments
              key={comment.id}
              author={comment.author}
              text={comment.text}
              date={comment.date}
            />
          );
        })} */}
      </div>
    );
  }
}

export default Application;

//comments={comments.author}
