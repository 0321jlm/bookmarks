import React, { Component } from "react";
import axios from "axios";
import NewForms from "./components/NewForms.js";
import UpdateForm from "./components/UpdateForm.js";
import "./App.css";
let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      bookmark: {},
      title: ""
    };
    this.getBookmarks = this.getBookmarks.bind(this);

    this.toggleUpdateForm = this.toggleUpdateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.deleteBookmark = this.deleteBookmark.bind(this);
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

  async toggleUpdateForm(bookmark, id) {
    console.log("modal", bookmark.title);
    // event.preventDefault();
    this.setState({
      bookmark: bookmark
    });
    // alert("hold");
  }

  async deleteBookmark(id) {
    await axios.delete(`${baseURL}/bookmarks/${id}`);
    const filteredBookmarks = this.state.bookmarks.filter(bookmark => {
      return bookmark._id !== id;
    });
    this.setState({
      bookmarks: filteredBookmarks
    });
  }
  //
  handleChange(event) {
    console.log("event ", event.currentTarget.name);
    console.log("event ", event.currentTarget.value);
    this.setState({
      bookmark: {
        ...this.state.bookmark,
        [event.currentTarget.name]: event.currentTarget.value
      }
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Bookmarks</h1>
        <h3>Add a new bookmark</h3>
        <NewForms getBookmarks={this.getBookmarks} baseURL={baseURL} />
        <ul>
          {this.state.bookmarks.map(bookmark => {
            return (
              <li key={bookmark._id}>
                {bookmark.title}
                <a href={bookmark.url}>{bookmark.url}</a>
                <button onClick={() => this.deleteBookmark(bookmark._id)}>
                  DELETE
                </button>

                <button
                  onClick={() => this.toggleUpdateForm(bookmark, bookmark.id)}
                >
                  UPDATE
                </button>
              </li>
            );
          })}
        </ul>
        {/* <p>Fred {this.state.bookmark.title}</p> */}
        <UpdateForm
          handleChange={this.handleChange}
          baseURL={baseURL}
          bookmark={this.state.bookmark}
        />
      </div>
    );
  }
}

export default App;
