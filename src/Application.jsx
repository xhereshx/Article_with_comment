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
      time: 1000,
      buttonDelay: false,
      buttonTime: 2000,
      // comments: [], // if we fetch comments data from existing url
    };
  }
  //code which can be used for fetching data about comments, doesnt work now
  fetchItem = async () => {
    const fetchcomments = await fetch(
      `adress from which we are planning to fetch comments(or aticles)`
    );

    const comments = await fetchcomments.json();
    this.setState(comments);

    console.log(comments);
  };
  // show change button to see comments or dont see them
  SeeAllComments = () => {
    this.setState({ show: !this.state.show });
  };
  // to sort Comments
  sortComments = () => {
    this.setState({
      sortedCommentsOne: this.state.comments.sort((a, b) => {
        return a.date > b.date ? 1 : -1;
      }),
    });
  };
  // to sort moreComments
  sortMoreComments = () => {
    this.setState({
      sortedCommentsTwo: this.state.moreComments.sort((a, b) => {
        return a.date > b.date ? 1 : -1;
      }),
    });
  };

  // to delay components to see they are rendered one by one
  delayfunction = () => {
    setTimeout(() => {
      this.setState({ commentsDelay: true });
    }, this.state.time); // time shouldnt be here, it should be here something else
    setTimeout(() => {
      this.setState({ buttonDelay: true });
    }, this.state.buttonTime);
  };
  // to run functions after component did mount. Without this you need onclick or something like that
  componentDidMount() {
    this.sortComments();
    this.sortMoreComments();
    this.delayfunction();
    // this.fetchItem();
  }

  render() {
    // this info should be in state, because it would be probably fetch from API as well as Comments info.
    const article = {
      Title: "Eliana Story ", // Title wasnt be in app.html
      author: "Eliana Franco",
      date: "2017-09-10T22:00:05.919Z",
      text: `Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. We swallow it too fast, we choke. We get some in our lungs, we drown. However unreal it may seem, we are connected, you and I. We're on the same curve, just on opposite ends.`,
    };
    // this code is to render Comments component after Article component is rendered. And for loop throw comments
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
    // this code is to render button after Comments component is rendered.
    let button = "";
    if (commentsDelay) {
      button = this.state.buttonDelay ? (
        <button className="button" onClick={() => this.SeeAllComments()}>
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
            return this.state.commentsDelay ? (
              <Comments
                key={comment.id}
                author={comment.author}
                text={comment.text}
                date={comment.date}
              />
            ) : (
              <p key={i}>Loading Comments...</p>
            );
          })
        ) : (
          <p></p>
        );
    }
    return (
      <div>
        <Article article={article} date={article.date} />
        <div className="application_pagging">
          {commentsDelay}
          {button}
          {moreCommentsDelay}
        </div>
      </div>
    );
  }
}

export default Application;
