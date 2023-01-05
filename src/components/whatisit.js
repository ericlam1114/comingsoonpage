import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  text: {
    display: "inline-block",
    // width: "100px",
    // height: "100px",
    // margin: "0 5px",
    // paddingTop: "14px",
    fontSize: "2rem",
    // borderRadius: "80px",
    color: "white",
    paddingTop: "4rem"
  }
}));
export default function whatisit() {
  const classes = useStyles();
  return (
    <div>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        className={classes.comingSoon}
        gutterBottom
      >
        <h2 className={classes.text}>What is it?</h2>
      </Typography>
    </div>
  );
}
