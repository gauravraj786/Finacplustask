import React, { Fragment, useState } from "react";
import {
  MenuItem,
  Checkbox,
  FormControl,
  TextField,
  ListItemText,
  Select,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import PopoverFooter from "./PopoverFooter";
import AddNewUser from "./AddNewUser";
import CommentCard from "./CommentCard";

const useStyles = makeStyles((theme) => ({
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const PopoverContent = (props) => {
  const classes = useStyles();
  const { comments, selectedComments, setSelectedComments } = props;
  const [comment, setComment] = useState("");
  const [people, setPeople] = useState(["Alice", "Bob", "Charlie"]);
  const [showAddNew, setShowAddNew] = useState(true);

  const handleAddNewClick = () => {
    setShowAddNew(false);
  };

  return (
    <Fragment>
      {comments.map((comment, index) => (
        <CommentCard key={index} commentData={comment} />
      ))}
      <FormControl className={classes.textField} fullWidth>
        <TextField
          id="outlined-basic"
          label="Comment"
          placeholder="Your Comment"
          variant="outlined"
          multiline
          minRows={2}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          style={{ marginBottom: "8px" }}
        />
        <Select
          multiple
          value={selectedComments}
          onChange={(e) => setSelectedComments(e.target.value)}
          renderValue={(selected) => "Tag to: ".concat(selected.join(" "))}
          variant="outlined"
          placeholder="Tag To:"
          style={{ marginBottom: "8px" }}
        >
          {people.map((person, index) => (
            <MenuItem key={index} value={person}>
              <ListItemIcon>
                <Checkbox checked={selectedComments.indexOf(person) > -1} />
              </ListItemIcon>
              <ListItemText primary={person} />
            </MenuItem>
          ))}
          {showAddNew && (
            <MenuItem onClick={handleAddNewClick}>Add New user</MenuItem>
          )}
          <AddNewUser
            showAddNew={showAddNew}
            setShowAddNew={setShowAddNew}
            people={people}
            setPeople={setPeople}
          />
        </Select>
        <PopoverFooter
          propsData={props}
          setComment={setComment}
          comment={comment}
        />
      </FormControl>
    </Fragment>
  );
};

export default PopoverContent;
