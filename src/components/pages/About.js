import React from "react";
import Admin from "../images/Title.jpg";
export default function About() {
  return (
    <div>
      <center>
        <h1 className="display-4">About Contact Manager</h1>
        <img src={Admin} />
        <p className="lead">Simple App to manage contacts</p>
        <p className="text-secondary">Version 1.0.0</p>
      </center>
    </div>
  );
}
