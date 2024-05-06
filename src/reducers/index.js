import { combineReducers } from "redux";

const initialThemeState = {
  // Initial state
  theme: "dark",
};

/* themeReducer toggles between light and dark mode */
const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    // Reducer cases
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  theme: themeReducer,
  // Här kan jag lägga till reducers
});

export default rootReducer;
