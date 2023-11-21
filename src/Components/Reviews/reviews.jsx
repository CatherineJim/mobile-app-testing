import React, { Component } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./reviews.module.css";

const user = "Kate";

const offensiveWords = ["bad", "die", "kill"];

class ReviewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: "",
      file: null,
      comments: [],
      isOffensive: false,
    };
  }

  handleCommentChange = (event) => {
    const commentText = event.target.value;
    this.setState({
      commentText,
      isOffensive: containsOffensiveWords(commentText),
    });
  };

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleSubmitComment = () => {
    const { commentText, file, isOffensive } = this.state;

    if (
      commentText.trim() !== "" &&
      !isOffensive &&
      (commentText.trim() !== "" || file)
    ) {
      // Assuming you have access to the authenticated user's name
      const userName = user.displayName; // Replace 'user.displayName' with the actual way you access the user's name

      // Create an object to represent the comment with user name, text, and file
      const newComment = {
        userName: userName,
        text: commentText,
        file: file,
      };

      this.setState((prevState) => ({
        comments: [...prevState.comments, newComment],
        commentText: "", // Clear the input field
        file: null, // Clear the file input
      }));
    }
  };

  handleDeleteComment = (index) => {
    const comments = [...this.state.comments];
    comments.splice(index, 1);
    this.setState({ comments });
  };

  render() {
    return (
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Write your reviews here..."
          value={this.state.commentText}
          onChange={this.handleCommentChange}
        />
        <br />
        <input
          type="file"
          accept="image/*, .pdf, .doc, .docx"
          onChange={this.handleFileChange}
        />
        <br />
        {this.state.isOffensive && (
          <p style={{ color: "red" }}>
            This comment contains offensive words. Please review it.
          </p>
        )}
        <button
          style={{ width: "410px" }}
          onClick={this.handleSubmitComment}
          disabled={this.state.isOffensive}
        >
          Submit Comment
        </button>

        <div>
          <h2 style={{ fontSize: "20px" }}>Comments:</h2>
          <ul>
            {this.state.comments.map((comment, index) => (
              <li key={index}>
                <strong>{comment.userName}:</strong> {comment.text}
                {comment.file && (
                  <a
                    href={URL.createObjectURL(comment.file)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Attachment
                  </a>
                )}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => this.handleDeleteComment(index)}
                >
                  <FontAwesomeIcon icon={faTrash} style={{ color: "white" }} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default ReviewPage;

function containsOffensiveWords(comment) {
  const lowerCaseComment = comment.toLowerCase();
  return offensiveWords.some((word) => lowerCaseComment.includes(word));
}
