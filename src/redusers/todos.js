const INITIAL_STATE = {
  items: [],
  isFetching: false
};

const todos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_TODOS_REQUEST":
      return {
        ...state,
        isFetching: true
      };

    case "FETCH_TODOS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        items: action.todos
      };

    case "ADD_TODO":
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

    case "TOGGLE_TODO":
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
