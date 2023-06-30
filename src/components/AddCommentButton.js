import React from "react";
import { Grid, ButtonGroup, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const AddCommentButton = ({ onClick }) => {
  const { root } = useStyles();
  return (
    <Grid container className={root}>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <ButtonGroup variant="contained" color="primary">
            <Button size="large" onClick={onClick}>
              Add Comment
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddCommentButton;
