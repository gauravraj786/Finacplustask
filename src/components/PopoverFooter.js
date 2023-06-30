import React, { useEffect, useState } from "react";
import { Grid, Button } from "@material-ui/core";

const PopoverFooter = ({ propsData, comment, setComment }) => {
  const {
    onClick,
    selectedComments,
    setSelectedComments,
    comments,
    setCommentsList,
  } = propsData;
  const [disabled, setDisbaled] = useState(true);

  useEffect(() => {
    setDisbaled(!comment);
  }, [comment]);

  const handleSave = () => {
    if (comment !== "") {
      const newComment = {
        updatedBy: "New User",
        comment: comment,
        updatedOn: new Date().toISOString(),
        taggedTo: selectedComments,
      };
      const updatedComments = [...comments, newComment];
      setCommentsList(updatedComments);
      setComment("");
      setSelectedComments([]);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item>
        <Button
          variant="contained"
          onClick={handleSave}
          disabled={disabled}
          color="primary"
        >
          Save
        </Button>
      </Grid>
      <Grid item>
        <Button variant="outlined" onClick={onClick}>
          Cancel
        </Button>
      </Grid>
    </Grid>
  );
};

export default PopoverFooter;
