import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home/Home";
import MyProjects from "./pages/MyProjects/MyProjects";
import Contact from "./pages/Contact/Contact";
import Nav from "./components/Nav/Nav";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  // Used to keep track of the current location to enable page transition animations
  const location = useLocation();

  return (
    <section
      className={`content ${theme === "dark" ? "dark-theme" : "light-theme"}`}
    >
      <Nav />

      <button className="themeBtn" onClick={toggleTheme}>
        {theme === "light" ? "Dark Theme" : "Light Theme"}
      </button>

      <AnimatePresence initial={false}>
        <Routes>
          <Route path="/" element={<Home title="Välkommen 👋🏼" />} />
          <Route path="/myprojects" element={<MyProjects title="Projekt" />} />
          <Route path="/contact" element={<Contact title="Kontakta mig" />} />
        </Routes>
      </AnimatePresence>

      <Nav />
    </section>
  );
};

export default App;
