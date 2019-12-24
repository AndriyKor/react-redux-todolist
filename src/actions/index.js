import axios from "axios";

/*
// Action pattern
const patern = {
  type: "ACTION_NAME",
  payload: {
    // ADD TODO
    id: 1,
    text: "Item text",

    // TOOGLE TODO
    id: 1,

    // SET VISIBILITY FILTER
    filter: "Filter name",

    // FETCH TODO REQUEST
    // nothing is needed

    // FETCH TODO SUCCESS
    todos: [
      {
        id: 1,
        text: "Item text",
        completed: false
      }
    ]

    // FETCH TODO ERROR
    = new Error("Error message"),
  },

  // Equals to 'true' if action is FETCH TODO ERROR
  error: false,

  // Any extra information that is not part of the payload
  meta: {}
};
*/

let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: ActionTypes.ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: ActionTypes.TOGGLE_TODO,
    id
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: ActionTypes.SET_VISIBILITY_FILTER,
    filter
  };
};

// fetch data from API
export const fetchTodos = () => {
  return dispatch => {
    dispatch({
      type: ActionTypes.FETCH_TODOS_REQUEST
    });

    return axios
      .get("https://5cab2c5ac85e05001452e5b3.mockapi.io/api/v1/todolist")
      .then(response => {
        dispatch({
          type: ActionTypes.FETCH_TODOS_SUCCESS,
          todos: response.data.map(item => {
            return {
              id: item.id,
              text: item.text,
              completed: false
            };
          })
        });

        nextTodoId = response.data.length + 1;
      })
      .catch(error => {
        dispatch({
          type: ActionTypes.FETCH_TODOS_ERROR,
          todos: [],
          errorMessage: error.message
        });
      });
  };
};

export const ActionTypes = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  FETCH_TODOS_REQUEST: "FETCH_TODOS_REQUEST",
  FETCH_TODOS_SUCCESS: "FETCH_TODOS_SUCCESS",
  FETCH_TODOS_ERROR: "FETCH_TODOS_ERROR",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
