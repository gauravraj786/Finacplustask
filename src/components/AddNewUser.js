import React, { Fragment, useState } from "react";
import { Snackbar, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { Check, Close } from "@material-ui/icons";

const AddNewUser = ({ showAddNew, setShowAddNew, people, setPeople }) => {
  const [newUser, setNewUser] = useState("");
  const [snackbar, setSnackbar] = useState({});
  const [focus, setFocus] = useState(true);

  const handleTickClick = () => {
    if (newUser === "") {
      setSnackbar({
        show: true,
        msg: "Please enter a valid username",
      });
      setFocus(true);
    } else if (people.includes(newUser)) {
      setSnackbar({
        show: true,
        msg: "Username already exists",
      });
      setFocus(true);
    } else {
      const updatedPeople = [...people, newUser].sort();
      setPeople(updatedPeople);
      setNewUser("");
      setShowAddNew(true);
    }
  };

  const { show = false, msg = "" } = snackbar;

  return (
    <Fragment>
      {!showAddNew && (
        <div>
          <TextField
            id="newUserInput"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
            autofocus={focus}
            style={{
              marginLeft: "2.5rem",
            }}
          />
          <span onClick={handleTickClick}>
            <Check />
          </span>{" "}
          <Close onClick={() => setShowAddNew(true)} />
        </div>
      )}
      <Snackbar
        open={show}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ show: false, msg: "" })}
      >
        <Alert
          onClose={() => setSnackbar({ show: false, msg: "" })}
          severity="error"
        >
          {msg}
        </Alert>
      </Snackbar>
    </Fragment>
  );
};

export default AddNewUser;
