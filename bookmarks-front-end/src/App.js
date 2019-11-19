import React, { Component } from "react";
import axios from "axios";
import NewForms from "./components/NewForms.js";
import "./App.css";
let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: []
    };
    this.getBookmarks = this.getBookmarks.bind(this);
  }

  async getBookmarks() {
    const response = await axios.get(`${baseURL}/bookmarks`);
    const data = response.data;
    this.setState({
      bookmarks: data
    });
  }

  componentDidMount() {
    this.getBookmarks();
  }

  render() {
    return (
      <div className="container">
        <h1>Bookmarks</h1>
        <h3>Add a new bookmark</h3>
        <NewForms getBookmarks={this.getBookmarks} baseURL={baseURL} />
        <ul>
          {this.state.bookmarks.map(bookmark => {
            return <li key={bookmark._id}>{bookmark.title}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default App;
