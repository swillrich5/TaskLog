import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tasks from "./pages/Tasks";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/", "/tasks"]}>
            <Tasks />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
