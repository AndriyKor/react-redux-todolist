import { VisibilityFilters } from "../actions";

const INITIAL_STATE = VisibilityFilters.SHOW_ALL;

const visibilityFilter = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
