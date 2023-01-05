import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const useStylesToo = makeStyles((theme) => ({
  container: {
    display: "inline-block",
    // width: "100px",
    // height: "100px",
    // margin: "0 5px",
    // paddingTop: "14px",
    fontSize: "1rem",
    // borderRadius: "80px",
    color: "white"
  }
}));
export default function Explanationbox() {
  const classes = useStylesToo();
  return (
    <div className={classes.container}>
      <p>
        DataDegen is an NFT marketing funnel similar to ClickFunnels.com, but
        for NFT projects. This software integrates into your Discord to
        proactively present compelling offers in exchange for users supplying
        emails etc.
      </p>
      <p>
        We cross-reference user submitted data with the blockchain so that you
        get the ability to segment power users, from casual users. All data is
        exportable to CSV and can be easily used for Twitter lookalike
        audiences, email flows etc. empowering you to more effectively engage
        with your audience via omnichannel strategies.
      </p>
    </div>
  );
}
