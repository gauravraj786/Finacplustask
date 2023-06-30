import React from "react";
import { Typography, Avatar, makeStyles } from "@material-ui/core";
import { formatDate, getInitials } from "../utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
  },
  commentContent: {
    marginBottom: theme.spacing(5),
  },
  avtar: {
    marginRight: "30px",
    background: "#9a609a",
  },
  name: {
    color: "#5f707d",
    fontWeight: "bold",
  },
  date: {
    color: "#5f707d",
  },
  tag: {
    background: "#badcff",
    fontWeight: "bold",
    margin: "0 2px",
    borderRadius: "6%",
    padding: "2px 4px",
  },
}));

const CommentCard = ({ commentData }) => {
  const classes = useStyles();
  const { updatedBy, comment, updatedOn, taggedTo } = commentData;
  return (
    <div className={classes.root}>
      <Avatar className={classes.avtar}>
        <Typography>{getInitials(updatedBy)}</Typography>
      </Avatar>
      <Typography variant="body1" className={classes.commentContent}>
        <div className={classes.name}>{updatedBy}</div>
        {comment + " "}
        <div>
          {taggedTo.length !== 0 && (
            <span>
              Tag To:
              {taggedTo.map((tag, index) => (
                <span key={index} className={classes.tag}>
                  {` ${tag}`}
                </span>
              ))}
            </span>
          )}
        </div>
        <div className={classes.date}>{formatDate(updatedOn)}</div>
      </Typography>
    </div>
  );
};

export default CommentCard;
