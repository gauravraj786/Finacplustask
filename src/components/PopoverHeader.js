import React from "react";
import { IconButton, Typography, makeStyles } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(5),
    paddingBottom: theme.spacing(2),
  },
  loanID: {
    [theme.breakpoints.down("xs")]: {
      top: theme.spacing(2),
      right: "0",
    },
    background: "#badcff",
    position: "absolute",
    padding: "8px 12px",
    borderRadius: "6%",
    right: theme.spacing(8),
    fontWeight: "bold",
  },
  spanComment: {
    position: "absolute",
    left: theme.spacing(0),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(0),
  },
}));

const PopoverHeader = ({ onClick, loanId, totalComment }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.spanComment}>
        Comments ({totalComment})
      </Typography>
      <div className={classes.loanID}>Loan ID - {loanId}</div>
      <IconButton className={classes.closeButton} onClick={onClick}>
        <Close />
      </IconButton>
    </div>
  );
};

export default PopoverHeader;
