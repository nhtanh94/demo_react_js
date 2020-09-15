import { connector } from "../../configs/restConnector";
export const getListCourse = () => {
  return (dispatch) => {
    //call api
    connector({
      url:
        "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "GET_LIST_COURSE",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
export const getCourseDetail = (maKhoaHoc) => {
  return (dispatch) => {
    //call api
    connector({
      url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      method: "GET",
    })
      .then((res) => {
        console.log("GET_DETAIL_COURSE " + res);
        dispatch({
          type: "GET_DETAIL_COURSE",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
