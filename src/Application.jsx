import React, { Component } from "react";
import "./App.scss";
import Article from "./Components/Article";
import Comments from "./Components/Comments";

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
      sortedCommentsOne: [],
      sortedCommentsTwo: [],
      commentsDelay: false,
      // delayTest: true,
      time: 1000,
      buttonDelay: false,
      buttonTime: 2000,
    };
  }

  SeeAllComments = () => {
    this.setState({ show: !this.state.show });
  };
  componentWillReceiveProps(nextProps) {
    console.log("Component Will recieve props", nextProps);
  }
  // onChangedelayTest() {
  //   this.setState({ delayTest: !this.state.delayTest });
  // }

  sortMoreComments = () => {
    this.setState({
      sortedCommentsTwo: this.state.moreComments.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
      }),
    });
    console.log(this.state.sortedCommentsTwo);
  }; // to sort moreComments

  sortComments = () => {
    this.setState({
      sortedCommentsOne: this.state.comments.sort((a, b) => {
        return a.date < b.date ? 1 : -1;
      }),
    });
    console.log(this.state.sortedCommentsOne);
  }; // to sort Comments

  delayfunction = () => {
    setTimeout(() => {
      this.setState({ commentsDelay: true });
    }, this.state.time); // time shouldnt be here, it should be here something else
    setTimeout(() => {
      this.setState({ buttonDelay: true });
    }, this.state.buttonTime);
  };
  componentDidMount() {
    this.sortComments();
    this.sortMoreComments();
    this.delayfunction();
  }

  render() {
    const article = {
      Title: "Eliana Story ", // Title wasnt be in app.html
      author: "Eliana Franco",
      date: "2017-09-10T22:00:05.919Z",
      text: `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`,
    };
    let commentsDelay = "";
    if ((<Article />)) {
      commentsDelay = this.state.sortedCommentsOne.map((comment, i) => {
        return this.state.commentsDelay ? (
          <Comments
            key={comment.id}
            author={comment.author}
            text={comment.text}
            date={comment.date}
          />
        ) : (
          <p key={i}>Loading Comments...</p> // key is here to fix warning
        );
      });
    }
    let button = "";
    if (commentsDelay) {
      button = this.state.buttonDelay ? (
        <button onClick={() => this.SeeAllComments()}>
          {this.state.show === false
            ? "See more comments"
            : "See less comments"}
        </button>
      ) : (
        <p>Button Loading...</p>
      );
    }
    let moreCommentsDelay = "";
    if (button) {
      moreCommentsDelay =
        this.state.show === true ? (
          this.state.sortedCommentsTwo.map((comment, i) => {
            return (
              this.state.commentsDelay && (
                <Comments
                  key={comment.id}
                  author={comment.author}
                  text={comment.text}
                  date={comment.date}
                />
              )
            );
          })
        ) : (
          <p></p>
        );
    }
    return (
      <div>
        <Article article={article} date={article.date} />

        {commentsDelay}
        {button}
        {moreCommentsDelay}
      </div>
    );
  }
}

export default Application;
