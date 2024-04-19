import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const InfoPage = () => (
  <Container>
    <Typography variant="h4">App Information</Typography>
    <Typography variant="body1">
      Todo app built by Simeon Dimov for Duodeka.
    </Typography>
    <Typography variant="body1">
      The app is a demo showcasing the following features and functionality:
    </Typography>
    <List>
      <ListItem>
        <ListItemText>
          Global State Management: Based on React's Context API and useReducer
          for state management so all components have access to and can modify
          the todo list state.
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Todo Management Functions:
          <ul>
            <li>
              Add Todo: Add new todo items. Each item is assigned a an ID.
            </li>
            <li>
              Edit Todo: Todos can be edited directly in the list. Text is also
              editable.
            </li>
            <li>
              Solved/Not solved: Completion status can be toggled, by striking
              through the completed item.
            </li>
            <li>Delete Todo: Remove todo items from the list.</li>
          </ul>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Responsive UI: Navbar, todo component and all content are responsive
          and adapt to the device screen size.
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Snackbar: I use feedback mechanisms usually on all of my apps, so a
          snackbar pops up if a user tries to add an empty todo.
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Styling: I have used MaterialUI, but not really extensively, if you
          need more showcasing, let me know. Usually I build my own components
          with Vanilla CSS or Tailwind CSS, because of bitter experience of
          deprecation of MUI components which results in a need of refactoring
          them :).
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemText>
          Global State Management:
          <ul>
            <li>
              Global State Context: Two contexts are used — GlobalStateContext
              for accessing the state and GlobalDispatchContext for dispatching
              actions to the reducer.
            </li>
            <li>
              Reducer Function (globalReducer): This is the logic for adding,
              removing, toggling, and editing todos.
            </li>
            <li>
              GlobalProvider Component: Wraps the application in the
              GlobalStateContext.Provider and GlobalDispatchContext.Provider, so
              any child component cam access and modify the global todo list
              state.
            </li>
            <li>
              Custom Hooks: useGlobalState and useGlobalDispatch simplify state
              access and action dispatching, respectively.
            </li>
          </ul>
        </ListItemText>
      </ListItem>
    </List>
  </Container>
);

export default InfoPage;
