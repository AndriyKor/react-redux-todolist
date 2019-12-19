import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./src/redusers";
import App from "./src/components/App";
import thunk from "redux-thunk";
//import axios from "axios";

// const getItems = () => {
//   const url = "https://5cab2c5ac85e05001452e5b3.mockapi.io/api/v1/todolist";
//   return axios.get(url);
// };

// const initialState = {
//   todos: []
// };
// getItems()
//   .then(response => {
//     initialState.todos = response.data.map(item => {
//       console.log(item);
//       return { id: item.id, text: item.text, completed: false };
//     });
//   })
//   .catch(error => {
//     console.log(error);
//   });

/*
const initialState = {
  todos: [
    {
      id: 1,
      text: "task 1",
      completed: false
    }
  ]
};
*/

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
