import React, { Component } from "react";
import { Consumer } from "../../Context";
import axios from "axios";
import { Link } from "react-router-dom";
class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onDeleteClick = async (id, dispatch) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  onShowClick = (e) => {
    this.setState({
      showContactInfo: !this.state.showContactInfo,
    });
  };
  render() {
    const { id, name, email, phone } = this.props.contact;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;

          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  style={{
                    cursor: "pointer",
                  }}
                  className="fas fa-sort-down"
                  onClick={this.onShowClick}
                />
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                />
                <Link to={`contact/edit/${id}`}>
                  <i
                    className="fas fa-pencil-alt"
                    style={{
                      cursor: "pointer",
                      float: "right",
                      color: "black",
                      marginRight: "1rem",
                    }}
                  ></i>
                </Link>
              </h4>
              {this.state.showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email} </li>
                  <li className="list-group-item">Phone: {phone} </li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Contact;
