import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Snackbar,
  Alert,
  ListItemText,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Close";
import { useGlobalState, useGlobalDispatch } from "../contexts/GlobalState";
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
} from "../actions/GlobalStateActions";

export const TodoList = () => {
  const { todos } = useGlobalState();
  const dispatch = useGlobalDispatch();
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState({});
  const [open, setOpen] = useState(false);

  const handleAddTodo = () => {
    if (!input.trim()) {
      setOpen(true);
      return;
    }
    dispatch({
      type: ADD_TODO,
      payload: { id: Date.now(), text: input, completed: false },
    });
    setInput("");
  };

  const handleEditTodo = (id, text) => {
    setEdit({ id, text });
  };

  const handleSaveEdit = () => {
    dispatch({ type: EDIT_TODO, payload: edit });
    setEdit({});
  };

  const handleChangeEdit = (event) => {
    setEdit((prev) => ({ ...prev, text: event.target.value }));
  };

  const handleCancelEdit = () => {
    setEdit({});
  };

  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ maxWidth: "xs", p: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={36}>
          <TextField
            fullWidth
            label="Add new todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            variant="outlined"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddTodo}
            sx={{ mt: 1, mb: 2 }}
          >
            Add Todo
          </Button>
        </Grid>
        <Grid item xs={36}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              Cannot add an empty TODO!
            </Alert>
          </Snackbar>
        </Grid>
        {todos.map((todo) => (
          <Grid item xs={36} key={todo.id}>
            <Paper
              sx={{
                p: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {edit.id === todo.id ? (
                <>
                  <TextField
                    value={edit.text}
                    onChange={handleChangeEdit}
                    fullWidth
                    variant="outlined"
                    sx={{ mb: 1 }}
                  />
                  <div>
                    <IconButton onClick={handleSaveEdit} color="primary">
                      <SaveIcon />
                    </IconButton>
                    <IconButton onClick={handleCancelEdit} color="secondary">
                      <CancelIcon />
                    </IconButton>
                  </div>
                </>
              ) : (
                <>
                  <ListItemText
                    primary={todo.text}
                    sx={{
                      textDecoration: todo.completed ? "line-through" : "none",
                      width: "100%",
                      textAlign: "center",
                    }}
                  />
                  <div>
                    <IconButton
                      onClick={() => handleEditTodo(todo.id, todo.text)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        dispatch({ type: TOGGLE_TODO, payload: todo.id })
                      }
                    >
                      <CheckIcon
                        color={todo.completed ? "success" : "default"}
                      />
                    </IconButton>
                    <IconButton
                      onClick={() =>
                        dispatch({ type: REMOVE_TODO, payload: todo.id })
                      }
                    >
                      <DeleteIcon />
                    </IconButton>
                  </div>
                </>
              )}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
