import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { useContext } from "react";
import "./App.css";
import sunLogo from "./sun.svg";
import halfMoon from "./half-moon.svg";

const App = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App theme-${theme}`}>
      <img
        src={theme === "light" ? sunLogo : halfMoon}
        className="App-logo"
        alt="logo"
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={toggleTheme} className={`button-${theme}`}>
        {theme === "light" ? "Set Dark Mode" : "Set Light Mode"}
      </button>
    </div>
  );
};

export default () => (
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
