import React, { useState, useEffect } from "react";
import { Popover, makeStyles } from "@material-ui/core";
import { generateLoanId } from "../utils";
import axios from "axios";
import PopoverHeader from "./PopoverHeader";
import PopoverContent from "./PopoverContent";

const useStyles = makeStyles((theme) => ({
  popover: {
    padding: theme.spacing(5),
  },
}));

const CommentPopover = ({ popupAnchorEl, handlePopupClose }) => {
  const classes = useStyles();
  const [selectedComments, setSelectedComments] = useState([]);
  const [loanId, setLoanId] = useState("");
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/b0c7d7ea-5d09-4b9c-8d4b-c1b40cc39bc9")
      .then((response) => {
        const { comments } = response?.data || [];
        setCommentsData(comments);
      })
      .catch((error) => {
        console.error(error);
      });
    if (!!popupAnchorEl) {
      setLoanId(generateLoanId());
    }
  }, [popupAnchorEl]);

  const handleClose = () => {
    handlePopupClose();
    setSelectedComments([]);
    setLoanId("");
  };

  return (
    <Popover
      anchorEl={popupAnchorEl}
      open={Boolean(popupAnchorEl)}
      onClose={handleClose}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <div className={classes.popover}>
        <PopoverHeader
          loanId={loanId}
          onClick={handleClose}
          totalComment={commentsData.length}
        />
        <PopoverContent
          onClick={handleClose}
          comments={commentsData}
          setCommentsList={setCommentsData}
          selectedComments={selectedComments}
          setSelectedComments={setSelectedComments}
        />
      </div>
    </Popover>
  );
};
export default CommentPopover;
