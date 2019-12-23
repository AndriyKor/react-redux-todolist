import { ActionTypes } from "./../actions";

const INITIAL_STATE = {
  items: [],
  isFetching: false,
  errorMessage: ""
};

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS_REQUEST:
      return {
        ...state,
        isFetching: true
      };

    case ActionTypes.FETCH_TODOS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.todos,
        errorMessage: ""
      };

    case ActionTypes.FETCH_TODOS_ERROR:
      return {
        ...INITIAL_STATE,
        errorMessage: action.errorMessage
      };

    case ActionTypes.ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      };

    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )
      };

    default:
      return state;
  }
};

export default todos;
