import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { useContext } from "react";
import "./App.css";
import sun from "./sun.svg";
import halfMoon from "./half-moon.svg";

const App = () => {
  const { theme, handleToggleTheme } = useContext(ThemeContext);

  return (
    <div className={`App theme-${theme}`}>
      <img
        src={theme === "light" ? sun : halfMoon}
        className="App-logo"
        alt="logo"
      />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <button onClick={handleToggleTheme} className={`button-${theme}`}>
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
