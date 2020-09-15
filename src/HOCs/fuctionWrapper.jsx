import React from "react";
import Header from "../components/Header";

const wrapper = (Component) => {
  return (props) => {
    return (
      <>
        <Header></Header>
        <Component {...props} />
        <footer>This is a footer</footer>
      </>
    );
  };
};
export default wrapper;
