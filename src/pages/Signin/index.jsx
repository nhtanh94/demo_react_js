import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Typography,
  TextField,
  Box,
  Button,
  Container,
} from "@material-ui/core";
import { signin, signIn } from "../../redux/actions/userAction";
import Header from "../../components/Header";
import wrapper from "../../HOCs/fuctionWrapper";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      credentials: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.credentials);
    this.props.dispatch(signIn(this.state.credentials));
  };
  render() {
    return (
      <Box>
        <Container maxWidth="sm">
          <Typography component="h1" varient="h1">
            Signin
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <Box my={2}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="User Name"
                variant="outlined"
                name="taiKhoan"
                onChange={this.handleChange}
              />
            </Box>
            <Box my={2}>
              <TextField
                type="password"
                fullWidth
                id="outlined-basic"
                label="Password"
                variant="outlined"
                name="matKhau"
                onChange={this.handleChange}
              />
            </Box>
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Submit
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    );
  }
}

export default connect()(wrapper(SignInPage));
