import { connector } from "../../configs/restConnector";
import { SET_TOKEN } from "./actionType";
export const signup = (user) => {
  return (dispatch) => {
    //call api
    connector({
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((res) => {
        alert("Thanh Cong");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const signIn = (data) => {
  return (dispatch) => {
    //call api
    connector({
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data,
    })
      .then((res) => {
        console.log(res);
        localStorage.setItem("accessToken", res.data.accessToken);
        dispatch({ type: SET_TOKEN, payload: res.data.accessToken });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
