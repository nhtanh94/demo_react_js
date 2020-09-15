import React, { Component } from "react";
import { getCourseDetail } from "../../redux/actions/courseAction";
import { connect } from "react-redux";
class DetailCoursePage extends Component {
  render() {
    return <div></div>;
  }
  renderDetail() {}

  componentDidMount() {
    this.props.dispatch(getCourseDetail("Backend_02"));
  }
}
const mapStateToProps = (state) => {
  return {
    //key là props
    listCourse: state.course.detailCourse,
  };
};
export default connect(mapStateToProps)(DetailCoursePage);
