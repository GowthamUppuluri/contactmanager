import React, { Component } from "react";
import { Consumer } from "../../Context";
import Contact from "./Contact";
class Contacts extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              <h1 className="displlay-4 mb-2">
                <span className="text-danger">Contact List</span>
              </h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
export default Contacts;
