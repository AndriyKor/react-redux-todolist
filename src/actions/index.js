import axios from "axios";

let nextTodoId = 0;

export const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

export const toggleTodo = id => {
  return {
    type: "TOGGLE_TODO",
    id
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

// fetch data from API
export const fetchTodos = () => {
  return dispatch => {
    dispatch({
      type: "FETCH_TODOS_REQUEST"
    });

    return axios
      .get("https://5cab2c5ac85e05001452e5b3.mockapi.io/api/v1/todolist")
      .then(response => {
        dispatch({
          type: "FETCH_TODOS_SUCCESS",
          todos: response.data.map(item => {
            return {
              id: item.id,
              text: item.text,
              completed: false
            };
          })
        });

        nextTodoId = response.data.length + 1;
      });
  };
};
