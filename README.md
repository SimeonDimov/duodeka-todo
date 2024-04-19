# Pre-Interview Todo App for Duodeka

This is a simple Todo application built by Simeon Dimov as a pre-interview project for Duodeka. The app serves as a demonstration of various features and functionalities built using React and Material-UI.

## Features

### Global State Management

- **Based on React's Context API and useReducer:** For state management so all components have access to and can modify the todo list state.

### Todo Management Functions

- **Add Todo:** Add new todo items. Each item is assigned an ID.
- **Edit Todo:** Todos can be edited directly in the list. Text is also editable.
- **Solved/Not solved:** Completion status can be toggled, by striking through the completed item.
- **Delete Todo:** Remove todo items from the list.

### User Interface

- **Responsive UI:** Navbar, todo component, and all content are responsive and adapt to the device screen size.
- **Snackbar:** I use feedback mechanisms usually on all of my apps, so a snackbar pops up if a user tries to add an empty todo, a simple feature, but useful.
- **Styling:** I have used MaterialUI, but not really extensively, if you need more showcasing, let me know. Usually, I build my own components with Vanilla CSS or Tailwind CSS, because of the bitter experience of deprecation of MUI components which results in a need of refactoring them.

### State Management

- **Global State Context:** Two contexts are used — GlobalStateContext for accessing the state and GlobalDispatchContext for dispatching actions to the reducer.
- **Reducer Function (globalReducer):** This is the logic for adding, removing, toggling, and editing todos.
- **GlobalProvider Component:** Wraps the application in the GlobalStateContext.Provider and GlobalDispatchContext.Provider, so any child component can access and modify the global todo list state.
- **Custom Hooks:** useGlobalState and useGlobalDispatch simplify state access and action dispatching, respectively.

## Deployment

This application is deployed on Vercel, ensuring high availability and effortless scalability. You can visit the live application by following this link: [Visit Todo App](https://duodeka-todo.vercel.app/).

## Installation

To run the application locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.
4. Start the development server with `npm start`.
5. Open your web browser and navigate to `http://localhost:3000` to view the application.
