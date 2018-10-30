import React, { Component } from "react";
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  render() {
    let cardList = this.props.authors.map(author => (
      <AuthorCard author={author} key={author.first_name} />
    ));
    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{cardList}</div>
      </div>
    );
  }
}
export default AuthorList;
