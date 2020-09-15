import React, { Component } from "react";
import Header from "../components/Header";

class Wrapper extends Component {
  render() {
    return (
      <div>
        <Header>{this.props.children}</Header>
        <footer>This footer</footer>
      </div>
    );
  }
}
export default Wrapper;
