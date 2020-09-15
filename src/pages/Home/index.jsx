import React, { Component } from "react";
import { connect } from "react-redux";
import { getListCourse } from "../../redux/actions/courseAction";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  CardActions,
  Button,
  withStyles,
  withTheme,
} from "@material-ui/core";
import style from "./style";
import wrapper from "../../HOCs/fuctionWrapper";
class HomePage extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Danh sách khóa học</h2>
        <Container maxWidth="lg">
          <Grid container>{this.renderListCourse()}</Grid>
          {/* <div className="row">{this.renderListCourse()}</div> */}
        </Container>
      </div>
    );
  }
  renderListCourse = () => {
    return this.props.listCourse.map((course, index) => {
      return (
        <Grid item xs={4} md={3} lg={4} key={index}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={this.props.classes.media}
                image={course.hinhAnh}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {course.tenKhoaHoc}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  Lizard
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Learn More
              </Button>
            </CardActions>
          </Card>
        </Grid>
        // <div className="col-3" key={index}>
        //   <div className="card text-left">
        //     <img className="card-img-top" src={course.hinhAnh} alt />
        //     <div className="card-body">
        //       <h4 className="card-title">Title</h4>
        //       <p className="card-text">Body</p>
        //     </div>
        //   </div>
        // </div>
      );
    });
  };
  componentDidMount() {
    this.props.dispatch(getListCourse());
  }
}
const mapStateToProps = (state) => {
  return {
    //key là props
    listCourse: state.course.listCourse,
  };
};
const HomePageWithHeaderAndFooter = wrapper(HomePage);
export default connect(mapStateToProps)(
  withStyles(style, { withTheme: true })(HomePageWithHeaderAndFooter)
);
