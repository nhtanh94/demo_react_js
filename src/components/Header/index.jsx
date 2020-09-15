import React, { Component } from "react";
import {
  Typography,
  TextField,
  Box,
  Button,
  Container,
} from "@material-ui/core";
import { connect } from "react-redux";
import { NavNavLink, NavLink } from "react-router-dom";
class Header extends Component {
  render() {
    return (
      <Box textAlign="right" bgcolor="black" py={2} px={3}>
        <NavLink to="/" activeStyle={{ color: "pink" }} exact>
          Home
        </NavLink>
        {this.props.isLogin ? (
          <Typography
            style={{ margin: 10 }}
            color="secondary"
            component="a"
            href="#"
            varient="subtitle1"
          >
            Hello Friend
          </Typography>
        ) : (
          <>
            {/* <Typography
              style={{ margin: 10 }}
              color="secondary"
              component="a"
              href="#"
              varient="subtitle1"
              href="/signin"
            >
              SignIn
            </Typography> */}
            <NavLink to="/signin" activeStyle={{ color: "pink" }}>
              SignIn
            </NavLink>
            <NavLink to="/signup" activeStyle={{ color: "pink" }}>
              SignUp
            </NavLink>
            {/* <Typography
              color="textPrimary"
              component="a"
              href="#"
              varient="subtitle1"
              href="/signup"
            >
              SignUp
            </Typography> */}
          </>
        )}
      </Box>
    );
  }
}
const mapStateToProps = (state) => ({
  isLogin: !!state.auth.token, //convert string null to bool
});

export default connect(mapStateToProps)(Header);

// export default connect((state) => ({
//     isLogin: !!state.auth.token, //convert string null to bool
//   });)(Header);
