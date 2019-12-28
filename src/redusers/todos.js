import { ActionTypes } from "./../actions";

// STATE PATTERN
// const pattern = {
//   items: [
//     {
//       id: 1,
//       text: "Item name",
//       completed: false
//     }
//   ],
//   isFetching: false,
//   errorMessage: ""
// };

const INITIAL_STATE = {
  items: [],
  isFetching: false
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
        items: action.payload.todos,
        isFetching: false
      };

    case ActionTypes.FETCH_TODOS_ERROR:
      return {
        items: [],
        isFetching: false,
        errorMessage: action.payload.message
      };

    case ActionTypes.ADD_TODO:
      const { id, text } = action.payload;
      return {
        ...state,
        items: [
          ...state.items,
          {
            id,
            text,
            completed: false
          }
        ]
      };

    case ActionTypes.TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map(todo =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    default:
      return state;
  }
};

export default todos;
