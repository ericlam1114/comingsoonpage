import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const useStylesToo = makeStyles((theme) => ({
  container: {
    display: "inline-block",
    // width: "100px",
    // height: "100px",
    // margin: "0 5px",
    paddingBottom: "2rem",
    fontSize: "1rem",
    // borderRadius: "80px",
    color: "white"
  }
}));
export default function Explanationbox() {
  const classes = useStylesToo();
  return (
    <div className={classes.container}>
      <p>The perfect tool for growth hackers.</p>
      <p>
        Collect Emails, Discordids and Twitter handles effortlessly and fast.
      </p>
      <p>
        Don't struggle with growth and sustainability. The tools are{" "}
        <span role="img" aria-label="smile">
          👇
        </span>
        .
      </p>
    </div>
  );
}
