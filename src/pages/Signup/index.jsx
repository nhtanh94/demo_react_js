import React, { Component } from "react";
import { signup } from "../../redux/actions/userAction";
import { connect } from "react-redux";
import wrapper from "../../HOCs/fuctionWrapper";
class SignupPage extends Component {
  state = {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "",
    email: "",
  };
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value, //object literal
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(signup(this.state));
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Tài Khoản</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              name="taiKhoan"
            />
          </div>
          <div className="form-group">
            <label>Mật Khẩu</label>
            <input
              type="password"
              className="form-control"
              onChange={this.handleChange}
              name="matKhau"
            />
          </div>
          <div className="form-group">
            <label>Họ Tên</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              name="hoTen"
            />
          </div>
          <div className="form-group">
            <label>Số Điện Thoại</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
              name="soDT"
            />
          </div>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              onChange={this.handleChange}
              name="email"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default connect()(wrapper(SignupPage));
