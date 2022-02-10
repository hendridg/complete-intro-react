import { StrictMode, useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Details from "./Details.js";
import ThemeContext from "./ThemeContext.js";

const App = () => {
  const theme = useState("darkBlue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
