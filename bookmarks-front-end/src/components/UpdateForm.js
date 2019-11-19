import React from "react";

class UpdateForm extends React.Component {
  render() {
    return (
      <div className="modal edit">
        <form>
          <div className="row">
            <label htmlFor="title">Title:</label>
            <input type="text" id="name" />
            <label htmlFor="url">URL:</label>
            <input type="text" id="url" />
            <input
              type="submit"
              value="Update Bookmark"
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
