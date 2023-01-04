import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Countdown from "react-countdown-now";
import logo from "./assets/logo.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  circle: {
    borderRadius: "90px",
    borderColor: "gray",
    borderStyle: "dotted",
    borderWidth: "2px",
    width: "70px",
    height: "70px",
    paddingTop: "15px",
    paddingLeft: "8.5px",
    marginLeft: "5px",
    marginRight: "5px",
  },
  counter: {
    fontSize: "30px",
  },
  box: {
    display: "inline-block",
    width: "100px",
    height: "100px",
    margin: "0 5px",
    paddingTop: "14px",
    fontSize: "16px",
    borderRadius: "80px",
    color: "white",
  },

  logo: {
    maxWidth: "200px",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "20px",
    width: "50%",
  },
  button: {
    background: "#9340FF",
    color: "white",
    marginBottom: "40px",
  },
  content: {
    padding: theme.spacing(8, 0, 6),
    // backgroundImage: "linear-gradient(red, yellow);",
    height: "100%",
    // background: "rgb(131,58,180)",
    background: "#101728",
  },
  comingSoon: {
    marginTop: "30px",
    lineHeight: "1.5",
    color: "white",
  },
}));

export default function Album() {
  const classes = useStyles();

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <strong>
        <div className={classes.box}>
          <span className={classes.counter}>{days}</span>
          <br />
          days
        </div>
        <div className={classes.box}>
          <span className={classes.counter}>{hours}</span>
          <br />
          hours
        </div>
        <div className={classes.box}>
          <span className={classes.counter}>{minutes}</span>
          <br />
          minutes
        </div>
        <div className={classes.box}>
          <span className={classes.counter}>{seconds}</span>
          <br />
          seconds
        </div>
      </strong>
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.content}>
        <Container maxWidth="sm">
          <img src={logo} alt="logo" className={classes.logo} />
          <hr />
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="textPrimary"
            className={classes.comingSoon}
            gutterBottom
          >
            NFT Community Growth Software
            <br />
            {/* <Countdown date={"2020-02-01T01:02:03"} /> */}
            {/* Use above example for specific date */}
            <Countdown date={Date.now() + 1000000000} renderer={renderer} />
          </Typography>
          <Grid container spacing={0} alignItems="center" justify="center">
            <div>
              <br />
              <Button
                className={classes.button}
                variant="contained"
                size="large"
                href="https://forms.gle/vwt3CcjFVmBDs6cq9"
              >
                Apply Here
              </Button>
            </div>
            <br />
            <div className={classes.video}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/C239XO_FU9E"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </Grid>
        </Container>
      </div>
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Album />, rootElement);
