import { combineReducers } from "redux";

// Initial theme state
const initialThemeState = {
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

// Combine reducers
const rootReducer = combineReducers({
  theme: themeReducer,
  // (additional reducers can be added here)
});

export default rootReducer;
