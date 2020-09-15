import React, { Component } from "react";
import { Button, withStyles } from "@material-ui/core";
import styles from "./style";
import DetailCoursePage from "./pages/Detail";
import HomePage from "./pages/Home";
import SignInPage from "./pages/Signin";
import { connect } from "react-redux";
import { SET_TOKEN } from "./redux/actions/actionType";
import Checkout from "./pages/Checkout";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import SignupPage from "./pages/Signup";
class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      // <div className={classes.container}>
      //   <h1 className={classes.title}>
      //     <span>span</span>

      //     <span className="subtitle">span</span>
      //   </h1>
      //   <Button variant="contained" color="secondary">
      //     Secondary
      //   </Button>
      // </div>
      <BrowserRouter>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/detail" component={DetailCoursePage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    let token = localStorage.getItem("accessToken");
    if (token) {
      this.props.dispatch({ type: SET_TOKEN, payload: token });
    }
  }
}
export default withStyles(styles)(connect()(App));
