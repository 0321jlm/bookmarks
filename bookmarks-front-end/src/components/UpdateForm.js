import React from "react";
import axios from "axios";

class UpdateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarks: [],
      bookmark: {},
      title: ""
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  // handleChange(event) {
  //   console.log("event ", event.currentTarget.name);
  //   console.log("event ", event.currentTarget.value);
  //   this.setState({
  //     [event.currentTarget.name]: event.currentTarget.value
  //   });
  // }

  async Update(updatedBookmark) {
    // const updatedHoliday = {
    //   ...selectedHoliday,
    //   celebrated: !selectedHoliday.celebrated
    // };

    await axios.put(
      `${this.props.baseURL}/bookmarks/${updatedBookmark._id}`,
      updatedBookmark
    );
    // const updatedHolidays = this.state.holidays.map(holiday => {
    // if (holiday._id === selectedHolidayId) {
    //   const updatedHoliday = {
    //     ...selectedHoliday,
    //     celebrated: !selectedHoliday.celebrated
    //   };
    //   return updatedHoliday;
    // } else {
    //   return holiday;
    // }
    // }

    // this.setState({
    //   holidays: updatedHolidays
    // });
  }

  render() {
    return (
      <div className="modal edit">
        <h1>update</h1>
        <p>id = {this.props.bookmark._id}</p>
        <form onSubmit={() => this.Update(this.props.bookmark)}>
          <div className="row">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={this.props.handleChange}
              value={this.props.bookmark.title}
            />
            <label htmlFor="url">URL:</label>
            <input
              type="text"
              name="url"
              id="url"
              onChange={this.props.handleChange}
              value={this.props.bookmark.url}
            />
            <input
              type="submit"
              name="submit"
              value={this.props.name}
              className="button-primary"
            />
            <button className="button-red">Update</button>
          </div>
        </form>
      </div>
    );
  }
}

export default UpdateForm;
