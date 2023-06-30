import React, { useState } from "react";
import { Container } from "@material-ui/core";
import AddCommentButton from "./components/AddCommentButton";
import CommentPopover from "./components/CommentPopover";

const App = () => {
  const [popupAnchorEl, setPopupAnchorEl] = useState(null);

  const handleAddCommentClick = (event) => {
    setPopupAnchorEl(event.currentTarget);
  };

  const handlePopupClose = () => {
    setPopupAnchorEl(null);
  };

  return (
    <Container>
      <AddCommentButton onClick={handleAddCommentClick} />
      <CommentPopover
        popupAnchorEl={popupAnchorEl}
        handlePopupClose={handlePopupClose}
      />
    </Container>
  );
};

export default App;
