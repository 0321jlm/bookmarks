import React from "react";
import axios from "axios";

class NewForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.currentTarget.title]: event.currentTarget.value
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const baseURL = this.props.baseURL;
    const response = await axios.post(`${baseURL}/bookmarks`, {
      name: this.state.name
    });
    this.setState({
      title: "",
      url: ""
    });
    this.props.getBookmarks(response.data);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title"></label>
        <input
          type="text"
          id="type"
          name="type"
          onChange={this.handleChange}
          value={this.state.title}
          placeholder="add a book title"
        />
        <label htmlFor="title"></label>
        <input
          type="text"
          id="url"
          name="url"
          onChange={this.handleChange}
          value={this.state.url}
          placeholder="add a book image"
        />

        <input type="submit" value="Add a Book to the Book List" />
      </form>
    );
  }
}
export default NewForms;
